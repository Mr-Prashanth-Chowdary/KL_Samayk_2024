import { Spotlight } from "./Spotlight";
import { FlipWords } from "../ui/flip-words";
import img from "../../assets/samyaklogo.png";
// import { useNavigate } from "react-router-dom";
import './Atmanirbharbharat.css'

export function SpotlightPreview() {
    const words =[
    "dazzling dances",
    "mesmerizing music",
    "electrifying DJ nights",
    "captivating plays",
    "thrilling sports"
  ];
  // const navigate = useNavigate()
  // const handleRedirect = () => {
  //   navigate("/about"); // This will redirect to the About page
  // };
  

  return (
    <>
    <div className="min-h-screen md:h-[40rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-16 md:pt-0">
        <div className="flex justify-center items-center">
          <img
            src={img}
            alt="This is an image"
            className="max-w-full h-auto rounded-md shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          SAMYAK'24
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">A National Level Techno Management Fest </p>
        <p className="abb font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">atmanirbhar bharat</p>
      
        <h1 className="mt-5 text-2xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400bg-opacity-50">
          OCTOBER
        </h1>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2  h-[1px] w-full" />
        <p className="text-lg font-bold text-neutral-300 max-w-lg text-center mx-auto">4<sup>th</sup> & 5<sup>th</sup></p>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          KL University's 2024 techno-management fest features diverse events and workshops, fostering collaboration, enhancing skills, and celebrating a 12-year legacy of student camaraderie.
        </p>

        {/* button */}
        <div className="flex justify-center mt-5">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-14 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Invitation
        </span>
        </button>
        </div>
        {/* button ends */}

      </div>
    </div>
    {/* Fliping words */}
   
    <div className=" dark:bg-neutral-950 ">
    <div className="md:text-4xl m-h-10 mx-auto font-normal text-neutral-600 dark:text-neutral-400 w-10/12">
        A festival of
        <FlipWords words={words} /> <br />
        where excitement and celebration come together to create unforgettable memories.
      </div>
    </div>
    </>
    
  );
}
