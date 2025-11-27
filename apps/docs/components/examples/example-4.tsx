import { CodeHighlight } from "../code-highlight";
import { Example4Component } from "./example-4-component";

const code = `"use client";

import { useState } from "react";
import { YmPicker } from "year-month-picker";

export function Example() {
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
  
`;

export function Example4() {
  return (
    <div className="mt-2">
      <div className="p-2 h-96 border-x border-t flex items-center justify-center">
        <Example4Component />
      </div>
      <CodeHighlight code={code} className={"border-b rounded-b-md"} />
    </div>
  );
}
