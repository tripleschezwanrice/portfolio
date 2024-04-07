"use client";

import Link from "next/link";
import Image from "next/image";
import { Syne } from "next/font/google";
const syne = Syne({ subsets: ['latin'], weight:['400'] })




const Projects = () => {
  

  return (
   
      <div className="grid sm:grid-rows-4 grid-rows-8  bg-black px-12 py-4 md:pt-4 pt-12">
          <div className="row-span-2 sm:row-span-1 grid sm:grid-cols-10">
          <Link href="/Projects/voyageur" className="sm:col-span-5 row-span-1 rounded-md text-center flex flex-col w-full overflow-hidden p-4">
      {/* Apply styles to the link */}
      <Image src="/Thumbnail/voya.png" width={2000} height={2000} alt="" className="w-full h-full object-cover" />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>Design Project🔴</p>
    </Link>
    <Link href="/Projects/vritti" className="sm:col-span-5 row-span-1 rounded-md text-center  w-full overflow-hidden p-4 flex flex-col">
      <Image src="/Thumbnail/vritti.png" width={2000} height={2000} alt="" className="w-full h-full object-cover" />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>Design Project🔴</p>
    </Link>
          </div>

      

          <div className="row-span-2 sm:row-span-1 grid sm:grid-cols-10">
          <a href="https://drive.google.com/file/d/1-x2daPjWM0fRv9BQsFGCEslYhDzHXQD3/view"  target="_blank" className="sm:col-span-5 row-span-1 rounded-md text-center  w-full overflow-hidden p-4 flex flex-col">
      {/* Apply styles to the a */}
      <Image src="/Thumbnail/olx.png" width={2000} height={2000} alt="" className="w-full h-full object-cover" />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>Research Project🟡</p>
    </a>
    <Link href="/Projects/Janki" className="sm:col-span-5 row-span-1 rounded-md text-center w-full overflow-hidden p-4 flex flex-col">
      {/* Apply styles to the link */}
      <Image src="/Thumbnail/janki.png" width={2000} height={2000} alt="" className="w-full h-full object-cover " />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>UI/UX Internship🔵</p>
    </Link>
          </div> 

          <div className="row-span-2 sm:row-span-1 grid sm:grid-cols-10">
          <Link href="/Projects/akaasa" className="sm:col-span-5 row-span-1 rounded-md text-center w-full overflow-hidden p-4 flex flex-col ">
      {/* Apply styles to the link */}
      <Image src="/Thumbnail/akasa.png" width={2000} height={2000} alt="" className="w-full h-full object-cover" />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>Design Project🔴</p>
    </Link>
    <Link href="/Projects/Habit-Hut" className="sm:col-span-5 row-span-1 rounded-md text-center w-full overflow-hidden p-4 flex flex-col">
      {/* Apply styles to the link */}
      <Image src="/Thumbnail/habit-hut.png" width={2000} height={2000} alt="" className="w-full h-full object-cover" />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>UI/UX Internship🔵</p>
    </Link>
          </div>

          
          <div className="row-span-2 sm:row-span-1 grid sm:grid-cols-10 ">
          <a href="https://drive.google.com/file/d/1NQshFh2hYTRc_AQ4K6y04qL_BcPG3CN8/view"  target="_blank" className="sm:col-span-5 row-span-1 rounded-md text-center flex w-full overflow-hidden p-4 flex-col">
      {/* Apply styles to the link */}
      <Image src="/Thumbnail/research.png" width={2000} height={2000} alt="" className="w-full h-full object-cover" />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>Research Project🟡</p>
    </a>
    <Link href="/Projects/spell-bee" className="sm:col-span-5 row-span-1 rounded-md text-center flex w-full overflow-hidden p-4  flex-col">
      {/* Apply styles to the link */}
      <Image src="/Thumbnail/isb.png" width={2000} height={2000} alt="" className="w-full h-full object-cover" />
      <p className={`${syne.className} font-regular w-fit bg-[#ffffff34] rounded-full text-sm pl-[8px] pr-[4px] m-2`}>Freelance Project🔵</p>
    </Link>
          </div>

      </div>

    
  );
};

export default Projects;
