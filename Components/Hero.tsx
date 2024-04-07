import Link from "next/link"

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center b" style={{ backgroundImage: "url('/new_hero.png')"}}>
    <div className='mt-80 lg:text-7xl md:text-6qxl text-[8vw]  text-center'>
      UI/UX DESIGNER
      <div className='md:text-xl text-[16px] flex md:flex-row flex-col items-center mx-auto justify-center gap-4 mt-8'>
        <Link href = "/Projects" type="button" className='custom-btn btn-15'>
            MY WORK 
        </Link>
            <Link href='/Contact' type="button" className='custom-btn2 btn-16'>
            CONTACT ME
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Hero