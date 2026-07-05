interface AdBannerProps {
  /** AdSense slot ID — substitua pelo seu slot real */
  slot?: string;
  /** Tamanho visual do espaço de anúncio */
  size: "horizontal" | "square" | "vertical";
  className?: string;
}

const sizeConfig = {
  horizontal: { label: "728×90 — Leaderboard", classes: "h-[90px] w-full max-w-[728px]" },
  square: { label: "300×250 — Medium Rectangle", classes: "h-[250px] w-[300px]" },
  vertical: { label: "160×600 — Wide Skyscraper", classes: "h-[600px] w-[160px]" },
};

/**
 * Espaço reservado para anúncios do Google AdSense.
 *
 * Para ativar o AdSense:
 * 1. Adicione o script do AdSense no index.html
 * 2. Substitua o conteúdo deste componente pelo <ins> tag do AdSense
 * 3. Defina o `data-ad-slot` com o ID do seu slot
 *
 * Exemplo de integração real:
 * <ins
 *   className="adsbygoogle"
 *   style={{ display: "block" }}
 *   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *   data-ad-slot={slot}
 *   data-ad-format="auto"
 *   data-full-width-responsive="true"
 * />
 */
export function AdBanner({ slot, size, className = "" }: AdBannerProps) {
  const config = sizeConfig[size];

  return (
    <div
      className={`flex items-center justify-center mx-auto ${config.classes} ${className}`}
      aria-label="Espaço para anúncio"
      role="complementary"
    >
      {/* Placeholder visual — remover quando integrar AdSense real */}
      <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02]">
        <div className="text-center">
          <p className="text-xs font-medium text-zinc-600">Anúncio</p>
          <p className="mt-0.5 text-[10px] text-zinc-700">{config.label}</p>
          {slot && <p className="mt-0.5 text-[10px] text-zinc-800">slot: {slot}</p>}
        </div>
      </div>
    </div>
  );
}
