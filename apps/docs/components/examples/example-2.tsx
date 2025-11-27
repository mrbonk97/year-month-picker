import { CodeHighlight } from "../code-highlight";
import { Example2Component } from "./example-2-component";

const code = `"use client";

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
          {ym.year && ym.month ? \`\$\{ym.year\} · \$\{ym.month\}\` : "Select date"}
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

`;

export async function Example2() {
  return (
    <div className="mt-2">
      <div className="p-2 h-96 rounded-t-md border-x border-t flex items-center justify-center">
        <Example2Component />
      </div>
      <CodeHighlight code={code} className="rounded-b-md" />
    </div>
  );
}
