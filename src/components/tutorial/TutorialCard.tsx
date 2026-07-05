import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import type { Tutorial } from "../../types/tutorial";
import { Badge } from "../ui/Badge";

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(tutorial.publishedAt));

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]">
      {/* Gradient accent top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6">
        {/* Badge */}
        <div className="mb-4">
          <Badge language={tutorial.language} />
        </div>

        {/* Title */}
        <h2 className="mb-2 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-cyan-50">
          {tutorial.title}
        </h2>

        {/* Description */}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
          {tutorial.description}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {tutorial.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-zinc-500"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {tutorial.readingTimeMinutes} min de leitura
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
          </div>

          {/* CTA */}
          <Link
            to={`/tutorial/${tutorial.slug}`}
            aria-label={`Ler tutorial: ${tutorial.title}`}
            className="flex items-center gap-1.5 rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-400 ring-1 ring-cyan-500/20 transition-all hover:bg-cyan-500/20 hover:text-cyan-300 hover:ring-cyan-500/40"
          >
            Ler mais
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
