import logo from "../../assets/logo2.png"
import Bg from "../../assets/newletter/bg.png"


function Newsletter() {

    return (
        <>
        <div className="w-full justify-center flex">
            <div className='relative pb-30 text-center w-full max-w-[1366px] justify-center pt-15 px-4 bg-[#0d1226]'>
                {/* Background isolado para não afetar filhos */}
                <div className='absolute inset-0' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                <div className="relative flex justify-center mb-10"><img src={logo} className='max-w-[70%] sm:max-w-full h-auto' /></div>
                <h2 className='relative text-xl sm:text-2xl md:text-3xl'>Pronto Para Elevar o Nível da Sua Pesquisa?</h2>
                <p className='relative text-sm sm:text-base mt-2'>Seja insigne e comece agora mesmo a ter os benefícios.</p>
                <div className="relative bg-[#FF8611] py-4 sm:py-5 px-8 sm:px-20 inline-block mt-10 rounded-xl font-bold text-sm sm:text-base">Quero Ser Insigne Agora!</div>
            </div>
        </div>
        </>
    )
}

export default Newsletter
