"use client";
import { Carousel, Card } from "./apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20  dark:bg-neutral-950">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know our events.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className=" dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Technical Events ",
    title: "The Battle of the Brains Into Competition",
    date : "1234",
    src: "https://i.pinimg.com/564x/1f/b8/bb/1fb8bb7d2df9400bc40a2e3ae08f17db.jpg",
    content: <DummyContent />,
  },
  {
    category: "Non Technical Events",
    title: "Enhance your Creativity.",
    src: "https://i.pinimg.com/564x/18/58/44/18584477027561a661870200de9fa908.jpg",
    content: <DummyContent />,
  },
  {
    category: "Literary Events",
    title: "Stories worth sharing. Stories worth hearing.",
    src: "https://i.pinimg.com/564x/d0/5c/1c/d05c1c871974824f3d3c8f8fa5cc370b.jpg",
    content: <DummyContent />,
  },

  {
    category: "Spot Events",
    title: "Don't miss the action. It's going to be epic!",
    src: "https://i.pinimg.com/736x/60/11/71/6011719a8a929811ad1f717460d2c1d3.jpg",
    date : "1234",
    content: <DummyContent />,
  },
  {
    category: "Art Exhibitions",
    title: "Photography just got better.",
    src: "https://i.pinimg.com/564x/a1/40/dd/a140dd885494b80fd64e51f76dd44dee.jpg",
    content: <DummyContent />,
  },
  {
    category: "Motor Shows",
    title: "igniting engagement take place",
    src: "https://i.pinimg.com/564x/4c/fb/23/4cfb233f1e62e8766f68e21a6e7ed4ea.jpg",
    content: <DummyContent />,
  },
];
