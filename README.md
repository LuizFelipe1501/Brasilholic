# Brasilholic 🇧🇷✨

Site editorial feminino pra moda inspirada no Brasil. Estética it girl, Pinterest, sporty chic.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Vercel (deploy)

## Rodar local

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Adicionar uma peça nova

1. Coloca a foto em `/public/modelo/` (jpeg ou png)
2. Edita `data/produtos.ts`:

```ts
{
  id: 5,
  nome: 'Nome da Peça',
  descricao: 'Descrição curta e charmosa',
  image_url: '/modelo/nome-do-arquivo.jpeg',
}
```

A ordem na lista define a ordem no grid editorial. Os índices 0 e 3 são os slots maiores.

## Deploy

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU_USUARIO/brasilholic.git
git push -u origin main
```

Vercel → Add New → Project → importa → Deploy. Sem env vars.

## Identidade visual

- **Paleta**: verde garrafa `#1B5E2C` · dourado `#D4A017` · azul vintage `#3A4F8C` · creme `#FAF6EE`
- **Tipografia**: Playfair Display (serif elegante) + Dancing Script (cursiva) + Inter (texto)
- **Mood**: Pinterest girl, clean girl, copa do mundo charmosa, lifestyle de it girl
