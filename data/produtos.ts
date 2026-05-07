export type Produto = {
  id: number
  nome: string
  descricao: string
  image_url: string
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Regata Verde Brasil',
    descricao: 'Blusa canelada com detalhes em amarelo',
    image_url: '/modelo/regata-verde.jpeg',
  },
  {
    id: 2,
    nome: 'Cropped Amarelinha',
    descricao: 'Cropped amarelo — a clássica reinventada',
    image_url: '/modelo/cropped-amarela.jpeg',
  },
  {
    id: 3,
    nome: 'Regata Branca Vintage',
    descricao: 'Branco com detalhes verde garrafa',
    image_url: '/modelo/regata-branca.jpeg',
  },
  {
    id: 4,
    nome: 'Camiseta Azul Retrô',
    descricao: 'Inspiração anos 90, vibes Copa do Mundo',
    image_url: '/modelo/camiseta-azul.jpeg',
  },
]

// WhatsApp
export const WHATSAPP_NUMBER = '553899090477'

export function getWhatsappLink(nomeProduto?: string): string {
  const mensagem = nomeProduto
    ? `Oi! Tenho interesse na peça ${nomeProduto} ✨`
    : 'Oi! Vim do site Brasilholic, quero conhecer as peças ✨'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}
