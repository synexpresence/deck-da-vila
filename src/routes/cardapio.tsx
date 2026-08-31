import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { menu } from "@/data/menu";
import { IFOOD_URL, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio Completo — Deck da Vila | Espetaria em Vila Ré, SP" },
      {
        name: "description",
        content:
          "Cardápio digital do Deck da Vila: espetos na brasa, hambúrgueres artesanais, lanches, petiscos, torresmo de rolo e bebidas, com fotos e preços.",
      },
      { property: "og:title", content: "Cardápio Completo — Deck da Vila" },
      {
        property: "og:description",
        content: "Espetos, hambúrgueres artesanais, petiscos e bebidas do Deck da Vila, em Vila Ré.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cardapio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cardapio" }],
  }),
  component: CardapioPage,
});

function CardapioPage() {
  const [busca, setBusca] = useState("");
  const termo = busca.trim().toLowerCase();

  const categorias = useMemo(() => {
    if (!termo) return menu;
    return menu
      .map((c) => ({
        ...c,
        itens: c.itens.filter(
          (i) =>
            i.nome.toLowerCase().includes(termo) || i.descricao.toLowerCase().includes(termo),
        ),
      }))
      .filter((c) => c.itens.length > 0);
  }, [termo]);

  const total = categorias.reduce((n, c) => n + c.itens.length, 0);

  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-8 lg:px-8">
          <p className="eyebrow">Cardápio digital</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-6xl">
            Tudo que sai da <span className="text-ember">brasa</span>
          </h1>
          <p className="mt-4 max-w-xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
            {`Espetos, hambúrgueres, lanches, petiscos, torresmo de rolo e bebidas: tudo reunido em um cardápio completo e fácil de consultar.





Preços, itens e informações podem sofrer alterações sem aviso prévio.`}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <label className="sr-only" htmlFor="busca">
              Buscar item no cardápio
            </label>
            <input
              id="busca"
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por item — ex.: kafta, coalho, burger"
              className="w-full border border-input bg-secondary px-4 py-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-ember"
            />
            <nav aria-label="Categorias do cardápio" className="-mx-5 overflow-x-auto px-5 lg:mx-0 lg:px-0">
              <ul className="flex w-max gap-2 lg:w-auto lg:flex-wrap">
                {menu.map((c) => (
                  <li key={c.slug}>
                    <a
                      href={`#${c.slug}`}
                      className="block whitespace-nowrap border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:border-ember hover:text-ember"
                    >
                      {c.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {termo && (
          <p className="mx-auto max-w-6xl px-5 pb-4 text-sm text-muted-foreground lg:px-8" role="status">
            {total} {total === 1 ? "item encontrado" : "itens encontrados"} para “{busca}”.
          </p>
        )}

        {categorias.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
            <div className="rule-top flex items-baseline justify-between gap-4 pt-6">
              <h2 className="font-display text-2xl sm:text-3xl">{cat.nome}</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {cat.itens.length} itens
              </span>
            </div>

            <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {cat.itens.map((item) => (
                <li key={item.nome} className="flex gap-4 border-b border-border/60 pb-6">
                  {item.foto && (
                    <img
                      src={item.foto}
                      alt={item.nome}
                      loading="lazy"
                      decoding="async"
                      width={96}
                      height={96}
                      className="h-24 w-24 shrink-0 object-cover"
                    />
                  )}
                  <div className="min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg leading-snug">{item.nome}</h3>
                      <span className="shrink-0 text-sm font-semibold text-ember">{item.preco}</span>
                    </div>
                    {cat.slug !== "bebidas" && item.descricao && (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.descricao}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <div className="rule-top flex flex-col gap-4 pt-10 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-ember px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar mesa
            </a>
            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-border px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-ember hover:text-ember"
            >
              Pedir pelo iFood
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
