
import Logo from '../../assets/logo3.png'
function videoSobre() {

  return (
    <>
      <div className="flex flex-col items-center justify-center relative z-10 -mb-[10%] w-full px-[4%]">

        {/* Container do Logo */}
        <div className="flex justify-center pb-10 w-full">
          <img
            src={Logo}
            alt="Logo da empresa"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Container do Vídeo */}
        <div className="bg-[#FF8611] rounded-xl relative p-3 sm:p-5 w-full max-w-4xl mx-auto shadow-xl">
          {/* Este container mantém a proporção de 16:9 automaticamente */}
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/YNG5pOX06S4?si=3DyJy3UesGfu5eDA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default videoSobre
