import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brasilholic — moda feminina Brasil',
  description: 'Peças femininas inspiradas no verde-amarelo. Estilo, atitude e brasilidade. Compre direto pelo WhatsApp.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="paper-grain">{children}</body>
    </html>
  )
}
