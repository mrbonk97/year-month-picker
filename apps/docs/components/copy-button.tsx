"use client";
import { toast } from "sonner";
import { Copy } from "lucide-react";

interface Props {
  text: string;
}

export function CopyButton({ text }: Props) {
  const handleCopy = () => {
    window.navigator.clipboard.writeText(text);
    toast.message("Copied to clipboard");
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg cursor-pointer hover:bg-secondary hover:text-secondary-foreground duration-300"
    >
      <Copy size={18} />
    </button>
  );
}
