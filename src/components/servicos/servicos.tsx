
import Transition from '../../assets/servicos/Transition.png'
import Title from '../../assets/servicos/Title.png'
import Frame2 from '../../assets/servicos/Frame2.png'
import Frame3 from '../../assets/servicos/Frame3.png'
import Frame6 from '../../assets/servicos/Frame6.png'
import Frame7 from '../../assets/servicos/Frame7.png'

function Servicos() {

  return (
    <>
      <div className='flex w-screen justify-center'>
        <div className='flex flex-wrap flex-col justify-center relative  max-w-[1366px]'>
          <img src={Transition} />
          <div className='w-full flex justify-center mb-10 px-5'><img src={Title} className='max-w-full h-auto' /></div>
          <div className='grid grid-cols-2 content-center justify-center hidden sm:grid mb-20'>
            <div className='m-20 flex flex-col justify-center'>
              <div className='text-[clamp(1.25rem,4vw,1.5rem)] text-left mb-2 leading-6'>
                Obtenha Consultoria Especializada 24h por dia
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1rem)] text-justify opacity-75 leading-6'>
                Oferecemos suporte completo para sua pesquisa: orientação na escolha do tema e área de estudo, criação de sumário e estruturação
              </div>
            </div>
            <div className='flex items-center min-w-0'><img src={Frame2} className='max-w-full h-auto' /></div>
            <div className='flex items-center min-w-0'><img src={Frame6} className='max-w-full h-auto' /></div>
            <div className='m-10 flex flex-col justify-center'>
              <div className='text-[clamp(1.25rem,4vw,1.5rem)] text-left mb-2 leading-6'>
                Tenha uma Acessoria personalizada focada em didática e planejamento
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1rem)] text-justify opacity-75 leading-6'>
                Escolhemos tema e área, criamos sumário, estrutura e aula explicativa, elaboramos cronograma, fornecemos artigos, analisamos textos               </div>
            </div>
            <div className='m-10 flex flex-col justify-center'>
              <div className='text-[clamp(1.25rem,4vw,1.5rem)] text-left mb-2'>
                Acessoria
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1rem)] text-justify opacity-75 leading-6'>
                Escolhemos tema e área, criamos sumário, estrutura e aula explicativa, elaboramos cronograma, fornecemos artigos, analisamos textos               </div>
            </div>
            <div className='flex items-center min-w-0'><img src={Frame3} className='max-w-full h-auto' /></div>
          </div>

          <div className='grid grid-cols-1 content-center justify-center gap-y-5 sm:hidden mx-10'>
            <div className='flex items-center justify-center'><img src={Frame2} className='w-[50%]' /></div>
            <div className='mb-10'>
              <div className='text-[clamp(1.25rem,4vw,3rem)] text-center'>
                Obtenha Consultoria Especializada 24h por dia
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1.25rem)] text-justify opacity-75'>
                Oferecemos suporte completo para sua pesquisa: orientação na escolha do tema e área de estudo, criação de sumário e estruturação
              </div>
            </div>
            <div className='flex items-center justify-center'><img src={Frame3} className='w-[50%]' /></div>
            <div className='mb-10'>
              <div className='text-[clamp(1.25rem,4vw,3rem)] text-center'>
                Tenha uma Acessoria personalizada focada em didática e planejamento
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1.25rem)] text-justify opacity-75'>
                Escolhemos tema e área, criamos sumário, estrutura e aula explicativa, elaboramos cronograma, fornecemos artigos, analisamos textos               </div>
            </div>
            <div className='flex items-center justify-center'><img src={Frame6} className='w-[50%]' /></div>
            <div className='mb-10'>
              <div className='text-[clamp(1.25rem,4vw,3rem)] text-center'>
                Acessoria
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1.25rem)] text-justify opacity-75'>
                Escolhemos tema e área, criamos sumário, estrutura e aula explicativa, elaboramos cronograma, fornecemos artigos, analisamos textos               </div>
            </div>
          </div>

          <div className='grid grid-cols-1 overflow-hidden sm:grid-cols-2  pb-20' style={{ background: 'linear-gradient(to bottom, transparent, rgba(73, 73, 201, 0.2))' }}>
            <div className=' m-5 sm:m-15 xl:m-30 flex flex-col justify-center hidden sm:block'>
              <div className='text-[clamp(1.25rem,4vw,3rem)] text-center sm:text-left sm:leading-12 mb-3'>
                Ao final você pode ter o seu trabalho publicado e anunciado no site da nossa editora
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1.25rem)] text-center sm:text-left opacity-75'>
                Dê uma olhada, talvez sua pergunta já tenha sido respondida.
              </div>
            </div>

            <div className='overflow-hidden min-w-0 '>
              <img src={Frame7} className='block max-w-full h-auto ' />
            </div>

            <div className=' m-5 sm:m-15 xl:m-30 flex flex-col justify-center block sm:hidden col-span-2'>
              <div className='text-[clamp(1.25rem,4vw,3rem)] text-center sm:text-left sm:leading-12 mb-3'>
                Ao final você pode ter o seu trabalho publicado e anunciado no site da nossa editora
              </div>
              <div className='text-[clamp(0.875rem,1.5vw,1.25rem)] text-center sm:text-left opacity-75'>
                Dê uma olhada, talvez sua pergunta já tenha sido respondida.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Servicos
