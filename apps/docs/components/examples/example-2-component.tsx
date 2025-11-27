"use client";

import { useState } from "react";
import { YmPicker } from "year-month-picker";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Example2Component() {
  const [ym, setYm] = useState<{ year: number | null; month: number | null }>({
    year: null,
    month: null,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className="min-w-32">
          {ym.year && ym.month ? `${ym.year} · ${ym.month}` : "Select date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <YmPicker
          ym={ym}
          onSelect={setYm}
          container={{ className: "border-none! w-full!" }}
        />
      </PopoverContent>
    </Popover>
  );
}
