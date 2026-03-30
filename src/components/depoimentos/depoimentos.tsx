
import Title from '../../assets/title1.png'
import Transition from '../../assets/transition2.png'
import Bg from '../../assets/depoimentos/bg.png'
import Video from '../../assets/depoimentos/video.mp4'

export function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="text-[#FF8611]"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ))}
    </div>
  )
}

const depoimentos = [
  {
    texto: 'Muito obrigada, Deus lhe abençoe sempre na sua sabedoria e humildade de pessoa humana. És um grande profissional. E seja assim sempre. Estou muito feliz em ter ido àquela aula, que me trouxe uma pessoa que soube me ajudar. Muito obrigada, Deus lhe abençoe hoje e sempre!',
    nome: 'Lúcia Martins',
    tipo: 'Aluno Insigne',
  },
  {
    texto: 'O curso superou todas as minhas expectativas. Os conteúdos são muito bem organizados e o professor explica de forma clara e objetiva. Recomendo a todos que querem avançar na carreira!',
    nome: 'Carlos Mendes',
    tipo: 'Aluno Insigne',
  },
  {
    texto: 'Aprendi mais neste curso do que em anos de tentativas sozinho. A metodologia é excelente e o suporte é incrível. Valeu cada minuto investido!',
    nome: 'Ana Paula Silva',
    tipo: 'Aluno Insigne',
  },
  {
    texto: 'Uma experiência transformadora. O professor tem um dom especial para ensinar coisas complexas de forma simples. Já indiquei para vários amigos e colegas de trabalho.',
    nome: 'Ricardo Fernandes',
    tipo: 'Aluno Insigne',
  },
  {
    texto: 'Conteúdo de altíssima qualidade! Me sinto muito mais confiante após concluir o curso. O investimento valeu muito a pena. Obrigada por toda a dedicação!',
    nome: 'Mariana Costa',
    tipo: 'Aluno Insigne',
  },
]


function Depoimentos() {
  return (
    
    <div className='relative z-10 flex flex-wrap w-full justify-center -mt-20'>
      <div className='w-full sm:max-w-[1366px]' style={{ background: 'linear-gradient(to bottom, #01011f, #02022e)' }}>
        <div className='flex flex-wrap w-full justify-center -mt-[3%]'>
          <img src={Transition} className='w-full' />
        </div>
        <div className='flex flex-wrap w-full justify-center mb-8 sm:mb-16 lg:mb-30'>
          <img src={Title} className='max-w-[90%] sm:max-w-full h-auto' />
        </div>

        {/* Video*/}
        <div className='flex w-full justify-center px-3 sm:px-6 box-border'>
          <div className='rounded-2xl p-[2px] w-auto min-w-0 max-w-250' style={{ background: 'linear-gradient(to bottom, transparent, #FF8611)' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 min-w-0'>
              <div className='bg-[#211e30] flex justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-4 pb-0 sm:p-10 min-w-0'>
                <div className='w-auto aspect-square overflow-hidden rounded-lg'>
                  <video controls style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}>
                    <source src={Video} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className='bg-[#211e30] rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none py-4 px-4 sm:py-10 sm:px-5 min-w-0'>
                <div className='border-b border-white/10 t-0 mb-4 sm:mb-8'>
                  <div className='text-2xl sm:text-3xl lg:text-5xl mb-1'>Karen</div>
                  <div className='opacity-40 text-sm'>Aluna Insigne</div>
                </div>
                <div className='text-xs sm:text-sm lg:text-base leading-relaxed'>
                  "Olá, pessoal. Eu sou a Karen, estudante de Relações Internacionais e, através desse vídeo, eu vim comentar com vocês a minha experiência com a Insígnia Académica. Eu sempre tive o sonho de escrever um artigo académico, mas não sabia por onde começar. Até que eu conheci a empresa, a plataforma Insígnia Pesquisa, e lá eu consegui tudo aquilo que eu precisava para realizar esse grande sonho. No final, deu tudo certo e, além de escrever o meu artigo, ele virou capítulo de um livro. Ah, e vale ressaltar também que eu ganhei horas complementares. Então, eu super indico a Insígnia Académica."
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carrosel contínuo */}
        <div className='flex w-full items-center relative overflow-hidden py-8 sm:py-12'>

          {/* Track animado: sem gap entre cópias para o -50% ser exato */}
          <div style={{ display: 'flex', flexShrink: 0, width: 'max-content', animation: 'carousel-scroll 100s linear infinite' }}>
            {[0, 1].map((copy) => (
              <div key={copy} style={{ display: 'flex', flexShrink: 0, gap: '16px', paddingRight: '16px' }}>
                {depoimentos.map((d, i) => (
                  <div
                    key={i}
                    className='relative flex flex-col gap-3 rounded-2xl p-4 sm:p-8 text-white overflow-hidden bg-[#01011e]'
                    style={{ width: 'min(320px, 80vw)', flexShrink: 0, minHeight: '200px', filter: 'drop-shadow(0 0 0.91px #FFFFFF96)' }}
                  >
                    <StarRating />
                    <p className='text-gray-300 text-sm leading-relaxed italic flex-1'>
                      "{d.texto}"
                    </p>
                    <div className='mt-auto'>
                      <p className='font-semibold text-white'>{d.nome}</p>
                      <p className='text-[#FF8611] text-sm'>{d.tipo}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-wrap w-full justify-center relative '>
          <img src={Transition} className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default Depoimentos
