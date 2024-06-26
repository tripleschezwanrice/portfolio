import { Poppins, Rubik } from "next/font/google";
import Image from "next/image";

const poppins = Rubik({ subsets: ['latin'], weight:['400','500','600','700','800'] })
const page = () => {


  return (
    <div className={`w-full bg-white font-normal text-black ${poppins.className}`}>
     <div className="md:relative overflow-hidden   md:min-h-screen md:max-h-screen">
    <Image
        src="/Covers/Voy.png"
        alt="Your image description"
        className="md:absolute inset-0 w-full h-full object-cover"
        width={2080}
        height={2080}
      
    />
</div>

      <div className="lg:p-16 p-4">

      
      <div>
        <p className="text-xl">Ananya Singh</p>
        <p className="text-6xl font-bold my-4">Voyageur</p>
        <p>
        Project overview: A travel app to seamlessly combine bookings, itineraries,
budget management, and social connectivity
        </p>
      </div>
      <div className="grid  grid-cols-3 my-16 w-full items-baseline">
        <div>
          <p className="font-bold text-gray-500">ROLE</p>
          <p>Solo Project</p>
        </div>

        <div className="flex flex-col justify-center ">
          <p className="font-bold text-gray-500">TOOLS</p>
          <p>Adobe XD</p>
        </div>

        <div className="flex flex-col justify-end ">
          <p className="font-bold text-gray-500">DURATION</p>
          <p>24-26 June 2023</p>
        </div>
      </div>
      <div className="md:grid  flex flex-col grid-cols-10 items-center">
        <div className="col-span-10">
          <p className="text-4xl font-bold mb-8">The Challenge or Problem Statement</p>
          <p className="mb-6">
          Travellers often grapple with the hassle of managing multiple apps for
travel bookings, itinerary planning, budgeting, and connecting with
fellow travellers.
          </p>
          <p>
          Existing solutions lack cohesion and fail to provide an all
encompassing platform, resulting in fragmented user experiences and
time consuming processes.
          </p>
        </div>
      </div>


      <div className="mt-24 flex flex-col gap-8">
        <p className="text-4xl font-bold">Goals</p>
        <p>
        Develop a comprehensive mobile travel application that seamlessly integrates travel bookings, itinerary planning, budget
management, and social connectivity.
        </p>
        <p>
        The goal is to empower users to streamline their travel experience, saving time and providing a unified platform for all their travel
related needs, so as to save time, money and for better convenience.
        </p>
      </div>


      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-12">Overview</p>
        <Image
          src="/Vritti_Assets/Process Timeline.png"
          height={2048}
          width={2048}
          alt=""
          className=""
        />
      </div>



      <div className="md:mt-24 mt-12 flex flex-col gap-8">
        <p className="text-4xl font-bold">Reaseach and Analysis</p>
        <p>
        User research was conducted through an online survey. This graph shows the participant’s motivations when asked about using an
ideal travel app.
        </p>
        <Image
          src="/Voyageur_Assets/Research.png"
          height={2048}
          width={2048}
          alt=""
          className="w-[55%] mx-auto"
        />
       

      </div>
      
      <div>
        <p className="font-bold mt-12 mb-4">Findings</p>
    <p>The survey uncovered several key findings:
</p>
        <div className="mt-8 flex flex-col gap-4">
          <p className="">
          <strong> 1. High Interest in Unified Travel Apps:</strong> 87.5% of respondents expressed a strong interest in using a single app for travel
bookings, itinerary planning, budgeting, and connecting with other travellers.
          </p>
         <p>
         <strong>2. Top Pain Point Research:</strong> 65% of respondents identified research and planning needed for finding places/services as a major
pain poinÏ
         </p>
         <p>
         <strong>3. Prices and budgeting:</strong> 65% of respondents expressed interest in features that help them in budgeting alongside their itinerary
planning so as to save money and time.
         </p>
         <p>
         <strong>4. Importance of time:</strong> 75% of respondents declared that saving their time in the travel process is of utmost importance

         </p>
        </div>


        <div className="md:mt-24 mt-12 ">
            <p className="text-4xl font-bold">Competitor analysis</p>
           
<Image
          src="/Voyageur_Assets/Comp.png"
          height={2048}
          width={2048}
          alt=""
          className="col-span-4 p-12"
        />
        </div>



        <div className=" md:mt-24 mt-12 ">
        <p className="font-bold text-4xl ">User Persona</p>
       

        <div className="flex">
        <Image
          src="/Voyageur_Assets/Vicky.png"
          height={2048}
          width={2048}
          alt=""
          className="p-6 lg:w-[60%] mx-auto lg:mt-6 mt-4"
        />
        </div>
      </div>

    
      <div className="mb-12 md:mt-24 mt-12">
        <p className="font-bold text-4xl">Final Actionable Insights</p>
        <ul className=" mt-8 gap-3 flex flex-col">
          <li>
          <strong>1. Fragmented User Experience:</strong> Travellers expressed frustration with juggling multiple apps for different aspects of their
journey.
          </li>
          <li>
         <strong> 2. Desire for Comprehensive Solutions:</strong> Users indicated a strong preference for an all in one platform that simplifies the entire
travel process.
          </li>
          <li>
          <strong>3. Social Connectivity:</strong> There was a opportunity for features that facilitate connections with fellow travellers for shared
experiences, guidance and tips.
          </li>
          <li>
         <strong> 4. Personalised travel discovery and suggestions:</strong> There was a need to help users in their travel research, since trip research is
their major pain point.
          </li>
        </ul>
      </div>


      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold">Solution</p>
        <p className="my-6">
        Streamlining the travel experience, our solution integrates trip research and booking functionalities within a single, user centric
platform, eliminating the need to toggle between various apps and sites. To enhance organization, a seamless interface facilitates
concurrent tracking of budgeting and itinerary planning. Additionally, fostering community connections, the app introduces
features to easily discover and connect with fellow travellers, creating a vibrant and supportive travel community.
        </p>
        <Image
          src="/Voyageur_Assets/Solution.png"
          height={2048}
          width={2048}
          alt=""
          className="p-6 w-[60%] mt-12 mx-auto"
        />
      </div>


      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">Information Architecture</p>
        
        <Image
          src="/Voyageur_Assets/ia group.png"
          height={4000}
          width={4000}
          alt=""
          className="p-6 w-[60%]  mt-12 mx-auto"
        />
      </div>

      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">User Flow</p>
        
<Image
          src="/Voyageur_Assets/userf.png"
          height={2000}
          width={2000}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      </div>


      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">Visual Design and Prototype</p>
        <p>
        The next plan of action was to create colour palettes and typography that would help communicate the brand’s identity and also
give the product an exciting feel   
        </p>
        <Image
          src="/Voyageur_Assets/Style guide.png"
          height={4096}
          width={4096}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      <p className="mt-6 font-bold ml-8">High Fidelity Designs</p>
      <Image
          src="/Voyageur_Assets/1.png"
          height={4096}
          width={4096}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      
      <Image
          src="/Voyageur_Assets/2new.png"
          height={8000}
          width={8000}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      <Image
          src="/Voyageur_Assets/3.png"
          height={8192}
          width={8192}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      </div>
      </div>

      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold">Prototype</p>
        <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src="https://xd.adobe.com/embed/516bf086-e5c8-4382-a387-d96771e1f395-0438/?fullscreen" allowFullScreen  className="flex mx-auto max-w-full my-4"></iframe>
      </div> 

      </div>
    </div>
  );
};

export default page;
