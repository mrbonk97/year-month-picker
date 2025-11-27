"use client";

import { useState } from "react";
import { YmPicker } from "year-month-picker";

export function Example1Component() {
  const [ym, setYm] = useState<{ year: number | null; month: number | null }>({
    year: null,
    month: null,
  });

  return <YmPicker ym={ym} onSelect={setYm} />;
}
