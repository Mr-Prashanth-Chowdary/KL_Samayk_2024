"use client";
import GradualSpacing from "../magicui/gradual-spacing";
import TextReveal from "../magicui/text-reveal";
import { LayoutGrid } from "../ui/layout-grid";


export function LayoutGridDemo() {
  return (
    <>
    <div className="h-screen py-20 w-full dark:bg-neutral-950">
    <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] sm: text-md"
      text="Collection of Magic Moments"/>
      <LayoutGrid cards={cards} />
      </div>
      <div className="z-10 flex items-center justify-center bg-white dark:bg-neutral-950">
      <TextReveal text="Engaging Events that adapt to your interests. Curated Experiences that immerse you completely. And a new all-in-one celebration to inspire, connect, and thrive." />
       </div>
      
    </>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.ibb.co/YZg3Rc1/0T2A8329.jpg",
//       <img src="https://i.ibb.co/y8dJgxJ/0T2A7768.jpg" alt="0T2A7768" border="0">
// <img src="https://i.ibb.co/YZg3Rc1/0T2A8329.jpg" alt="0T2A8329" border="0">
// <img src="https://i.ibb.co/3CFS44G/DSC01238.jpg" alt="DSC01238" border="0">
// <img src="https://i.ibb.co/DGctkvp/DSC01674.jpg" alt="DSC01674" border="0">
// <img src="https://i.ibb.co/RSmDX8L/DSC02177.jpg" alt="DSC02177" border="0"></img>
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://i.ibb.co/RSmDX8L/DSC02177.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
