"use client";

import Link from "next/link";
import { useState } from "react";


const Projects = () => {
  

  return (
   
      <div className="grid grid-rows-3 h-screen bg-black p-12 gap-4">
          <div className="row-span-1 grid grid-cols-10 gap-4">
              <Link href = "/Projects/vritti" className="col-span-6 border border-white rounded-md text-center items-center justify-center flex">
                Vritti
              </Link>
              <Link href = "/Projects/akaasa" className="col-span-4 border border-white rounded-md text-center items-center justify-center flex">
                Akaasa
              </Link>
          </div>

      

          <div className="row-span-1 grid grid-cols-10 gap-4">
          <Link href = "/Projects/voyageur" className="col-span-4 border border-white rounded-md text-center items-center justify-center flex">
                Voyageur
              </Link>
              <Link href = "/Projects/spell-bee" className="col-span-6 border border-white rounded-md text-center items-center justify-center flex">
                Spell-Bee
              </Link>
          </div>

          <div className="row-span-1 grid grid-cols-10 gap-4">
          <Link href = "/Projects/voyageur" className="col-span-5 border border-white rounded-md text-center items-center justify-center flex">
                Janki
              </Link>
              <Link href = "/Projects/spell-bee" className="col-span-5 border border-white rounded-md text-center items-center justify-center flex">
                Habit-Hut
              </Link>
          </div>

      </div>

    
  );
};

export default Projects;
