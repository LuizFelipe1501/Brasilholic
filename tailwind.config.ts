import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE',          // fundo off-white quente
        'cream-deep': '#F2EBD9',   // creme mais escuro pra contraste
        verde: '#1B5E2C',          // verde garrafa sofisticado
        'verde-soft': '#2E7D3F',   // verde médio
        gold: '#D4A017',           // dourado/amarelo suave
        'gold-light': '#E8C158',   // dourado claro
        azul: '#3A4F8C',           // azul vintage empoeirado
        terracotta: '#C97B5B',     // detalhe quente
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
        script: ['var(--font-script)', 'cursive'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
