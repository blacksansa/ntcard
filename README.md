# Cartão de Visita — Natan Tobias (Next.js)

App Next.js 14 (App Router) com o cartão de visita digital completo:
nome, OAB/RJ 260.246, contatos, áreas de atuação, botão de WhatsApp e
preview configurado para abrir bonito quando o link for compartilhado
no WhatsApp.

## Por que Next.js em vez do HTML puro de antes

A vantagem principal: a URL da imagem de preview (`og:image`) agora é
calculada **automaticamente** a partir do domínio real do site
(`metadataBase` em `app/layout.js`). Não é mais preciso editar
manualmente nenhum "SEU-DOMINIO.vercel.app" depois do deploy — foi
isso que causou o problema anterior.

Se um dia você configurar um domínio próprio na Vercel, basta ir em
**Project Settings → Environment Variables** e criar:

```
NEXT_PUBLIC_SITE_URL=https://seu-dominio-novo.com.br
```

e fazer um redeploy. Nenhuma edição de código necessária.

## Estrutura

```
nt-nextjs/
├── app/
│   ├── layout.js      → metadata, SEO e Open Graph (preview do WhatsApp)
│   ├── page.js         → o cartão em si (JSX)
│   └── globals.css     → todo o visual (cores, tipografia, layout)
├── public/
│   ├── logo-nt.png      → logo NT recortada da arte original
│   ├── statue.png        → estátua da Justiça recortada da arte original
│   └── card-preview.jpg  → imagem usada no preview do WhatsApp
├── next.config.mjs
└── package.json
```

## Deploy na Vercel

### Opção recomendada: GitHub (mais fácil de manter)

1. Crie um repositório novo no GitHub e suba esta pasta inteira
   (`git init`, `git add .`, `git commit -m "cartão natan tobias"`,
   `git push`).
2. Em vercel.com → **Add New → Project** → importe o repositório.
3. A Vercel detecta que é Next.js automaticamente (não precisa mexer
   em Build Command nem Output Directory).
4. Deploy. Pronto — toda vez que você der `git push`, o site atualiza
   sozinho.

### Opção alternativa: Vercel CLI (sem precisar de GitHub)

```bash
npm i -g vercel
cd nt-nextjs
npm install
vercel --prod
```

Na primeira vez ele pergunta o nome do projeto — se quiser manter a
mesma URL de antes (`readme-five-tau.vercel.app`), digite o nome do
projeto existente (`readme`) quando perguntado, ou vincule ao projeto
existente com `vercel link` antes de rodar `vercel --prod`.

> Diferente do HTML estático, **não dá pra simplesmente arrastar a
> pasta pelo navegador** — Next.js precisa rodar `npm install` e
> `next build`, e isso só acontece via GitHub ou CLI.

## Testar localmente antes de subir (opcional)

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Editar conteúdo

- **Telefone / mensagem do WhatsApp**: topo de `app/page.js`, constantes
  `PHONE` e `WA_MESSAGE`.
- **Textos, endereço, áreas de atuação**: dentro de `app/page.js`.
- **Cores e tipografia**: `app/globals.css`, variáveis no topo (`:root`).
- **Título, descrição, imagem de preview**: `app/layout.js`.
