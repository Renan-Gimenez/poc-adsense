import { Fragment } from "react";
import type { Tutorial } from "../../types/tutorial";
import { TutorialCard } from "./TutorialCard";
import { AdBanner } from "../layout/AdBanner";

interface TutorialListProps {
  tutorials: Tutorial[];
  loading?: boolean;
}

function SkeletonCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6 animate-pulse">
      <div className="mb-4 h-5 w-24 rounded-full bg-white/10" />
      <div className="mb-2 h-6 w-full rounded-lg bg-white/10" />
      <div className="mb-1 h-4 w-full rounded-lg bg-white/5" />
      <div className="mb-6 h-4 w-3/4 rounded-lg bg-white/5" />
      <div className="mb-5 flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-5 w-16 rounded-full bg-white/5" />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="h-4 w-32 rounded-lg bg-white/5" />
        <div className="h-7 w-20 rounded-lg bg-white/10" />
      </div>
    </div>
  );
}

export function TutorialList({ tutorials, loading = false }: TutorialListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (tutorials.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-4 text-5xl">🔍</div>
        <h3 className="mb-2 text-lg font-semibold text-zinc-300">
          Nenhum tutorial encontrado
        </h3>
        <p className="text-sm text-zinc-500">
          Tente outro filtro ou termo de busca.
        </p>
      </div>
    );
  }

  // Inserir anúncio após a 3ª posição (índice 2)
  const AD_INSERT_POSITION = 3;

  return (
    <div
      role="tabpanel"
      aria-label="Lista de tutoriais"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {tutorials.map((tutorial, index) => (
        <Fragment key={tutorial.id}>
          <TutorialCard tutorial={tutorial} />
          {/* AdBanner inserted in grid after position 3, spanning all columns */}
          {index === AD_INSERT_POSITION - 1 && (
            <div
              className="col-span-1 flex justify-center sm:col-span-2 lg:col-span-3"
            >
              <AdBanner slot="1234567890" size="horizontal" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
