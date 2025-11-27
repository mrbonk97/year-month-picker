import { cn } from "@/lib/utils";
import { createHighlighter } from "shiki";
import { CopyButton } from "./copy-button";

interface Props {
  code: string;
  lang?: string;
  className?: string;
}

export async function CodeHighlight({
  code,
  lang = "typescript",
  className,
}: Props) {
  const highlighter = await createHighlighter({
    themes: ["catppuccin-frappe"],
    langs: ["typescript"],
  });

  const html = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "catppuccin-frappe",
  });

  highlighter.dispose();

  return (
    <div className={cn("p-2 bg-[#303446]", className)}>
      <div className="p-2 flex items-center justify-between border-b text-primary-foreground border-b-primary-foreground">
        <span>{lang}</span>
        <CopyButton text={code} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} className="mt-2" />
    </div>
  );
}
