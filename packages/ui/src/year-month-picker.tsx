"use client";

import {
  useRef,
  useState,
  useContext,
  createContext,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";
import styled from "@emotion/styled";

const PickerCSS = styled.div`
  border: 1px solid oklch(0.929 0.013 255.508);
  width: fit-content;
`;

const HeaderCSS = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid oklch(0.929 0.013 255.508);
`;

const BodyCSS = styled.div`
  position: relative;
  height: 176px;
`;

const YearCSS = styled.div<{ isFullMode: boolean; active: boolean }>`
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  overflow-y: auto;

  /* scroll-hidden */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  transition: all 500ms ease;

  /* position vs h-full */
  position: ${(props) => (props.isFullMode ? "absolute" : "relative")};
  inset: ${(props) => (props.isFullMode ? "0" : "auto")};
  height: ${(props) => (props.isFullMode ? "auto" : "100%")};

  /* 활성/비활성 상태 */
  transform: ${(props) => (props.active ? "scale(1)" : "scale(1.25)")};
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
`;

const MonthCSS = styled.div<{ active: boolean }>`
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  transition: all 500ms ease;
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
`;

const ButtonCSS = styled.button`
  height: 48px;
  width: 48px;
  font-size: 14px;
  transition: all 150ms ease-in-out;
  border: 1px solid oklch(0.929 0.013 255.508);

  &:hover {
    background-color: oklch(0.968 0.007 247.896);
  }

  &[aria-pressed="true"] {
    background-color: oklch(0.968 0.007 247.896);
  }
`;

type Mode = "year" | "month" | "year-month";
type View = "year" | "month";
type Ym = { year: number | null; month: number | null };

type YmPickerSlots = {
  container?: React.HTMLAttributes<HTMLDivElement> | undefined;
  header?: React.HTMLAttributes<HTMLDivElement> | undefined;
  yearGrid?: React.HTMLAttributes<HTMLDivElement> | undefined;
  monthGrid?: React.HTMLAttributes<HTMLDivElement> | undefined;
  button?: React.HTMLAttributes<HTMLButtonElement> | undefined;
};

const context = createContext<{
  mode: Mode;
  ym: Ym;
  onSelect: ((ym: Ym) => void) | undefined;
  view: View;
  setView: Dispatch<SetStateAction<View>>;
  slots?: YmPickerSlots;
}>({
  mode: "year-month",
  ym: { year: null, month: null },
  onSelect: undefined,
  view: "year",
  setView: () => {},
  slots: {},
});

interface YmPickerProps extends YmPickerSlots {
  mode?: Mode;
  message?: string;
  ym?: Ym;
  onSelect?: (ym: Ym) => void;
}

export function YmPicker({
  mode = "year-month",
  message = "Select date",
  ym = { year: null, month: null },
  onSelect,
  container,
  header,
  yearGrid,
  monthGrid,
  button,
}: YmPickerProps) {
  const initialView: View = mode === "month" ? "month" : "year";
  const [view, setView] = useState<View>(initialView);

  const values = {
    mode: mode,
    ym: ym,
    onSelect: onSelect,
    view: view,
    setView: setView,
    slots: { header, yearGrid, monthGrid, button },
  };

  return (
    <context.Provider value={values}>
      <div>
        <PickerCSS {...(container ?? {})}>
          <YmPickerHeader message={message} />
          <BodyCSS>
            {(mode === "year-month" || mode === "year") && <YmPickerYearGrid />}
            {(mode === "year-month" || mode === "month") && (
              <YmPickerMonthGrid />
            )}
          </BodyCSS>
        </PickerCSS>
      </div>
    </context.Provider>
  );
}

interface HeaderProps {
  message: string | undefined;
}

function YmPickerHeader({ message }: HeaderProps) {
  const { ym, setView, mode, slots } = useContext(context);
  const slotProps = slots?.header ?? {};

  const handleClick = (m: View) => {
    setView(m);
  };

  if (!ym.year && !ym.month) {
    return <HeaderCSS {...slotProps}>{message}</HeaderCSS>;
  }

  return (
    <HeaderCSS {...slotProps}>
      {(mode === "year-month" || mode === "year") && (
        <button onClick={() => handleClick("year")}>{ym.year}</button>
      )}
      {mode === "year-month" && <span>·</span>}
      {(mode === "year-month" || mode === "month") && (
        <button onClick={() => handleClick("month")}>{ym.month}</button>
      )}
    </HeaderCSS>
  );
}

function YmPickerYearGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [baseYear, setBaseYear] = useState(new Date().getFullYear() - 20);
  const { ym, onSelect, view, setView, mode, slots } = useContext(context);
  const slotProps = slots?.yearGrid ?? {};

  // infinite scroll
  const handleScroll = () => {
    const el = ref.current;
    if (!el) return;

    const scrollTop = el.scrollTop;
    const max = el.scrollHeight - el.clientHeight;
    const onLoopHeight = max / 8;

    // when reach bottom
    if (scrollTop >= max - 4) {
      el.scrollTop = onLoopHeight * 2 + 22;
      setBaseYear((cur) => (cur += 60));
      return;
    }

    // when reach top
    if (scrollTop <= 4) {
      el.scrollTop = onLoopHeight * 6 - 22;
      setBaseYear((cur) => (cur -= 48));
    }
  };

  const handleClick = (year: number) => {
    if (onSelect) onSelect({ year: year, month: ym.month });
    if (mode === "year-month") setView("month");
  };

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const max = el.scrollHeight - el.clientHeight;
    const onLoopHeight = max / 8;
    el.scrollTop = onLoopHeight * 2 + 42;
  }, []);

  return (
    <YearCSS
      ref={ref}
      onScroll={handleScroll}
      isFullMode={mode === "year-month"}
      active={view === "year" || mode === "year"}
      {...slotProps}
    >
      {Array.from({ length: 80 }).map((_, idx) => {
        const year = baseYear + idx;
        return (
          <YmPickerButton
            key={`ym-y-${year}`}
            ariaPressed={ym.year === year}
            onClick={() => handleClick(year)}
            text={year}
          />
        );
      })}
    </YearCSS>
  );
}

function YmPickerMonthGrid() {
  const { ym, onSelect, view, mode, slots } = useContext(context);
  const slotProps = slots?.monthGrid ?? {};

  const handleClick = (month: number) => {
    if (onSelect) onSelect({ year: ym.year, month: month });
  };

  return (
    <MonthCSS active={view === "month" || mode === "month"} {...slotProps}>
      {Array.from({ length: 12 }).map((_, idx) => {
        const month = idx + 1;
        return (
          <YmPickerButton
            key={`ym-m-${month}`}
            ariaPressed={ym.month === month}
            onClick={() => handleClick(month)}
            text={month}
          />
        );
      })}
    </MonthCSS>
  );
}

interface YmPickerButtonProps {
  text: string | number;
  ariaPressed: boolean;
  onClick: () => void;
}

function YmPickerButton({ text, ariaPressed, onClick }: YmPickerButtonProps) {
  const { slots } = useContext(context);
  const slotProps = slots?.button ?? {};

  return (
    <ButtonCSS aria-pressed={ariaPressed} onClick={onClick} {...slotProps}>
      {text}
    </ButtonCSS>
  );
}
