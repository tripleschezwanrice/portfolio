import { Poppins, Rubik } from "next/font/google";
import Image from "next/image";

const poppins = Rubik({ subsets: ['latin'], weight:['400','500','600','700','800'] })
const page = () => {


  return (
    <div className={`w-full bg-white font-normal text-black ${poppins.className}`}>
       <div className="md:relative overflow-hidden   md:min-h-screen md:max-h-screen">
    <Image
        src="/Covers/Janki.png"
        alt="Your image description"
        className="md:absolute inset-0 w-full h-full object-cover"
        width={2080}
        height={2080}
      
    />
</div>
      <div className="lg:p-16 p-4">

      
      <div>
        <p className="text-xl">Ananya Singh</p>
        <p className="text-6xl font-bold my-4">Janki Website Redesign</p>
        <p>
        Project overview: A website redesign for the jewellery brand’s online store        </p>
      </div>
      <div className="grid grid-cols-3 my-16 w-full items-baseline">
        <div>
          <p className="font-bold text-gray-500">ROLE</p>
          <p>Intern: Solo <br className="lg:hidden"/>project</p>
        </div>

        <div className="flex flex-col justify-center ">
          <p className="font-bold text-gray-500">TOOLS</p>
          <p>Figma</p>
        </div>

        <div className="flex flex-col justify-end ">
          <p className="font-bold text-gray-500">DURATION</p>
          <p>February 2024</p>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center">
        <div className="col-span-10">
          <p className="text-4xl font-bold mb-8">Areas for Improvement  </p>
          <p className="mb-6">
          The current website exhibits opportunities for enhancement, notably in its aesthetic appeal, which could benefit from a more modern design. To fortify the brand's premium image, there's room to infuse a touch of luxury into the visual presentation. The redesign aims to go beyond visual enhancements, strategically focusing on optimizing information architecture, functionality, and the overall UX to create a more engaging and user-friendly online environment.
          </p>
        </div>
      </div>


      <div className="mt-24 flex flex-col gap-8">
        <p className="text-4xl font-bold">User feedback</p>
        <p>
        Based on user feedback, it has been noted that the existing design is perceived as having an older and outdated appeal, often described as "traditional". To address this, there is a clear call for a comprehensive design overhaul. Users express a desire for a more modern and youthful aesthetic, specifically suggesting the inclusion of pastel tones and a girly touch in alignment with Gen Z preferences. This feedback underscores the importance of enhancing the visual elements to cater to contemporary tastes and create a more engaging online experience.
        </p>
      </div>


      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-12">Industry trends</p>
            <p>A comprehensive examination of the digital platforms of leading luxury jewelry brands underscores prevailing design trends that significantly influence user expectations. Notably, these industry frontrunners prioritize elegance and sophistication through clean layouts, high-quality visuals, and a harmonious color palette. The strategic implementation of whitespace adds a touch of luxury and exclusivity to their online presence. Moreover, a rising trend involves incorporating models, their facial expressions, and curated outfits to enhance the overall presentation, placing jewelry within a lifestyle context.
</p>
      </div>




      <div className="md:mt-24 mt-12 flex flex-col gap-8">
        <p className="text-4xl font-bold">Goals</p>
        <p>
        The goal is to create a visually compelling, user-friendly website that resonates with a diverse audience while maintaining a touch of luxury. while steering towards a much more enhanced user experience.
      </p>
      </div>

      
      <div className="md:mt-24 mt-12 flex flex-col gap-8">
        <p className="text-4xl font-bold">The Redesign</p>
        <Image
        src="/Janki_Assets/Redesign.png"
        height={2080
        }
        width={2080
        }
        alt=""
        className=""
        />
         <Image
        src="/Janki_Assets/1.png"
        height={4000
        }
        width={4000
        }
        alt=""
        className=""
        />
         <Image
        src="/Janki_Assets/2.png"
        height={4000
        }
        width={4000
        }
        alt=""
        className=""
        />
         <Image
        src="/Janki_Assets/3.png"
        height={4000
        }
        width={4000
        }
        alt=""
        className=""
        />
      </div>
      

 </div>
    </div>
  );
};

export default page;
