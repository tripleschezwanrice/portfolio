import { Poppins, Rubik } from "next/font/google";
import Image from "next/image";

const poppins = Rubik({ subsets: ['latin'], weight:['400','500','600','700','800'] })
const page = () => {


  return (
    <div className={`w-full bg-white font-normal text-black ${poppins.className}`}>
      <div className="max-h-screen overflow-hidden">


      <Image
          src="/Covers/Akasa.png"
          height={4000}
          width={2656}
          alt=""
          className=""
        />
      </div>
      <div className="md:p-16 p-4">

      
      <div>
        <p className="text-xl">Ananya Singh</p>
        <p className="text-6xl font-bold my-4">Akaasa</p>
        <p>
        Project overview: An app concept to aid small businesses financial management
        </p>
      </div>
      <div className="grid  grid-cols-3 my-16 w-full items-baseline">
        <div>
          <p className="font-bold text-gray-500">ROLE</p>
          <p className="md:flex hidden">Group student project where I focused on:
Research, ideation, wireframing,
prototyping, animations</p>
<p className="md:hidden">Group student <br /> project</p>
        </div>

        <div className="flex flex-col justify-center ">
          <p className="font-bold text-gray-500">TOOLS</p>
          <p>Figma</p>
        </div>

        <div className="flex flex-col justify-end ">
          <p className="font-bold text-gray-500">DURATION</p>
          <p>12- 22 September 2023</p>
        </div>
      </div>
      <div className="md:grid grid-cols-10 flex flex-col items-center">
        <div className="col-span-6">
          <p className="text-4xl font-bold mb-8">The Challenge or Problem Statement</p>
          <p className="mb-6">
          Small business owners who work solo or in smaller groups, often do not
    have a dedicated team for handling their finances. 
          </p>
          <p>
          Thus, business owners are burdened by managing, tracking and
analysing their financial details, (along with the primary tasks of
manufacturing, packaging, shipping, social media advertising, etc)
causing missed opportunities for growth due to lack of proper tailored
financial insights.
          </p>
        </div>
      </div>


      <div className="md:mt-12 mt-12 flex flex-col gap-8">
        <p className="text-4xl font-bold">Goals</p>
        <p>
        Design an app with a dual focus: delivering optimised financial insights and streamlining the process of tracking finances,
inventory, products, and orders.
        </p>
        <p>
        The goal is to empower small businesses with specialised analytics while ensuring a cohesive and user-friendly platform that
maximises profit, enhances decision-making, and streamlines operational tasks.
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



      <div className="md:md:mt-24 mt-12 flex flex-col gap-8">
        <p className="text-4xl font-bold">Reaseach and Analysis</p>
        <p>
        In the first primary interviews, we talked to users who are small business owners and framed questions around what processes/
products their businesses involve and also got to know how they manage their finances, which tools/apps do they use and also if
they use financial insights to propel their business.
        </p>
        <p className="mb-12">
        The first card sorting exercise had keywords related to their business process, namely:

Ads, tax, platform charges, production time, supply of orders, start-up capital, employees, work-place, shipping/delivery, initial
material cost, unsolved orders/products, inventory maintenance cost, wastage of material, social media marketing, advertising
cost, internet, time spent on initial set-up, dealing with excessive material, cost of production.
        </p>
        The primary user is: young entrepreneurs
<br />
The key question being How much do you consider [card] in running the business?”
        <p>

        </p>
      </div>
      <div className="flex">
        <Image
          src="/Akasa_Assets/Untitled 1.png"
          height={2040}
          width={2040}
          alt=""
          className="col-span-4 w-[480px] mx-auto p-12"
        />
     
      </div>
      <div>
        <p className="font-bold mt-12 mb-4">Findings</p>
    
        <div className="mt-8">
          <p className="font-bold">
            1.  Users are unaware of domain specific termsp
          </p>
         <p>
            2. Users haven't actively had made efforts to expand their businessess
         </p>
         <p>
           3. Users do not have a PAN card, and don t involve taxes due to their smaller scale of business. 
         </p>
         <p>
            4.  Users don t have a proper way of deciding on the pricing of their products.
         </p>
         <p>
            5. ?sers don t have invoices for their salesp
         </p>
         <p>
            6.  Users haven't been able to estimate their ROI on a whole or on a specific group of items.
         </p>
        </div>

      <div className="my-12">
        <p>
        <strong >The second card sorting exercise had the following instructions: <br /></strong>

Group the cards how you want in categories and name them (on a blank card). <br />

Sort the cards in order of importance. <br />

Place the cards in chronological order of things you did while setting up and running your business. <br />

What cards are the most important to you, and which you don't consider. <br />

Which cards play a vital role in generating revenue for your business. <br />
        </p>
<div className="md:grid md:grid-cols-4 max-w-full items-center hidden">
        <Image src='/Akasa_Assets/Untitled 3.png' height={2040} width={2040} alt="" className="scale-[80%]"/>
        <Image src='/Akasa_Assets/Untitled 4.png' height={2040} width={2040} alt="" className="scale-[80%]"/>
        <Image src='/Akasa_Assets/Untitled 5.png' height={2040} width={2040} alt="" className="scale-[80%]"/>
        <Image src='/Akasa_Assets/Untitled 9.png' height={2040} width={2040} alt="" className="scale-[80%]"/>
</div>
<div className="md:hidden grid-rows-2 grid">
  <div className="grid grid-cols-2 row-span-1">
        <Image src='/Akasa_Assets/Untitled 3.png' height={2040} width={2040} alt="" className="scale-[80%] col-span-1"/>
        <Image src='/Akasa_Assets/Untitled 4.png' height={2040} width={2040} alt="" className="scale-[80%] col-span-1"/>
  </div>
  <div className="grid grid-cols-2 row-span-1">
        <Image src='/Akasa_Assets/Untitled 5.png' height={2040} width={2040} alt="" className="scale-[80%] col-span-1"/>
        <Image src='/Akasa_Assets/Untitled 9.png' height={2040} width={2040} alt="" className="scale-[80%]"/>
  </div>
</div>
      </div>
        <p className="font-bold">
          Findings:
        </p>
        <ul className="list-decimal pl-12 mt-2">
          <li>
          2/3 user(s) haven t actively thought about making a profit within the business, They only try to break even and heavily depend on
the high markup of products to do so.
          </li>
          <li>
          Only 2/3 user(s) have considered market trends and did background research before starting their business.
          </li>
          
          <li>
          Note Making and keeping a track of items mentally are the ways the user keeps track of their business expenses.
          </li>
          <li>
          3/3 user(s) run their business heavily depending on intuition and gut feelings instead of data driven insightsp
          </li>
          <li>
          Users give priority in the following order:
          <ul className="list-disc ml-6">
            <li>
                production
            </li>
            <li>
                marketing
            </li>
            <li>
                budgeting
            </li>
          </ul>
          </li>
        </ul>
      </div>

      <div className="md:mt-24 mt-12">
        <p className="font-bold text-4xl mb-8">User Persona</p>
        <p>
        Write the key tasks that your users can do by regarding your study. Ensure your user persona contains the key tasks that your
users can do by regarding your study, users priorities, Users' pain points
        </p>

        <div className="flex">
        <Image
          src="/Voyageur_Assets/Vicky.png"
          height={2048}
          width={2048}
          alt=""
          className="p-6 md:w-[60%] mx-auto mt-12"
        />
        </div>
      </div>

      <div className="mb-12 md:mt-24 mt-12">
        <p className="font-bold text-4xl">Final Actionable Insights</p>
        <ul className=" mt-8 gap-3 flex flex-col">
          <li>
          Card sorting activities prioritised the need of features that contribute to both unique financial insights and the streamlined
tracking of financial and inventory-related activities. This ensured that the app's information architecture aligned with users' need
for accessing specialised financial data while maintaining ease of use.
          </li>
          <li>
         <strong>Goal 1: Need for custom tailored financial insights to prevent relying on intuition for making decisions</strong> 
          </li>
          <li>
          <strong> Goal 2: Streamlining the note-taking process: for tracking/budgeting of both a) finances and expenses as well as b)
