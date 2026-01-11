import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { YmPicker } from "./year-month-picker";
import { useState } from "react";

describe("YmPicker (Vitest)", () => {
  it("기본 message를 렌더링한다", () => {
    render(<YmPicker />);

    expect(screen.getByText("Select date")).toBeInTheDocument();
  });

  it("year 선택 시 onSelect가 호출된다", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <YmPicker
        mode="year"
        ym={{ year: null, month: null }}
        onSelect={onSelect}
      />
    );

    const yearButton = screen.getAllByRole("button")[0];
    await user.click(yearButton!);

    expect(onSelect).toHaveBeenCalledOnce();
    expect(onSelect).toHaveBeenCalledWith({
      year: Number(yearButton!.textContent),
      month: null,
    });
  });

  it("year-month 모드에서 year 선택 후 month 선택이 가능하다", async () => {
    const user = userEvent.setup();

    function Wrapper() {
      const [ym, setYm] = useState<{
        year: number | null;
        month: number | null;
      }>({
        year: null,
        month: null,
      });

      return <YmPicker mode="year-month" ym={ym} onSelect={setYm} />;
    }

    render(<Wrapper />);

    // year 선택
    const yearButton = screen
      .getAllByRole("button")
      .find((b) => b.textContent === "2006")!;
    await user.click(yearButton);

    // month 선택
    const monthButton = screen.getByText("6");
    await user.click(monthButton);

    // month 버튼 자체만 검증
    expect(monthButton).toHaveAttribute("aria-pressed", "true");
  });

  it("mode=month 인 경우 year 그리드는 렌더링되지 않는다", () => {
    render(<YmPicker mode="month" ym={{ year: 2024, month: null }} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.queryByText("2024")).not.toBeInTheDocument();
  });

  it("선택된 year는 aria-pressed=true 상태이다", () => {
    render(<YmPicker mode="year" ym={{ year: 2022, month: null }} />);

    const selected = screen.getByRole("button", { pressed: true });
    expect(selected).toHaveTextContent("2022");
  });

  it("선택된 month는 aria-pressed=true 상태이다", () => {
    render(<YmPicker mode="month" ym={{ year: 2024, month: 3 }} />);

    const selected = screen.getByRole("button", { pressed: true });
    expect(selected).toHaveTextContent("3");
  });
});
