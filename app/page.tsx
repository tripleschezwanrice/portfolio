import Hero from '@/Components/Hero'
import LetsTalk from '@/Components/LetsTalk'
import Projects from '@/Components/Projects'
import Resume from '@/Components/Resume'
import { Syncopate } from 'next/font/google'
import Image from 'next/image' 



const scp = Syncopate({ subsets: ['latin'], weight:['700'] })



export default function Home() {
  return (
   <>
    <Hero/>  
   </>

  )
}