inventory related </strong>
          </li>
          <li>
          <strong > Goal 3: Integrating logging + tracking orders and products of the businesses into the financial system </strong>
          </li>
        </ul>
      </div>
      <div className="md:mt-24 mt-12     ">
        <p className="text-4xl font-bold">Solution</p>
        <p className="my-6">
        Design a simple, easy-to-navigate user interface for the finance app that seamlessly integrates special financial insights, robust
profit-maximizing features, and efficient inventory management tools. 
        </p>
        <p className="my-6">
        Prioritize user-friendly navigation and visually appealing elements to ensure small business owners can easily log, track, and
manage their finances. Propose creative solutions for enhancing the app's usability and ensuring a positive user experience, with
a focus on empowering users to make informed financial decisions.
        </p>
    

        <Image
          src="/Akasa_Assets/Solutions.png"
          height={2040}
          width={2040}
          alt=""
          className="col-span-4 scale-[80%] mx-auto md:p-12"
        />
      </div>

      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">User Journey</p>
        <p>Embarking on the app journey, users may find opportunities for enhanced simplicity in data input, easy-to-understand financial
insights, efficient tracking and logging of orders and inventory, and the prospect of seamlessly resuming their tasks in one place
for an enhanced and user-friendly experience. The user journey map aims to spotlight areas in the journey for positive
refinements and improved user satisfaction.</p>
        <Image
          src="/Akasa_Assets/User Journey.png"
          height={2040}
          width={2040}
          alt=""
          className="col-span-4  p-12"
        />
      </div>

      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">Information Architecture</p>
        <p>
        The key is to devise an information architecture that simplifies the user data structure, ensuring an intuitive journey through
