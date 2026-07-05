import { Link } from "react-router-dom";
import { Code2, GitBranch, Globe } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2" aria-label="DevTips">
              <Code2 className="h-5 w-5 text-cyan-400" />
              <span className="text-lg font-bold">
                <span className="text-white">Dev</span>
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                  Tips
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tutoriais práticos e diretos sobre programação. Aprenda fazendo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-600 transition-colors hover:text-cyan-400"
              >
                <GitBranch className="h-5 w-5" />
              </a>
              <a
                href="https://devtips.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="text-zinc-600 transition-colors hover:text-cyan-400"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Linguagens */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Linguagens
            </h3>
            <ul className="space-y-2">
              {["JavaScript", "Python", "React"].map((lang) => (
                <li key={lang}>
                  <Link
                    to={`/?lang=${lang.toLowerCase()}`}
                    className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                  >
                    {lang}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tópicos */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Tópicos populares
            </h3>
            <ul className="space-y-2">
              {[
                "Strings e Arrays",
                "Funções e Closures",
                "Hooks React",
                "Programação Funcional",
                "APIs e Fetch",
              ].map((topic) => (
                <li key={topic}>
                  <span className="text-sm text-zinc-500">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {year} DevTips. Feito com ❤️ para a comunidade dev.
          </p>
          <p className="text-xs text-zinc-700">
            Conteúdo educacional • Sem fins lucrativos
          </p>
        </div>
      </div>
    </footer>
  );
}
