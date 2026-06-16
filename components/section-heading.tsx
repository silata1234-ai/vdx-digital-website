import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-5 ${textAlign}`}>
      <div className="section-eyebrow rounded-full">
        <Sparkles className="h-3.5 w-3.5" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="section-subtitle max-w-4xl">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