insights, finances, order and product information.
        </p>
        <Image
          src="/Akasa_Assets/ia group.png"
          height={2040}
          width={2040}
          alt=""
          className="col-span-4 md:p-12 px-4 py-8"
        />
      </div>
     
      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">User Flow</p>
        <p>Envisioning the app's user flow to streamline task completion through improved findability, memorability, and usability:
</p>
        <Image
          src="/Akasa_Assets/userflow.png"
          height={2040}
          width={2040}
          alt=""
          className="col-span-4 md:p-12 my-8"
        />
      </div>


      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">Visual Design and Prototype</p>
        <p>
        The next plan of action includes colour palettes and typography that would help communicate the brand s identity and also give
the product an exciting feel.
        </p>
        <Image
        src="/Akasa_Assets/Style guide.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 mx-auto md:p-12 py-8"
      />
      <p className="py-4 font-bold">Splash Animations</p>
      
      <video id="video" loop muted autoPlay playsInline className="w-[360px] mx-auto">
        <source src="/Akasa_Assets/AAKASA.mov" type="video/mp4" className="m-4"/>
        Your browser does not support the video tag.
    </video>
     
      <p className="font-bold my-4">High Fidelity Design</p>
      <Image
        src="/Akasa_Assets/123.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 w-full"
      />
      <Image
        src="/Akasa_Assets/1.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain "
      />
      <Image
        src="/Akasa_Assets/2.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
     <Image
        src="/Akasa_Assets/3.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
       <Image
        src="/Akasa_Assets/4.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
      <Image
        src="/Akasa_Assets/5.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
     <Image
        src="/Akasa_Assets/6.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
       <Image
        src="/Akasa_Assets/7.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
      <Image
        src="/Akasa_Assets/8.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
     <Image
        src="/Akasa_Assets/9.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
      <Image
        src="/Akasa_Assets/10.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 h-screen object-contain"
      />
      </div>

      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-8">Prototype</p>
        <div>
        <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4zodedjShmN7ezif9BTBgi%2FAkaasa%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dz8qdUUXmW2vjYU6n-1" allowFullScreen  className="flex mx-auto max-w-full"></iframe>
</div>

      </div>

      <div className="md:mt-24 mt-12">
        <p className="text-4xl font-bold mb-6">Feedback</p>
        <p className="mb-6">
        In response to valuable feedback, efforts were dedicated to enhancing the colour scheme, particularly focusing on improving
contrast and accessibility. The initial palette, featuring shades of purple and black, underwent refinement to ensure a more
accessible and visually pleasing user experience. Adopting a thoughtfully chosen colour contrast not only addresses the feedback
but also aligns with best practices for inclusivity, promoting a more comfortable interaction with the app for all users. This
improvement underscores a commitment to user-centric design, continually refining elements to enhance usability and
aesthetics based on valuable input.

        </p>
        <Image
        src="/Akasa_Assets/feedback.png"
        height={2040}
        width={2040}
        alt=""
        className="col-span-4 px-12 md:scale-[80%]"
      />
      
      </div>


      <div className="md:mt-24 mt-12 mb-12">
        <p className="text-4xl font-bold mb-6">Challenges and Next Step</p>
        <p className="mb-6">During this case study, several challenges were encountered that contributed to the project's growth. Navigating the delicate
balance between incorporating useful financial insights while ensuring user-friendly design posed a notable challenge.
Additionally, addressing the diverse needs of the intended audience, especially those less adept to financial management, required
a thoughtful and inclusive approach.</p>
<p className="mb-6">Striking the right balance between simplicity and functionality in features like expense logging and budgeting, as well as tracking
inventory and orders, demanded a user-centric approach. Overcoming these challenges became integral to refining the case
study, fostering a more comprehensive solution accessible to users of all levels of proficiency.</p>
<div className="grid grid-cols-2">
    <div className="col-span-1">
        <strong className="mb-2">1. User Testing</strong>
        <p>Extensive user testing will be conducted and used to
iterate on the application prototype.</p>
    </div>
    <div className="col-span-1">
        <strong className="mb-2">2. Integration of new features </strong>
        <p>On testing, the next step will be to integrate new features
and updates into the prototype.</p>
    </div>
</div>
      </div>
      </div>
    </div>
  );
};

export default page;
