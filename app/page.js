const PHONE = "5524992068061";
const WA_MESSAGE = "Olá, Dr. Natan! Encontrei seu cartão digital e gostaria de falar sobre um caso.";
const WA_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

const AREAS = [
  {
    label: "Direito do\nTrabalho",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    label: "Direito\nPrevidenciário",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 21v-6M10 21v-6M14 21v-6M18 21v-6" />
      </svg>
    ),
  },
  {
    label: "Direito do\nConsumidor",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    label: "Direito de\nFamília",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Direito\nCriminal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v20M4 6h16M4 6L2 11h5L4 6zm16 0l-2 5h5l-3-5zM2 11c0 2.5 2.2 4 3.5 4S9 13.5 9 11M15 11c0 2.5 2.2 4 3.5 4s3.5-1.5 3.5-4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="card">
      <svg className="watermark" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 10V190M40 40H160M40 40L20 90H60L40 40ZM160 40L140 90H180L160 40ZM20 90C20 105 35 112 40 112C45 112 60 105 60 90M140 90C140 105 155 112 160 112C165 112 180 105 180 90M70 190H130"
          stroke="#c9a24b"
          strokeWidth="3"
        />
      </svg>

      <div className="heroBanner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/statue.png" alt="Estátua da Justiça" />
      </div>

      <header>
        <div className="monogram">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-nt.png" alt="NT — Natan Tobias" />
        </div>
        <h1 className="name">Natan Tobias</h1>
        <div className="subtitle">Advocacia e Consultoria</div>

        <div className="divider">
          <div className="rule" />
          <svg viewBox="0 0 24 24" fill="none" stroke="#c9a24b" strokeWidth="1.4">
            <path d="M12 2v20M4 6h16M4 6L2 11h5L4 6zm16 0l-2 5h5l-3-5zM2 11c0 2.5 2.2 4 3.5 4S9 13.5 9 11M15 11c0 2.5 2.2 4 3.5 4s3.5-1.5 3.5-4" />
          </svg>
          <div className="rule" />
        </div>

        <div className="badge">
          <b>ADVOGADO</b>
          OAB/RJ 260.246
        </div>
      </header>

      <div className="ctaWrap">
        <a className="cta" href={WA_LINK} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 32 32" fill="currentColor">
            <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.35.68 4.55 1.87 6.4L4 29l7.8-1.83A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.62 28 15S22.63 3 16.02 3Zm0 21.8c-2 0-3.87-.55-5.47-1.5l-.39-.23-4.63 1.09 1.13-4.5-.25-.4A9.77 9.77 0 0 1 6.2 15c0-5.42 4.4-9.8 9.82-9.8 5.4 0 9.8 4.38 9.8 9.8 0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.34c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.68.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35Z" />
          </svg>
          Falar no WhatsApp
        </a>
        <div className="ctaNote">Resposta rápida · Atendimento em Três Rios/RJ</div>
      </div>

      <div className="sectionTitle">Contato</div>
      <div className="contacts">
        <a className="contactRow" href={WA_LINK} target="_blank" rel="noopener noreferrer">
          <div className="iconCircle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="contactText">
            <div className="label">WhatsApp</div>
            <div className="value">(24) 99206-8061</div>
          </div>
        </a>

        <a className="contactRow" href="mailto:natantobias00@gmail.com">
          <div className="iconCircle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M22 6 12 13 2 6M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
            </svg>
          </div>
          <div className="contactText">
            <div className="label">E-mail</div>
            <div className="value">natantobias00@gmail.com</div>
          </div>
        </a>

        <a
          className="contactRow"
          href="https://maps.google.com/?q=Travessa+Augusto+de+Almeida,+44+Sala+118+Galeria+Central+Centro+Tr%C3%AAs+Rios+RJ+25804-130"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="iconCircle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="contactText">
            <div className="label">Endereço</div>
            <div className="value">
              Travessa Augusto de Almeida, 44 — Sala 118, Galeria Central
              <br />
              Centro, Três Rios/RJ · CEP 25804-130
            </div>
          </div>
        </a>

        <a className="contactRow" href="https://instagram.com/natantobias.adv" target="_blank" rel="noopener noreferrer">
          <div className="iconCircle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="contactText">
            <div className="label">Instagram</div>
            <div className="value">@natantobias.adv</div>
          </div>
        </a>
      </div>

      <div className="sectionTitle">Áreas de Atuação</div>
      <div className="areas">
        {AREAS.map((area) => (
          <div className="area" key={area.label}>
            <div className="iconCircle">{area.icon}</div>
            <span>
              {area.label.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <footer>
        <div className="tagline">Compromisso · Ética · Resultados</div>
        <div className="sub">Defendendo seus direitos, buscando justiça</div>
      </footer>
    </div>
  );
}
