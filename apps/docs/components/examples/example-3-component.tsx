"use client";

import { useState } from "react";
import { YmPicker } from "year-month-picker";

interface Props {
  mode: "year-month" | "year" | "month";
}

export function Example3Component({ mode }: Props) {
  const [ym, setYm] = useState<{ year: number | null; month: number | null }>({
    year: null,
    month: null,
  });

  return <YmPicker ym={ym} onSelect={setYm} mode={mode} />;
}
