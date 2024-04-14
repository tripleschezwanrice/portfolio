import Link from "next/link"


const Hero = () => {
  return (
    <div style={{ position: 'relative' }}>
      <iframe src='https://my.spline.design/dunes-255fc63436419863f11855c230690c0b/' frameBorder='0' width='100%' height='100%' className="bg-cover bg-center h-screen flex justify-center items-center z-0"></iframe>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className='mt-[16rem] text-center z-50'>
          <p className="lg:text-[4vw] md:text-[5vw] text-[5vw]">UI/UX DESIGNER</p>
          <div className='md:text-xl text-[16px] flex md:flex-row flex-col items-center mx-auto justify-center gap-4 mt-8'>
            <Link href="/Projects" type="button" className='custom-btn btn-15 z-50'>
              MY WORK
            </Link>
            <Link href='/Contact' type="button" className='custom-btn2 btn-16'>
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
