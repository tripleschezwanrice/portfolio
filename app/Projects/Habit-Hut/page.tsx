import { Poppins, Rubik } from "next/font/google";
import Image from "next/image";

const poppins = Rubik({ subsets: ['latin'], weight:['400','500','600','700','800'] })
const page = () => {

  return (
    <div className={`w-full bg-white font-normal text-black ${poppins.className}`}>
      <div className="lg:h-screen overflow-hidden"><Image src="/Spell_Hut_Assets/Spell-Header.png" height={2080} width={2080} alt="" /></div>
      <div className="p-16">

      
      <div>
        <p className="text-xl">Ananya Singh</p>
        <p className="text-6xl font-bold my-4">Habit Hut (under progress)</p>
        <p>
        Project overview: Designing the UX of a kid’s habit building application        </p>
      </div>
      <div className="grid grid-cols-3 my-16 w-full">
        <div>
          <p className="font-bold text-gray-500">ROLE</p>
          <p>Intern: Team project <br />
Research, Wireframing, Prototyping</p>
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
            September 2023 - Present            </p>
        </div>
        </div>
        </div>
        <div className="lg:h-screen overflow-hidden"><Image src="/Spell_Hut_Assets/Habit-Footer.png" height={2080} width={2080} alt="" /></div>
        </div>
  )
}

export default page