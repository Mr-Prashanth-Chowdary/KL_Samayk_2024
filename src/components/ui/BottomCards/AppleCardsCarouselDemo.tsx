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


const Tevents = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61zWg1xEPIduLMc_yoD93ev62iBirYF_E4m7s65NCLk9AIDHsWaxQWDI86AGm18a6ho4&usqp=CAU",
    title: "Robotics Trivia Extravaganz",
    content:
      'The "Robotics Trivia Extravaganza" includes team-based challenges like a Riddle Race, Memory Game, and "Fact or Fiction." Teams then design robots in "Pick Your Droid," followed by an individual quiz round, ending with winners and a closing ceremony.',
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUeJoLrjufaiEyYrX21nnediky739S9qDxA&s",
    title: "Entrepreunership With Drones Ideatho",
    content:
      'Join our Ideathon, where participants will pitch innovative ideas for commercial or service-oriented drone projects. Showcase your creativity and entrepreneurial spirit while exploring the exciting potential of drone technology in various industries!'
  },
  {
    img: "https://i.pinimg.com/564x/86/6d/74/866d745cb5912d0ef3355aaf0703c6b3.jpg",
    title: " AdhigamQuiz ",
    content:
    "Participate in our tech-themed quiz competition, designed to test your knowledge across various engineering disciplines. Challenge yourself and compete with peers to demonstrate your expertise in technology and engineering!"
  },
  {
    img: "https://www.senecacollege.ca/content/dam/projects/seneca/Program-2018/eet_top.jpg",
    title: "unplugging electronics ",
    content:
      'The "Unplugging Electronics" event is a dynamic day of interactive challenges focused on robotics and electronics, including logic puzzles, circuit building, and rapid-fire quizzes.',
  },
  {
    img: "https://i.pinimg.com/564x/1a/a2/d5/1aa2d5dcf28fed0410229c61c3bc4e79.jpg",
    title: "CodeSankalp",
    content:
      "Join a 24-hour coding hackathon where participants tackle challenging problems or develop innovative applications. Showcase your coding skills, collaborate with others, and push your creativity to the limit in this intense, fun-filled event!",
  },
];

const TechnicalEvents = () => {
  return (
    <>
      {Tevents.map((event, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {event.title}
              </span>{" "}
              {event.content}
            </p>
            <img
              src={event.img}
              alt={`Image for ${event.title}`}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md py-2"
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
    content: <TechnicalEvents/>,
  },
  {
    category: "Non Technical Events",
    title: "Enhance your Creativity.",
    src: "https://i.pinimg.com/564x/18/58/44/18584477027561a661870200de9fa908.jpg",
    content: <TechnicalEvents />,
  },
  {
    category: "Literary Events",
    title: "Stories worth sharing. Stories worth hearing.",
    src: "https://i.pinimg.com/564x/d0/5c/1c/d05c1c871974824f3d3c8f8fa5cc370b.jpg",
    content: <TechnicalEvents />,
  },

  {
    category: "Spot Events",
    title: "Don't miss the action. It's going to be epic!",
    src: "https://i.pinimg.com/736x/60/11/71/6011719a8a929811ad1f717460d2c1d3.jpg",
    date : "1234",
    content: <TechnicalEvents />,
  },
  {
    category: "Art Exhibitions",
    title: "Photography just got better.",
    src: "https://i.pinimg.com/564x/a1/40/dd/a140dd885494b80fd64e51f76dd44dee.jpg",
    content: <TechnicalEvents />,
  },
  {
    category: "Motor Shows",
    title: "igniting engagement take place",
    src: "https://i.pinimg.com/564x/4c/fb/23/4cfb233f1e62e8766f68e21a6e7ed4ea.jpg",
    content: <TechnicalEvents />,
  },
];
