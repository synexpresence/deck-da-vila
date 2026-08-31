import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { menu } from "@/data/menu";
import {
  ADDRESS_LINES,
  IFOOD_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_TEL,
  WHATSAPP_URL,
} from "@/lib/site";
import fachadaNoite from "@/assets/image.png.asset.json";
import salaoInterno from "@/assets/image-2.png.asset.json";
import salaoMezanino from "@/assets/image-3.png.asset.json";
import mezanino2 from "@/assets/image-4.png.asset.json";
import fachadaRua from "@/assets/image-5.png.asset.json";

const DESTAQUES = [
  "Medalhão Cupim com Queijo",
  "Kafta com Queijo",
  "Medalhão Queijo Coalho",
  "Cordeiro",
  "Cheese Bacon",
  "Torresmo de rolo",
];

const destaques = DESTAQUES.map((nome) =>
  menu.flatMap((c) => c.itens.map((i) => ({ ...i, categoria: c.nome }))).find((i) => i.nome === nome),
).filter(Boolean) as Array<{
  nome: string;
  descricao: string;
  preco: string;
  foto: string;
  categoria: string;
}>;

const totalItens = menu.reduce((n, c) => n + c.itens.length, 0);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deck da Vila | Espetaria e Restaurante em Vila Ré, São Paulo" },
      {
        name: "description",
        content:
          "Espetinhos de verdade na brasa, hambúrgueres artesanais e petiscos em Vila Ré, São Paulo. Reserve pelo WhatsApp, peça pelo iFood ou veja o cardápio completo.",
      },
      { property: "og:title", content: "Deck da Vila | Espetaria e Restaurante" },
      {
        property: "og:description",
        content: "Fogo, sabor e ambiente que acolhe. Espetaria em Vila Ré, São Paulo.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Deck da Vila | Espetaria e Restaurante",
          servesCuisine: "Espetinhos, hambúrguer artesanal, petiscos",
          telephone: "+5511978763997",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Itinguçu, 1190",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "03658-000",
            addressCountry: "BR",
          },
          hasMenu: "/cardapio",
          sameAs: [INSTAGRAM_URL, IFOOD_URL],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO */}
        <section id="inicio" className="relative min-h-[92vh] w-full overflow-hidden">
          <img
            src={fachadaNoite.url}
            alt="Fachada iluminada do Deck da Vila à noite, com o deck externo e mesas de madeira"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[3px]"
          />
          <div className="absolute inset-0 bg-charcoal/78" />
          <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
            <p className="eyebrow">Vila Ré · São Paulo</p>
            <h1 className="mt-5 max-w-4xl font-display text-[3.2rem] leading-[0.92] sm:text-8xl">
              Deck da Vila
            </h1>
            <p className="mt-6 max-w-lg font-display text-2xl leading-snug text-ember sm:text-3xl">
              Espetinhos de verdade.
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/80">
              Fogo, sabor e ambiente que acolhe.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/cardapio"
                className="bg-ember px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver cardápio
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cream/40 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-ember hover:text-ember"
              >
                Reservar mesa
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-4 text-center text-sm underline decoration-ember underline-offset-8 transition-colors hover:text-ember"
              >
                Como chegar
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">A experiência</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Brasa acesa, mesa cheia,
                <br />
                <span className="text-ember">conversa longa.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                O Deck da Vila é uma espetaria de bairro em Vila Ré: salão amplo, madeira por todo
                lado, mezanino com vista para o movimento e o cheiro de espeto na grelha. Um lugar
                para chegar sem cerimônia e ficar mais do que o previsto.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                No cardápio, {totalItens} itens: espetos na brasa, hambúrgueres artesanais, lanches,
                petiscos, torresmo de rolo e bebidas geladas.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                <div>
                  <dt className="eyebrow">{"\n"}</dt>
                  <dd className="mt-2 font-display text-3xl">{"\n"}</dd>
                </div>
              </dl>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="sm:col-span-2">
                <img
                  src={salaoInterno.url}
                  alt="Salão interno do Deck da Vila com mesas e cadeiras de madeira e parede verde"
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover sm:h-64"
                />
              </Reveal>
              <Reveal delay={80}>
                <img
                  src={salaoMezanino.url}
                  alt="Área interna do restaurante com mesas de madeira e detalhes em verde"
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover"
                />
              </Reveal>
              <Reveal delay={160}>
                <img
                  src={mezanino2.url}
                  alt="Vista do mezanino do Deck da Vila sobre o salão principal"
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* DESTAQUES */}
        <section className="bg-secondary/40 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Da grelha</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                  Destaques do cardápio
                </h2>
              </div>
              <Link
                to="/cardapio"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-ember underline-offset-8 hover:underline"
              >
                Ver cardápio completo
              </Link>
            </Reveal>

            <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {destaques.map((item, i) => (
                <Reveal as="li" key={item.nome} delay={(i % 3) * 90}>
                  <figure className="group">
                    <div className="overflow-hidden">
                      <img
                        src={item.foto}
                        alt={item.nome}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <figcaption className="mt-5">
                      <p className="eyebrow">{item.categoria}</p>
                      <div className="mt-2 flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-xl">{item.nome}</h3>
                        <span className="shrink-0 text-sm font-semibold text-ember">
                          {item.preco}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.descricao}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CARDÁPIO DIGITAL */}
        <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal className="rule-top grid gap-10 pt-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Cardápio digital</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                {totalItens} itens, para todos os gostos
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Cardápio completo pensado para o celular: navegação por categoria, busca por item,
                fotos e preços. Pronto para ser acessado por QR Code ou NFC na mesa.
              </p>
              <Link
                to="/cardapio"
                className="mt-8 inline-block bg-ember px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Abrir cardápio
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-border">
              {menu.map((c) => (
                <li key={c.slug} className="bg-background p-6">
                  <p className="font-display text-lg">{c.nome}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.itens.length} itens
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* GALERIA */}
        <section className="py-6">
          <Reveal className="mx-auto max-w-6xl px-5 lg:px-8">
            <p className="eyebrow">Ambiente</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              O Deck por dentro
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: fachadaRua.url, alt: "Fachada do Deck da Vila vista da rua ao entardecer" },
              { src: salaoInterno.url, alt: "Mesas de madeira no salão principal do restaurante" },
              { src: salaoMezanino.url, alt: "Corredor de mesas com parede de folhagem verde" },
              { src: mezanino2.url, alt: "Mezanino do Deck da Vila com vista para o salão" },
            ].map((img, i) => (
              <Reveal as="figure" key={img.alt} delay={i * 70} className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-6xl px-5 lg:px-8">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-ember underline-offset-8 hover:underline"
            >
              Ver no Instagram
            </a>
          </Reveal>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow">Avaliações</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              Avaliações reais de quem já passou pelo Deck
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Uma experiência que vai além do prato. Boa comida, ambiente agradável e momentos que ficam na memória. A melhor forma de conhecer o Deck da Vila é ouvir quem já esteve aqui. Confira as experiências compartilhadas por nossos clientes.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="bg-background p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Avaliação {i + 1}
                </p>
                <p className="mt-4 font-display text-lg leading-snug text-foreground/45">
                  {[
                    "MELHOR RESTAURANTE DE SÃO PAULO, comida top, ambiente agradável, comida sensacional, amei demais a recepção deles, Com toda certeza voltarei mais vezes 🥰🤩😍😍",
                    "Gostaria de elogiar o Deck da Vila pelo excelente atendimento e pela ótima estrutura. O ambiente é agradável, organizado e muito confortável, e a equipe sempre atende com simpatia e atenção. Parabéns a todos pelo excelente trabalho!",
                    "O ambiente do Deck da vila é super agradável, acolhedor e muito limpo. A comida estava absolutamente deliciosa, bem temperada e com uma apresentação impecável. O atendimento também foi um grande diferencial, com funcionários muito atenciosos. Com certeza voltarei mais vezes e recomendo a todos!",
                    "Lugar simplesmente incrível, de um ambiente maravilhoso e aconchegante para a família, sem contar que a comida é extremamente saborosa… Voltarei mais vezes…",
                    "Experiência agradável!\nÓtimo lugar para estar com a família, amigos, e comemorar aniversário também!\n\nIndico o deck para todo mundo\nAtendimento maravilhoso e comida impecável",
                    "Melhor restaurante da região!\nAmbiente familiar, música agradável e a comida simplesmente MARAVILHOSA.\nSugestão: experimentem o CHURROS rs..\nSistema muito prático e rápido, cada um com a sua comanda PERFEITO!\nDeck, obrigada pela experiência encantadora.",
                  ][i]}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {["BÁRBARA PIMENTA · GOOGLE", "CLAYTON RODRIGUES · GOOGLE", "CAIO FANTASTIC · GOOGLE", "MARCOS VINICIUS · GOOGLE", "LAURA COMOTI · GOOGLE", "ELIÉRGINA SOUSA · GOOGLE"][i]}
                </p>
              </li>
            ))}
          </ul>

          <Reveal className="mt-12">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-ember hover:text-ember"
            >
              Avalie o Deck da Vila no Google
            </a>
          </Reveal>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="relative">
          <img
            src={fachadaRua.url}
            alt="Esquina do Deck da Vila com fachada iluminada na Rua Itinguçu"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[3px]"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
            <Reveal className="max-w-lg">
              <p className="eyebrow">Localização</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Rua Itinguçu, 1190
              </h2>
              <address className="mt-6 not-italic text-base leading-relaxed text-foreground/80">
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="mt-4 whitespace-pre-line text-sm text-muted-foreground">
                {`Horário de funcionamento:\u00a0
segunda-feira\t17:00–00:00
terça-feira\t17:00–00:00
quarta-feira\t17:00–00:00
quinta-feira\t17:00–00:00
sexta-feira\t17:00–00:00
sábado\t12:00–00:00
domingo\t12:00–21:00`}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ember px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Como chegar
                </a>
                <a
                  href={IFOOD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cream/40 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-ember hover:text-ember"
                >
                  Pedir pelo iFood
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RESERVAS / CTA FINAL */}
        <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal className="rule-top pt-14 text-center">
            <p className="eyebrow">Reservas</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] sm:text-6xl">
              Mesa reservada, brasa acesa.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Reservas e contato pelo WhatsApp {WHATSAPP_TEL}.
            </p>
            <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-ember px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Reservar mesa
              </a>
              <Link
                to="/cardapio"
                className="flex-1 border border-border px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-ember hover:text-ember"
              >
                Ver cardápio
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
