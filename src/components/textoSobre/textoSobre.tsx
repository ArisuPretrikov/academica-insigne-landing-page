
import Bg1 from '../../assets/textosobre/Bg1.png'
import Bg2 from '../../assets/textosobre/Bg2.png'
import Bg3 from '../../assets/textosobre/Bg3.png'
import Frame2 from '../../assets/textosobre/Frame2.png'
import Frame7 from '../../assets/textosobre/Frame7.png'
import Frame8 from '../../assets/textosobre/Frame8.png'


function textoSobre() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 w-full relative justify-items-center overflow-hidden">

        {/* BG1: Ele continua ocupando a largura total ou o que você definir */}
        <img
          src={Bg1}
          className="col-start-1 row-start-1 w-full h-auto object-cover z-0 max-w-[1366px]"
          title="BackGround"
        />

        {/* CONTEÚDO: 
            1. Adicionamos max-w-[1200px] (ou o tamanho da sua imagem original).
            2. w-full garante que no mobile ele use 100%.
            3. mx-auto mantém ele centralizado no zoom out.
        */}
        <div className="col-start-1 row-start-1 z-10 w-full mx-auto mt-[clamp(10rem,50vw,45rem)] max-w-[1366px]">

          <div className='flex flex-col justify-center px-[5%]'>
            {/* Bloco 1: Editora */}
            <div className='grid grid-cols-3 gap-[5%] h-full -mt-10'>
              <div className='text-left col-span-2'>
                <div className='text-[#02022F] text-[clamp(1.5rem,4vw,3rem)] font-bold'>Editora</div>
                <div className='text-[#02022F] text-[clamp(0.875rem,1.5vw,1.25rem)]'>
                  A Insigne Acadêmica ensina o desenvolvimento de trabalhos científicos com o Método CRP.
                </div>
              </div>
              <div className='flex h-full items-center -mt-10'>
                <img src={Frame2} className="w-full h-auto object-contain max-w-[300px]" alt="Editora" />
              </div>
              
            </div>

            {/* Bloco 2: Revista */}
            <div className='grid grid-cols-3 h-full'>
              <div className='flex h-full items-center px-[5%]  rounded-tr-xl'>
                <img src={Frame2} className="w-full h-auto object-contain max-w-[300px]" alt="Revista" />
              </div>
              <div className='text-right bg-[#ffffff] pt-[2%] rounded-bl-xl px-[5%] col-span-2 pb-5'>
                <div className='text-[#02022F] text-[clamp(1.5rem,4vw,3rem)] font-bold'>Revista</div>
                <div className='text-[#02022F] text-[clamp(0.875rem,1.5vw,1.25rem)]'>
                  A Insigne Acadêmica ensina o desenvolvimento de trabalhos científicos com o Método CRP.
                </div>
              </div>
            </div>

            {/* Bloco 3: Congresso */}
            <div className='bg-[#f0ede9] rounded-tr-lg grid grid-cols-3 gap-[5%] h-full pb-10'>
              <div className='text-left col-span-2 px-[5%]'>
                <div className='text-[#02022F] text-[clamp(1.5rem,4vw,3rem)] font-bold'>Congresso</div>
                <div className='text-[#02022F] text-[clamp(0.875rem,1.5vw,1.25rem)]'>
                  A Insigne Acadêmica ensina o desenvolvimento de trabalhos científicos com o Método CRP.
                </div>
              </div>
              <div className='flex h-full items-center'>
                <img src={Frame2} className="w-full h-auto object-contain max-w-[300px]" alt="Congresso" />
              </div>

            </div>
          </div>


          {/* Bloco do Professor (Bg3) */}
          <div className='relative mx-[5%] bg-[#edeae6] shadow-xl rounded-xl overflow-hidden max-w-[1366px] -mt-5'>

            {/* 1. Imagem absolute: agora ela apenas preenche o fundo, sem ditar a altura do card */}
            <img src={Bg3} className="absolute inset-0 w-full h-full object-cover z-0" alt="Fundo" />

            {/* 2. Div do conteúdo: removido h-full e trocado pt-[5%] por py-[5%] para dar espaço no topo e embaixo */}
            <div className='relative z-10 w-full px-[5%] pt-[5%] grid grid-cols-1 sm:grid-cols-2'>

              <div className=' text-[clamp(1rem,1.2vw,1.1rem)] w-[5]'>
                <img src={Frame7} className='w-full max-w-[400px] mb-4' alt="Frame 7" />
                <div className='text-[#02022F]'>
                  O Prof. Pedro da Mata é um especialista em pesquisa científica, com graduação em Direito e pós-graduações em Linguística Aplicada, Metodologia da Pesquisa Científica e Docência no Ensino Superior. Com mais de 50 trabalhos publicados, ele compreende as dificuldades dos alunos, oferece suporte contínuo e os motiva a alcançar excelência, sem desistir deles.
                </div>
                <div className='my-10 flex justify-center hidden sm:block'>
                  <a href="https://lattes.cnpq.br/8307765062275242" className='bg-amber-600 px-8 py-4 rounded-lg text-white font-bold text-center' target='_blank' rel="noreferrer">
                    Currículo Lattes
                  </a>
                </div>
              </div>

              {/* 3. Área dos botões/imagem: removido h-full e adicionado gap-6 para separar os itens e flex-wrap para responsividade */}
              <div className='flex justify-center items-end gap-1 mt-2 flex-wrap grid grid-cols-2'>
                <div className='my-10 flex justify-center flex self-start sm:hidden'>
                  <a href="https://lattes.cnpq.br/8307765062275242" className='bg-amber-600 px-8 py-4 rounded-lg text-white font-bold text-center' target='_blank' rel="noreferrer">
                    Currículo Lattes
                  </a>
                </div>
                {/* 4. A sua imagem sem distorção */}
                <div>
                  <img src={Frame8} className="h-auto object-contain w-50 sm:w-auto max-w-[500px]" alt="Sua descrição" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default textoSobre
