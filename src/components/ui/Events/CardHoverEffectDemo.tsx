import { Footer } from "../Footer/Footer";
import { HoverEffect } from "./card-hover-effect";
 
export function CardHoverEffectDemo() {
  return (
    <>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    <Footer></Footer>
    </>
  );
}
export const projects = [
  {
    title: "Thug Of War",
    description: "A high-stakes competition involving cunning tactics and physical strength for dominance.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/thug-of-war-image.jpg", // Update with the actual image path
  },
  {
    title: "IPL AUCTION",
    description: "Test your cricket knowledge and strategically bid on players using accumulated points.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/ipl-auction-image.jpg", // Update with the actual image path
  },
  {
    title: "Anime",
    description: "Test your knowledge of anime characters in this fun-filled competition.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/anime-image.jpg", // Update with the actual image path
  },
  {
    title: "Hand Westling",
    description: "Join a hand-to-hand showdown in an exciting competition of strength and laughter.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/hand-wrestling-image.jpg", // Update with the actual image path
  },
  {
    title: "Reel contest",
    description: "Create and share engaging short video clips in a fun social media competition.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/reel-contest-image.jpg", // Update with the actual image path
  },
  {
    title: "Debate/Public Speaking Competition",
    description: "Showcase your ability to articulate ideas and persuade in various topics.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/debate-image.jpg", // Update with the actual image path
  },
  {
    title: "University Unplugged",
    description: "Share your voice at an Open Mic night filled with creativity and expression.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/university-unplugged-image.jpg", // Update with the actual image path
  },
  {
    title: "BGMI",
    description: "Participate in a thrilling BGMI contest showcasing your gaming skills and strategy.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/bgmi-image.jpg", // Update with the actual image path
  },
  {
    title: "#just shoot mee (outsider)",
    description: "Capture striking images illustrating contrasting elements and showcase your photography skills.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/just-shoot-me-image.jpg", // Update with the actual image path
  },
  {
    title: "CLAY POTERY",
    description: "Mold clay into unique pottery pieces in an engaging and hands-on challenge.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/clay-pottery-image.jpg", // Update with the actual image path
  },
  {
    title: "Blind Food Taste",
    description: "Explore a world of delicious surprises in a taste-testing event without sight.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/blind-food-taste-image.jpg", // Update with the actual image path
  },
  {
    title: "Ping Pong Ball",
    description: "Experience the fast-paced game of table tennis with our exciting ping pong competition.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/ping-pong-image.jpg", // Update with the actual image path
  },
  {
    title: "Freefire",
    description: "Survive and strategize in adrenaline-pumping matches in this popular battle royale game.",
    tags: ["Non-Tech", "Competition"],
    imagePath: "path/to/freefire-image.jpg", // Update with the actual image path
  },
  {
    title: "Entrepreunership With Drones Ideathon",
    description: "Pitch ideas for drone projects focused on commercial or service-oriented applications.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/drones-ideathon-image.jpg", // Update with the actual image path
  },
  {
    title: "SnapShot Contest",
    description: "Create filters and capture pictures to win a special gift for the best filter.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/snapshot-contest-image.jpg", // Update with the actual image path
  },
  {
    title: "TechnoVidya",
    description: "Project exhibition showcasing engineering projects, including robotics, AI, and IoT devices.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/technovidya-image.jpg", // Update with the actual image path
  },
  {
    title: "YantraYuddha",
    description: "Robotics competition featuring categories like RoboRace, RoboWar, and AI Challenge.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/yantrayuddha-image.jpg", // Update with the actual image path
  },
  {
    title: "SanskritiSoft",
    description: "Create software, games, or applications that highlight diverse cultures in this coding fest.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/sanskritissoft-image.jpg", // Update with the actual image path
  },
  {
    title: "PrastutiParva",
    description: "Present your research or innovative ideas in this technical paper presentation event.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/prastutiparva-image.jpg", // Update with the actual image path
  },
  {
    title: "AvishkarAnveshan",
    description: "Present innovative solutions to real-world engineering problems in this student competition.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/avishkaranveshan-image.jpg", // Update with the actual image path
  },
  {
    title: "CodeSankalp",
    description: "A 24-hour coding hackathon where participants solve problems or build applications.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/codesankalp-image.jpg", // Update with the actual image path
  },
  {
    title: "VigyanVarta",
    description: "A scientific forum featuring talks on emerging technologies and science topics.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/vigyanvarta-image.jpg", // Update with the actual image path
  },
  {
    title: "AdhigamQuiz",
    description: "Test your knowledge on engineering disciplines in this tech-themed quiz competition.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/adhigamquiz-image.jpg", // Update with the actual image path
  },
  {
    title: "AakritiArch",
    description: "Civil and Architecture students present their innovative architectural designs in this competition.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/aakritiarch-image.jpg", // Update with the actual image path
  },
  {
    title: "GreenGyan",
    description: "An event focused on sustainable engineering practices and green technologies.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/greengyan-image.jpg", // Update with the actual image path
  },
  {
    title: "VyavsaayVimarsh",
    description: "Present your tech business ideas or startup pitches in this entrepreneurship event.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/vyavsaayvimarsh-image.jpg", // Update with the actual image path
  },
  {
    title: "Unplugging Electronics",
    description: "Interactive robotics and electronics challenges, including logic puzzles and circuit building.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/unplugging-electronics-image.jpg", // Update with the actual image path
  },
  {
    title: "Robotics Trivia Extravaganza",
    description: "A fun robotics quiz event with multiple rounds of riddles, memory games, and robot design.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/robotics-trivia-image.jpg", // Update with the actual image path
  },
  {
    title: "Circuit Quest",
    description: "Solve problem statements, identify components, and design circuits to win in this contest.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/circuit-quest-image.jpg", // Update with the actual image path
  },
  {
    title: "Semi-custom on Innovus",
    description: "Workshop on full-custom chip design, from concept to implementation, with hands-on simulations.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/innovus-image.jpg", // Update with the actual image path
  },
  {
    title: "Intel Club Workshop: Deploy with GitHub & Netlify",
    description: "Workshop on full-custom chip design, from concept to implementation, with hands-on simulations.",
    tags: ["Tech", "Competition"],
    imagePath: "path/to/innovus-image.jpg", // Update with the actual image path
  },{
    title: "Intel Club Workshop: Deploy with GitHub & Netlify",
    description: "Learn to deploy projects using GitHub and Netlify in this hands-on workshop. Perfect for beginners and those wanting to enhance deployment skills.",
    tags: ["Workshop"],
    imagePath: "path/to/intel-club-workshop-image.jpg", // Update with the actual image path
  }  
];
