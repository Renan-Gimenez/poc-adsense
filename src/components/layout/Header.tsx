import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="DevTips - Ir para home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/30 transition-all group-hover:bg-cyan-500/20 group-hover:ring-cyan-500/60">
            <Code2 className="h-5 w-5 text-cyan-400" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Dev</span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Tips
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-1">
            <li>
              <Link
                to="/"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Tutoriais
              </Link>
            </li>
            <li>
              <a
                href="#javascript"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                JavaScript
              </a>
            </li>
            <li>
              <a
                href="#python"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Python
              </a>
            </li>
            <li>
              <a
                href="#react"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                React
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
