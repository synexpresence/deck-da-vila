import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/image-6.png.asset.json";
import { WHATSAPP_URL } from "@/lib/site";

const nav = [
  { label: "Início", href: "/#inicio" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Localização", href: "/#localizacao" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Deck da Vila — início">
          <img
            src={logo.url}
            alt="Logotipo Deck da Vila Espetaria e Restaurante"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base tracking-tight">Deck da Vila</span>
            <span className="block truncate text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
              Espetaria e Restaurante
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/80 transition-colors hover:text-ember"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn border border-ember px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-primary-foreground"
          >
            Reservar mesa
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-5 pb-8 pt-4 lg:hidden" aria-label="Navegação mobile">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-display text-2xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn mt-6 block bg-ember px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground"
          >
            Reservar mesa
          </a>
        </nav>
      )}
    </header>
  );
}
