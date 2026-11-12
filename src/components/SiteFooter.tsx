import { Link } from "@tanstack/react-router";
import logo from "@/assets/image-6.png.asset.json";
import {
  ADDRESS_LINES,
  IFOOD_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_TEL,
  WHATSAPP_URL,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logo.url}
            alt="Logotipo Deck da Vila"
            width={72}
            height={72}
            loading="lazy"
            className="h-18 w-18 object-contain"
          />
          <p className="mt-5 font-display text-2xl">Deck da Vila</p>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Espetaria e Restaurante
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/cardapio" className="transition-colors hover:text-ember">
                Cardápio digital
              </Link>
            </li>
            <li>
              <a href="/#experiencia" className="transition-colors hover:text-ember">
                Experiência
              </a>
            </li>
            <li>
              <a href="/#avaliacoes" className="transition-colors hover:text-ember">
                Avaliações
              </a>
            </li>
            <li>
              <a href="/#localizacao" className="transition-colors hover:text-ember">
                Localização
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Contato e pedidos</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                Reservas por WhatsApp · {WHATSAPP_TEL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                Instagram @espetariadeckdavila
              </a>
            </li>
            <li>
              <a
                href={IFOOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                Pedir pelo iFood
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-top">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © 2026 Deck da Vila - Todos os direitos reservados. Preços, itens e informações podem sofrer alterações sem aviso prévio.
        </p>
      </div>
    </footer>
  );
}
