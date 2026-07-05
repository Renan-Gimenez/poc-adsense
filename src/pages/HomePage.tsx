import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Sparkles, TrendingUp } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AdBanner } from "../components/layout/AdBanner";
import { TabBar } from "../components/ui/TabBar";
import { SearchBar } from "../components/ui/SearchBar";
import { TutorialList } from "../components/tutorial/TutorialList";
import { useTutorials } from "../hooks/useTutorials";
import type { Language } from "../types/tutorial";

export function HomePage() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { tutorials, loading } = useTutorials(activeLanguage);

  const filteredTutorials = useMemo(() => {
    if (!searchQuery.trim()) return tutorials;
    const q = searchQuery.toLowerCase();
    return tutorials.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [tutorials, searchQuery]);

  const handleLanguageChange = (lang: Language) => {
    setActiveLanguage(lang);
    setSearchQuery("");
  };

  return (
    <>
      <Helmet>
        <title>DevTips — Tutoriais Práticos de Programação</title>
        <meta
          name="description"
          content="Aprenda programação com tutoriais práticos e diretos sobre JavaScript, Python e React. Dicas, exemplos e boas práticas para devs de todos os níveis."
        />
        <meta name="keywords" content="tutoriais programação, javascript, python, react, desenvolvimento web, dicas de código" />
        <meta property="og:title" content="DevTips — Tutoriais Práticos de Programação" />
        <meta property="og:description" content="Tutoriais de JavaScript, Python e React com exemplos práticos." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 text-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6" aria-labelledby="hero-heading">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <div className="h-[400px] w-[700px] rounded-full bg-cyan-500/5 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium text-cyan-400">
                <Sparkles className="h-3.5 w-3.5" />
                Tutoriais práticos e atualizados
              </div>

              {/* Heading */}
              <h1
                id="hero-heading"
                className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Aprenda programação{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  de forma prática
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mb-8 text-lg leading-relaxed text-zinc-400 sm:text-xl">
                Tutoriais diretos ao ponto sobre JavaScript, Python e React.
                <br className="hidden sm:block" />
                Sem enrolação, com exemplos reais.
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-cyan-500/60" />
                  {6} tutoriais disponíveis
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span>JS · Python · React</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span>Atualizado em 2026</span>
              </div>
            </div>
          </section>

          {/* AdBanner — Topo */}
          <div className="mx-auto flex max-w-7xl justify-center px-4 pb-10 sm:px-6">
            <AdBanner slot="9876543210" size="horizontal" />
          </div>

          {/* Tutorials Section */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6" aria-label="Tutoriais">
            {/* Controls */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <TabBar active={activeLanguage} onChange={handleLanguageChange} />
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            {/* Tutorial Count */}
            {!loading && (
              <p className="mb-6 text-sm text-zinc-500">
                {filteredTutorials.length} tutorial
                {filteredTutorials.length !== 1 ? "is" : ""} encontrado
                {filteredTutorials.length !== 1 ? "s" : ""}
                {activeLanguage !== "all" && ` em ${activeLanguage}`}
                {searchQuery && ` para "${searchQuery}"`}
              </p>
            )}

            {/* Grid */}
            <TutorialList tutorials={filteredTutorials} loading={loading} />
          </section>

          {/* Bottom spacing */}
          <div className="pb-16" />
        </main>

        <Footer />
      </div>
    </>
  );
}
