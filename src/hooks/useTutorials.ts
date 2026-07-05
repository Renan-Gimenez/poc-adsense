import { useState, useEffect, useMemo } from "react";
import type { Tutorial, Language } from "../types/tutorial";
import { tutorials as mockTutorials } from "../data/tutorials";

interface UseTutorialsReturn {
  tutorials: Tutorial[];
  loading: boolean;
  error: string | null;
}

/**
 * Hook que abstrai a fonte dos tutoriais.
 * Atualmente usa dados mockados. No futuro, basta trocar a lógica
 * interna para fazer um fetch à API — os componentes não mudam.
 */
export function useTutorials(language?: Language): UseTutorialsReturn {
  const [loading, setLoading] = useState(false);
  const [error] = useState<string | null>(null);

  // Simula um estado de carregamento inicial (remover quando usar API real)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [language]);

  // Futuramente: substituir por fetch
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`/api/tutorials?language=${language ?? "all"}`)
  //     .then((res) => res.json())
  //     .then((data) => setTutorials(data))
  //     .catch(() => setError("Erro ao carregar tutoriais"))
  //     .finally(() => setLoading(false));
  // }, [language]);

  const filtered = useMemo(() => {
    if (!language || language === "all") return mockTutorials;
    return mockTutorials.filter((t) => t.language === language);
  }, [language]);

  return { tutorials: filtered, loading, error };
}

export function useTutorialBySlug(slug: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const found = mockTutorials.find((t) => t.slug === slug) ?? null;
      setTutorial(found);
      if (!found) setError("Tutorial não encontrado");
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);

  return { tutorial, loading, error };
}
