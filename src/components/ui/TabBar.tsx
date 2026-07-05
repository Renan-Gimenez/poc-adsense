import type { Language } from "../../types/tutorial";

interface Tab {
  id: Language;
  label: string;
  emoji: string;
}

const TABS: Tab[] = [
  { id: "all", label: "Todos", emoji: "✦" },
  { id: "javascript", label: "JavaScript", emoji: "JS" },
  { id: "python", label: "Python", emoji: "Py" },
  { id: "react", label: "React", emoji: "⚛" },
];

interface TabBarProps {
  active: Language;
  onChange: (lang: Language) => void;
}

export function TabBar({ active, onChange }: TabBarProps) {
  return (
    <div className="relative flex gap-1 rounded-xl bg-white/5 p-1" role="tablist" aria-label="Filtrar por linguagem">
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            id={`tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={[
              "relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5",
            ].join(" ")}
          >
            {/* Emoji/icon badge */}
            <span
              className={[
                "flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold",
                isActive ? "bg-cyan-500/20 text-cyan-300" : "bg-white/5 text-zinc-500",
              ].join(" ")}
            >
              {tab.emoji}
            </span>
            {tab.label}
            {/* Active indicator */}
            {isActive && (
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            )}
          </button>
        );
      })}
    </div>
  );
}
