import type { Language } from "../../types/tutorial";

interface BadgeProps {
  language: Language;
  size?: "sm" | "md";
}

const LANGUAGE_CONFIG: Record<
  Exclude<Language, "all">,
  { label: string; classes: string }
> = {
  javascript: {
    label: "JavaScript",
    classes: "bg-yellow-500/10 text-yellow-300 ring-yellow-500/20",
  },
  python: {
    label: "Python",
    classes: "bg-blue-500/10 text-blue-300 ring-blue-500/20",
  },
  react: {
    label: "React",
    classes: "bg-cyan-500/10 text-cyan-300 ring-cyan-500/20",
  },
};

export function Badge({ language, size = "sm" }: BadgeProps) {
  if (language === "all") return null;

  const config = LANGUAGE_CONFIG[language];
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ring-1 ${sizeClasses} ${config.classes}`}
    >
      {config.label}
    </span>
  );
}
