
import Title from '../../assets/title2.png'
import Title2 from '../../assets/title3.png'
import List from '../../assets/List.png'
import PrecoFoto from '../../assets/preco.png'
import BgFim from '../../assets/preco/BgFim.png'
import BgMeio from '../../assets/preco/BgMeio.png'

function Preco() {

  return (
    <>
      <div className='relative flex flex-wrap w-full justify-center px-4'>
        <div className='max-w-[1366px] flex flex-wrap  justify-center'>
          <div className='flex flex-wrap w-full justify-center mb-20 relative z-10'><img src={Title} className='max-w-full h-auto' /></div>
          <img src={BgMeio} className='absolute -mt-20 left-1/2 -translate-x-1/2 pointer-events-none' />
          <div className='relative z-10 rounded-xl w-full max-w-2xl shadow-[#1D8EFD] shadow-[0_0_100px_5px]'>
            <div className='bg-[#16163F] rounded-xl px-10 p-5 sm:p-10 border border-[#0a196c]'>
              <img src={Title2} className='max-w-full h-auto -ml-5 sm:-ml-0' />
              <img src={PrecoFoto} className='px-10 mt-6 mb-6 sm:mt-10 sm:mb-10 w-full max-w-[300px] h-auto' />
              <img src={List} className='max-w-full h-auto mx-auto mb-10' />
              <a href="https://api.whatsapp.com/send?phone=5584992293892&text=Ol%C3%A1+%F0%9F%98%81%0AEditor+Pedro%21+Tenho+interesse+em+ser+Insigne." target="_blank">
                <div className='border border-[#FFFFFF] bg-[#FF8611] pl-6 pr-6 pt-4 pb-4 rounded-2xl text-1xl self-center font-semibold shadow-xl w-full text-center'>
                  QUERO SER INSIGNE AGORA!
                </div>
              </a>
            </div>
          </div>
          <div className='w-full -mb-50 -mt-40'>
            <img src={BgFim} className='w-full h-auto' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Preco
