import "./globals.css";

// Domínio público do site. Se você configurar um domínio próprio na Vercel,
// troque o valor da env var NEXT_PUBLIC_SITE_URL nas configurações do projeto
// (Settings → Environment Variables) — não precisa editar código nem lembrar
// de trocar isso manualmente de novo.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ntcard.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Natan Tobias | Advocacia e Consultoria — OAB/RJ 260.246",
  description:
    "Advogado em Três Rios/RJ. Direito do Trabalho, Previdenciário, Consumidor, Família e Criminal. Fale agora pelo WhatsApp.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Natan Tobias — Advocacia e Consultoria",
    description: "Advogado OAB/RJ 260.246 · Três Rios/RJ. Toque para falar agora no WhatsApp.",
    images: [
      {
        url: "/card-preview.jpg",
        alt: "Cartão de visita — Natan Tobias Advocacia",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natan Tobias — Advocacia e Consultoria",
    description: "Advogado OAB/RJ 260.246 · Três Rios/RJ. Toque para falar agora no WhatsApp.",
    images: ["/card-preview.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1526",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Marcellus&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
