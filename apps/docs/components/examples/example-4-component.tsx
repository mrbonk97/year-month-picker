"use client";

import { useState } from "react";
import { YmPicker } from "year-month-picker";

export function Example4Component() {
  const [ym, setYm] = useState<{ year: number | null; month: number | null }>({
    year: null,
    month: null,
  });

  return (
    <YmPicker
      ym={ym}
      onSelect={setYm}
      message="Customize it!"
      container={{ className: "bg-rose-50 rounded-lg" }}
      button={{
        className: "bg-rose-200 rounded-full text-rose-400",
      }}
    />
  );
}
