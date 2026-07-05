import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AdBanner } from "../components/layout/AdBanner";
import { Badge } from "../components/ui/Badge";
import { MarkdownRenderer } from "../components/tutorial/MarkdownRenderer";
import { useTutorialBySlug } from "../hooks/useTutorials";

function TutorialSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-6 w-24 rounded-full bg-white/10" />
      <div className="mb-4 h-10 w-3/4 rounded-xl bg-white/10" />
      <div className="mb-8 h-4 w-1/2 rounded-lg bg-white/5" />
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded-lg bg-white/5"
            style={{ width: `${Math.random() * 40 + 60}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function TutorialDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { tutorial, loading, error } = useTutorialBySlug(slug ?? "");

  if (error && !loading) {
    return <Navigate to="/" replace />;
  }

  const formattedDate = tutorial
    ? new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(tutorial.publishedAt))
    : "";

  return (
    <>
      {tutorial && (
        <Helmet>
          <title>{tutorial.title} — DevTips</title>
          <meta name="description" content={tutorial.description} />
          <meta name="keywords" content={tutorial.tags.join(", ")} />
          <meta property="og:title" content={`${tutorial.title} — DevTips`} />
          <meta property="og:description" content={tutorial.description} />
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={tutorial.publishedAt} />
          <meta property="article:tag" content={tutorial.tags.join(", ")} />
        </Helmet>
      )}

      <div className="min-h-screen bg-zinc-950 text-white">
        <Header />

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          {/* Back link */}
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para tutoriais
          </Link>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {loading ? (
                <TutorialSkeleton />
              ) : tutorial ? (
                <>
                  {/* Article Header */}
                  <header className="mb-8">
                    <div className="mb-4">
                      <Badge language={tutorial.language} size="md" />
                    </div>

                    <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                      {tutorial.title}
                    </h1>

                    <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                      {tutorial.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        {tutorial.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {tutorial.readingTimeMinutes} min de leitura
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tutorial.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-500"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </header>

                  {/* Markdown Content */}
                  <article aria-label={tutorial.title}>
                    <MarkdownRenderer content={tutorial.content} />
                  </article>

                  {/* AdBanner — Final do artigo */}
                  <div className="mt-12 flex justify-center border-t border-white/5 pt-10">
                    <AdBanner slot="1122334455" size="horizontal" />
                  </div>
                </>
              ) : null}
            </main>

            {/* Sidebar */}
            <aside className="w-full lg:w-[180px] lg:shrink-0" aria-label="Anúncios e sugestões">
              <div className="sticky top-24">
                <AdBanner slot="5544332211" size="vertical" />
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
