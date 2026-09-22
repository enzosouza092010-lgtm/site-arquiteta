# Ateliê Forma — Next.js

Site institucional em Next.js, React e TypeScript. O layout e as animações foram convertidos da versão publicada no ChatGPT Sites.

## Rodar no computador

1. Instale o Node.js 20.9 ou superior.
2. Abra esta pasta no VS Code e execute `npm install`.
3. Execute `npm run dev` e abra http://localhost:3000.
4. Para testar a versão de produção, execute `npm run build` e `npm start`.

## Publicar no Vercel

Importe o repositório GitHub como novo projeto. O Vercel detecta Next.js automaticamente; mantenha os comandos padrão. Cada push na branch `main` cria uma nova publicação.

As imagens são carregadas do Unsplash e as fontes do Google Fonts, portanto precisam de internet. O endereço `contato@exemplo.com` é provisório: substitua-o em `app/page.tsx` pelo e-mail real antes de usar o formulário de contato.
