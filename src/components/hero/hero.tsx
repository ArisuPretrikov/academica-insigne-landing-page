
import Logo from '../../assets/logo2.png'
import Bg from '../../assets/hero/Background.png'

const stats = [
    { valor: '+500', label: 'Revisões Gramaticais' },
    { valor: '+800', label: 'Formatações' },
    { valor: '+300', label: 'Alunos' },
    { valor: '+1.000', label: 'Trabalhos Publicados' },
    { valor: '+30.000', label: 'Laudas Revisadas' },
]

function Hero() {

    return (
        <>
            <div className='flex flex-wrap w-screen justify-center' >
                <div className='w-full max-w-[1366px]' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='text-center mb-[5%] mt-[clamp(4rem,10vw,20rem)] mx-4 sm:mx-10 md:mx-20 lg:mx-50'>
                        <img src={Logo} className='block mx-auto mb-8 sm:mb-16 max-w-[70%] sm:max-w-full'></img>

                        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5'>
                            Alcance <p className='text-amber-600 inline-block'>Máxima qualidade</p> no seu artigo <p className='text-amber-600 inline-block'>científico</p> e
                            tenha seu trabalho acadêmico <p className='text-amber-600 inline-block'>publicado.</p>
                        </div>

                        <div className='text-sm sm:text-base mb-5'>
                            Aqui na Insigne Acadêmica você recebe revisão científica de excelência, orientação completa com o Método CRP, apoio em banca, bibliografia, slides e tudo que precisa para TCC, artigo, dissertação ou tese. Resultado: seu trabalho 100% dentro das normas e publicado como livro ou em revista científica qualificadora.
                        </div>

                        <div className='flex gap-y-4 gap-x-4 flex-wrap justify-center'>
                            <div>
                                <a href="https://api.whatsapp.com/send?phone=5584992293892&text=Ol%C3%A1+%F0%9F%98%81%0AEditor+Pedro%21+Tenho+interesse+em+ser+Insigne." target="_blank">
                                    <div className='border-4 border-amber-600 bg-amber-600 pl-6 pr-6 pt-4 pb-4 rounded-full text-1xl self-center font-semibold inline-block shadow-xl'>
                                        QUERO SER INSIGNE AGORA!
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://api.whatsapp.com/send?phone=5584992293892&text=Ol%C3%A1+%F0%9F%98%81%0AEditor+Pedro%21+Tenho+interesse+em+ser+Insigne.%0AEstou+com+uma+d%C3%BAvida+sobre%3A%0A%5BDigite+sua+d%C3%BAvida+aqui%5D" target="_blank">
                                    <div className='border-4 border-amber-600 pl-6 pr-6 pt-4 pb-4 rounded-full text-1xl self-center font-semibold inline-block shadow-xl'>
                                        Fale conosco
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-center relative overflow-hidden py-5'
                    style={{ background: 'linear-gradient(to bottom, #0e154b, transparent)' }}>

                        {/* Gradiente esquerda */}
                        <div className='pointer-events-none absolute left-0 top-0 h-full w-32 z-10'
                            style={{ background: 'linear-gradient(to right, #02022f, transparent)' }}
                        />
                        {/* Gradiente direita */}
                        <div className='pointer-events-none absolute right-0 top-0 h-full w-32 z-10'
                            style={{ background: 'linear-gradient(to left, #02022f, transparent)' }}
                        />

                        {/* Track: sem gap entre cópias para o -50% ser exato */}
                        <div style={{ display: 'flex', flexShrink: 0, width: 'max-content', animation: 'carousel-scroll 50s linear infinite' }}>
                            {[0, 1, 2, 3].map((copy) => (
                                <div key={copy} style={{ display: 'flex', flexShrink: 0, gap: '48px', paddingRight: '48px' }}>
                                    {stats.map((s, i) => (
                                        <div
                                            key={i}
                                            className='flex items-center gap-3 whitespace-nowrap border border-[#1D8EFD] rounded-lg px-5 py-2'
                                            style={{ backgroundImage: 'linear-gradient(to bottom, #0D1044, rgba(13,17,70,0))' }}
                                        >
                                            <span className='text-white text-2xl font-bold'>{s.valor}</span>
                                            <span className='text-white text-sm'>{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
