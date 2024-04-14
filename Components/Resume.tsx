"use client"

import { whatsapp } from "@/Functions/Whatsapp";
import Image from "next/image";


const LetsTalk = () => {


  return (
    <div className="h-screen bg-black grid items-center text-center" style={{ backgroundImage: "url('/stars.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
    <div className='md:text-xl text-[16px] flex md:flex-row flex-col items-center mx-auto justify-center gap-4 mt-8'>
        <a href="https://drive.google.com/file/d/1jVUE2mDMI9PUuphuW4ikC4QNsmwhDyfo/view" type="button" className='custom-btn2 btn-17'>
            View Resume
        </a>
    </div>
</div>

  );
};

export default LetsTalk;
