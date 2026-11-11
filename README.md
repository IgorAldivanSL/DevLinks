# DevLinks

Aplicação agregadora de links desenvolvida em **React** e **TypeScript** com **Vite**, reproduzindo fielmente o design do Figma e as especificações do **AGENTS.md**.

## 🚀 Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Phosphor Icons](https://phosphoricons.com/) (controle de tema)
- [Ionicons](https://ionic.io/ionicons) (ícones sociais)
- CSS nativo com Design Tokens oficiais

## 🎨 Design System e Tokens

- **Tipografia:** Inter (`font-family: 'Inter', Arial, sans-serif`)
- **Dark Mode & Light Mode:**
  - Tokens semânticos: `--text-color`, `--stroke-color`, `--surface-color`, `--surface-color-hover`, `--highlight-color`
  - Backgrounds responsivos oficiais para desktop e mobile (`bg-desktop.jpg`, `bg-desktop-light.jpg`, `bg-mobile.jpg`, `bg-mobile-light.jpg`)
  - Alternância de avatar dinâmico: modo escuro (com óculos) e modo claro (sem óculos)
  - Persistência de tema com `localStorage` sob a chave `@devlinks:theme`

## 📁 Estrutura de Pastas

```text
src/
├── assets/                  # Imagens, avatares, backgrounds e ícones oficiais
├── components/
│   ├── features/            # Profile, LinkButton, SocialLinks
│   └── ui/                  # ThemeToggle
├── data/                    # Dados estáticos e tipagens (profileData, linkItems, socialLinks)
├── hooks/                   # Custom hook useTheme com persistência
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## 🛠️ Como Executar

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Executar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Gerar a build de produção:
   ```bash
   npm run build
   ```
