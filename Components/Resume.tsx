import { ArrowDownIcon } from "@heroicons/react/24/outline"



const Resume = () => {
  return (
    
    <div className="h-screen bg-black grid items-center color-white text-center">
    <button type="button" className="flex items-center  mx-auto border-2 w-fit rounded-full px-4 py-2  gap-2 border-white" >
      <p className=" md:text-3xl sm:text-2xl text-xl">Download Resume</p>
      <ArrowDownIcon className="w-6"/>
      </button>
    </div>
      )
}

export default Resume