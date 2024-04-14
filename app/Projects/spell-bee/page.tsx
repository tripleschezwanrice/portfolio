import { Poppins, Rubik } from "next/font/google";
import Image from "next/image";

const poppins = Rubik({ subsets: ['latin'], weight:['400','500','600','700','800'] })
const page = () => {

  return (
    <div className={`w-full bg-white font-normal text-black ${poppins.className}`}>
       <div className="md:relative overflow-hidden   md:min-h-screen md:max-h-screen">
    <Image
        src="/Covers/Spell.png"
        alt="Your image description"
        className="md:absolute inset-0 w-full h-full object-cover"
        width={2080}
        height={2080}
      
    />
</div>
      <div className="lg:p-16 p-4">

      
      <div>
        <p className="text-xl">Ananya Singh</p>
        <p className="text-6xl font-bold my-4">Indian Spelling Bee (ISB) App</p>
        <p>
        Project overview: Designing the mobile application for the ISB company
        </p>
      </div>
      <div className="grid grid-cols-3 my-16 w-full">
        <div>
          <p className="font-bold text-gray-500">ROLE</p>
          <p>Freelance: Solo <br className="lg:hidden"/> project</p>
        </div>
        <div >
            <p className="font-bold text-gray-500">TOOLS</p>
            <p>Figma</p>
        </div>
        <div>
            <p className="font-bold text-gray-500">
                DURATION
            </p>
            <p>
            March 2024-Present
            </p>
        </div>
        </div>
        </div>
        <div className=" overflow-hidden"><Image src="/Spell_Hut_Assets/spellfooter.png" height={2080} width={2080} alt="" /></div>
        </div>
  )
}

export default page