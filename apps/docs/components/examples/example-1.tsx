import { CodeHighlight } from "../code-highlight";
import { Example1Component } from "./example-1-component";

const code = `"use client"

import { useState } from "react";
import { YmPicker } from "year-month-picker";

export function Example() {
  const [ym, setYm] = useState<{ year: number | null; month: number | null }>({
    year: null,
    month: null,
  });

  return <YmPicker ym={ym} onSelect={setYm} />;
}

`;

export async function Example1() {
  return (
    <div className="mt-2">
      <div className="p-2 h-96 rounded-t-md border-x border-t flex items-center justify-center">
        <Example1Component />
      </div>
      <CodeHighlight code={code} className="rounded-b-md" />
    </div>
  );
}
