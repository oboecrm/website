import { cn } from "@/lib/utils";

type CodeSampleProps = {
  filename?: string;
  code: string;
  className?: string;
};

export function CodeSample({ filename, code, className }: CodeSampleProps) {
  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl",
        className,
      )}
    >
      {filename ? (
        <div className="border-b border-zinc-800 px-4 py-2.5 font-mono text-xs text-zinc-500">
          {filename}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-zinc-300 sm:p-5 sm:text-sm">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="block whitespace-pre">
              <span className="inline-block w-8 select-none text-right text-zinc-600 sm:w-10">
                {i + 1}
              </span>
              <span className="pl-4 sm:pl-6">{line}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
