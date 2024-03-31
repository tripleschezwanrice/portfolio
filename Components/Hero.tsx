import Link from "next/link"

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('/hero_image.png')" }}>
    <div className='mt-80 lg:text-7xl md:text-6qxl text-[8vw]  text-center'>
      UI/UX DESIGNER
      <div className='md:text-xl text-[16px] flex md:flex-row flex-col items-center mx-auto justify-center gap-4 mt-8'>
        <Link href = "/Projects" type="button" className='border-2 bg-white text-black md:w-[262px] md:h-[67px]  w-[194px] h-[50px] rounded-full grid items-center'>
            MY WORK 
        </Link>

        <Link href='/Contact' type="button" className='border-2 border-white md:w-[262px] md:h-[67px]  w-[194px] h-[50px] rounded-full grid items-center'>
            CONTACT ME
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Hero