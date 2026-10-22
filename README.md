# LigFood

Site institucional do LigFood (delivery e cardápio digital no WhatsApp), migrado do Lovable para a Vercel com a nova identidade visual.

- Produção: https://ligfood.vercel.app
- Stack: Vite + React + TypeScript + Tailwind CSS + Supabase (formulário de leads)

## Identidade visual

| Cor | Hex | Uso |
| --- | --- | --- |
| Laranja principal | `#FF6A00` | Destaques, botões e chamadas |
| Preto | `#1A1A1A` | Fundos, textos e ícones |
| Branco | `#FFFFFF` | Textos sobre fundo escuro/laranja |

Logos em `public/`:
- `logo-ligfood.png` — para fundo claro (Lig laranja, Food preto)
- `logo-ligfood-dark.png` — para fundo escuro (Lig branco, Food laranja)
- `logo-ligfood-on-orange.png` — para fundo laranja (Lig branco, Food preto)

## Rodar localmente

```bash
cp .env.example .env.local   # preencha VITE_SUPABASE_PUBLISHABLE_KEY
npm install
npm run dev
```

## Deploy

Cada push na branch `main` gera deploy automático na Vercel. Não é preciso configurar variáveis: o projeto já usa a chave pública do Supabase por padrão (pode ser sobrescrita com `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`).
