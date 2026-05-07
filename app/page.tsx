import { produtos, getWhatsappLink } from '@/data/produtos'
import Image from 'next/image'

function WhatsappIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

// Coraçãozinho com bandeira pra reforçar a identidade
function HeartFlag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 21s-7.5-4.5-9.5-9.5C1 7.5 3.5 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6 3.5 4.5 7.5C19.5 16.5 12 21 12 21z"
        fill="#1B5E2C"
      />
      <ellipse cx="12" cy="11" rx="3" ry="2" fill="#D4A017" />
      <circle cx="12" cy="11" r="0.7" fill="#3A4F8C" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="bg-cream text-verde min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-verde/10">
        <div className="px-6 md:px-10 py-4 flex justify-between items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Brasilholic"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Links */}
          <div className="hidden md:flex gap-10 text-[11px] tracking-[0.25em] uppercase text-verde/70 font-medium">
            <a href="#colecao" className="hover:text-verde transition">Coleção</a>
            <a href="#sobre" className="hover:text-verde transition">Sobre</a>
            <a href="#contato" className="hover:text-verde transition">Contato</a>
          </div>

          {/* CTA */}
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide"
          >
            <WhatsappIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Comprar</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6 fade-up">
              <div className="w-1.5 h-1.5 bg-gold rounded-full pulse-dot" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-verde/60 font-medium">
                Coleção 2026 · Disponível
              </p>
            </div>

            <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[7.5vw] xl:text-[7rem] leading-[0.95] text-verde">
              <span className="block">
                <span className="font-display-italic text-gold">Brasil</span>
                <span className="sparkle ml-2">✦</span>
              </span>
              <span className="font-script text-gold text-[55%] block mt-2">
                mas make it cool.
              </span>
            </h1>

            <p className="mt-8 lg:mt-10 text-base md:text-lg text-verde/75 max-w-md leading-relaxed">
              <span className="font-display-italic text-gold">Copa Core</span> by Brasilholic:
              para garotas que vivem a brasilidade com orgulho! 💚💛
            </p>

            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#colecao"
                className="group flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase font-medium border border-verde text-verde px-7 py-3.5 hover:bg-verde hover:text-cream transition rounded-full"
              >
                Ver Coleção
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-medium rounded-full"
              >
                <WhatsappIcon className="w-4 h-4" />
                Comprar agora
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Corações flutuantes decorativos */}
              <div className="absolute -top-4 -left-4 z-10 float-heart">
                <HeartFlag className="w-10 h-10" />
              </div>
              <div className="absolute -bottom-3 -right-3 z-10 float-heart" style={{ animationDelay: '1s' }}>
                <span className="font-script text-3xl text-gold">brasilholic</span>
              </div>
              {/* Sparkles */}
              <div className="absolute top-8 -right-2 text-gold text-2xl float-heart" style={{ animationDelay: '0.5s' }}>✦</div>

              {/* Frame ornamental */}
              <div className="absolute inset-0 border border-gold/40 rounded-sm translate-x-3 translate-y-3" />

              {/* Imagem */}
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-cream-deep">
                <Image
                  src="/modelo/cropped-amarela.jpeg"
                  alt="Modelo Brasilholic"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-7 border-y border-verde/15 overflow-hidden bg-cream-deep">
        <div className="marquee flex whitespace-nowrap items-center">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-6 shrink-0">
              {[
                { text: 'Brasilholic', script: true },
                { text: '✦', sparkle: true },
                { text: 'Verde Amarela', script: false },
                { text: '✦', sparkle: true },
                { text: 'Copa Core energy', script: true },
                { text: '✦', sparkle: true },
                { text: 'Made with love', script: false },
                { text: '✦', sparkle: true },
                { text: 'Pinterest girl', script: true },
                { text: '✦', sparkle: true },
              ].map((item, j) => (
                <span
                  key={j}
                  className={
                    item.sparkle
                      ? 'text-gold text-3xl md:text-4xl'
                      : item.script
                      ? 'font-script text-3xl md:text-5xl text-verde'
                      : 'font-display-italic text-2xl md:text-4xl text-verde/70 tracking-wide'
                  }
                >
                  {item.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* COLEÇÃO */}
      <section id="colecao" className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-[1500px] mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold mb-5 font-medium">
              ✦ a coleção ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-verde leading-[1.05]">
              Pra você que
              <br />
              <span className="font-script text-gold text-[1.3em] inline-block mt-2">
                ama o Brasil
              </span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-verde/70 max-w-md mx-auto">
              {produtos.length} peças disponíveis · clique e leve a sua
            </p>
          </div>

          {/* Grid asymmetric editorial */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7">
            {produtos.map((produto, i) => {
              // Layout asymmetric — replica a lógica do projeto anterior
              const layouts = [
                'md:col-span-7 md:row-span-2',
                'md:col-span-5',
                'md:col-span-5',
                'md:col-span-7',
              ]
              const span = layouts[i % layouts.length]
              const aspectClass = i === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'

              return (
                <article
                  key={produto.id}
                  className={`shirt-card relative overflow-hidden bg-cream-deep group ${span}`}
                >
                  <div className={`relative ${aspectClass} overflow-hidden`}>
                    <Image
                      src={produto.image_url}
                      alt={produto.nome}
                      fill
                      className="shirt-img object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Overlay creme suave no bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-verde/85 via-verde/20 to-transparent opacity-90" />

                    {/* Número editorial canto superior */}
                    <div className="absolute top-5 left-5 md:top-7 md:left-7">
                      <span className="font-display-italic text-cream/80 text-2xl md:text-3xl">
                        n° {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Selo brasilholic canto superior direito */}
                    <div className="absolute top-5 right-5 md:top-7 md:right-7">
                      <HeartFlag className="w-7 h-7 md:w-9 md:h-9" />
                    </div>

                    {/* Info bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 shirt-info text-cream">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-gold-light rounded-full pulse-dot" />
                        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-light font-medium">
                          Disponível
                        </p>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl leading-tight mb-1.5">
                        {produto.nome}
                      </h3>
                      <p className="font-display-italic text-sm md:text-base text-cream/85 mb-5">
                        {produto.descricao}
                      </p>

                      <a
                        href={getWhatsappLink(produto.nome)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shirt-cta btn-whatsapp inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium rounded-full"
                      >
                        <WhatsappIcon className="w-4 h-4" />
                        Quero essa
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-6 md:px-10 py-28 md:py-40 bg-cream-deep">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0">
              <div className="absolute inset-0 border border-gold/40 -translate-x-3 -translate-y-3" />
              <div className="relative w-full h-full overflow-hidden bg-cream">
                <Image
                  src="/modelo/regata-verde.jpeg"
                  alt="Brasilholic vibe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 font-script text-4xl text-gold rotate-[-8deg]">
                ♡ amor
              </div>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold mb-5 font-medium">
              ✦ a marca ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-verde leading-tight mb-8">
              Mais que peças.
              <br />
              <span className="font-script text-gold text-[1.2em]">um estilo de vida.</span>
            </h2>
            <div className="space-y-5 text-base md:text-lg text-verde/80 leading-relaxed max-w-xl">
              <p>
                A <strong className="font-display-italic font-medium text-verde">Brasilholic</strong> nasceu da
                vontade de vestir o Brasil de um jeito novo — feminino, leve, desejável.
              </p>
              <p>
                Cada peça é pensada pra quem vive com energia, ama um look bem montado e quer
                carregar a brasilidade no estilo. <em className="font-display-italic">Sporty chic</em>, moderna e cheia de atitude.
              </p>
            </div>

            {/* Pequenos pilares */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                { num: '100%', label: 'Brasileiro' },
                { num: '✦', label: 'Copa Core' },
                { num: '♡', label: 'Made with love' },
              ].map((pilar, i) => (
                <div key={i} className="text-center border-l border-gold/30 first:border-l-0 px-2">
                  <p className="font-display text-3xl md:text-4xl text-gold mb-1">{pilar.num}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-verde/60 font-medium">
                    {pilar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section id="contato" className="relative px-6 md:px-10 py-28 md:py-36 overflow-hidden text-center">
        <div className="max-w-[900px] mx-auto">
          {/* Ornamento topo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="h-px w-12 bg-gold" />
          </div>

          <p className="text-[11px] tracking-[0.4em] uppercase text-gold mb-5 font-medium">
            atendimento direto
          </p>

          <h2 className="font-display text-4xl md:text-6xl text-verde leading-tight mb-6">
            Quer garantir seu look
            <br />
            com a <span className="font-script text-gold text-[1.2em]">BrasilHolic</span>?
          </h2>

          <p className="text-base md:text-lg text-verde/75 max-w-lg mx-auto mb-10 leading-relaxed">
            Chama no WhatsApp pra ver disponibilidade, tirar dúvidas e fechar a sua peça.
            Atendimento personalizado, com carinho ♡
          </p>

          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 px-9 md:px-11 py-4 md:py-5 text-sm md:text-base font-medium tracking-[0.15em] uppercase rounded-full"
          >
            <WhatsappIcon className="w-5 h-5 md:w-6 md:h-6" />
            Chame no WhatsApp
          </a>

          <p className="font-display-italic text-base text-verde/60 mt-6">
            +55 38 9909-0477
          </p>

          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="h-px w-12 bg-gold" />
            <HeartFlag className="w-6 h-6" />
            <div className="h-px w-12 bg-gold" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-verde/15 px-6 md:px-10 py-12 bg-cream-deep">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Brasilholic"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="font-display-italic text-verde/60 text-sm">
                feito com ♡ no Brasil · {new Date().getFullYear()}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-verde/70 hover:text-verde transition"
            >
              <WhatsappIcon className="w-4 h-4" />
              +55 38 9909-0477
            </a>
            <div className="flex gap-1">
              <div className="w-12 h-1 bg-verde rounded-full" />
              <div className="w-12 h-1 bg-gold rounded-full" />
              <div className="w-12 h-1 bg-azul rounded-full" />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={getWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 btn-whatsapp w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-verde/20"
        aria-label="Falar no WhatsApp"
      >
        <WhatsappIcon className="w-7 h-7" />
      </a>
    </main>
  )
}
