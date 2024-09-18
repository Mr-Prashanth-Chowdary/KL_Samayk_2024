"use client";
import { calsans } from "../../fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";
import BlurIn from "../../magicui/blur-in";
import { FloatingNavDemo } from "../FloatingNavDemo";
import { Footer } from "../Footer/Footer";


export function About() {
  
  return (
    <div className="dark:bg-neutral-950 overflow-hidden">
      <FloatingNavDemo/>
        <BlurIn
      word="About"
      className="text-4xl font-bold text-black dark:text-white"
    />
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(calsans.className, " text-white text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm text-white prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    <Footer></Footer>
    </div>
  );
}

const dummyContent = [
  {
    title: "Summary of Samyak",
    description: (
      <>
        <p>
        SAMYAK is a national-level techno-management fest organized by the students of KL University.
        It is a two- day festival filled with activities, events, workshops, and student performances that drive the students to experience the joy in being part of a synergy.
        </p>
        <p>
        The colours popping throughout, the theme-relevant artworks designed from scratch by the student teams, the elegance in student groups coming together after all the effort they put in until the day of the fest cannot be looked past.
        </p>
        <p>
        A 12 year legacy, still burning bright and being passed down to the coming batches is a standing example of the camaraderie the students share even between the passing batches. It shows a great promise in terms of offering a unique experience to students through a plethora of events that strengthen their technical and all-round abilities.
        </p>
      </>
    ),
    badge: "Samyak 2024",
    image: "https://i.ibb.co/WtBsPvL/Screenshot-2024-09-17-at-6-04-45-PM.png",
    
  },
  {
    title: "Summary of SVAPASYA",
    description: (
      <>
        <p>
        A skillful path towards sustainable development is one that recognizes the pivotal role skills play in shaping our future.
        Skill is the bedrock upon which we construct our dreams and aspirations. It serves as the foundation for both personal growth and societal advancement.
        By developing and honing skills, individuals are empowered to unlock their full potential, make meaningful contributions to their communities, and navigate the evolving demands of our global landscape.
        The value of skill in life extends beyond mere achievement; it influences our ability to innovate, adapt, and lead lives that are both fulfilling and purposeful. As we strive for personal success and societal progress, the cultivation of skills remains a fundamental component in achieving our goals and aspirations.
        </p>
        <p>
        The interplay between skillfulness and sustainable development is both profound and intricate. 
        Skilled individuals and professionals are key drivers of progress toward a more sustainable and environmentally responsible future. Their expertise is crucial in addressing the myriad challenges associated with achieving sustainability goals. Whether through advancing green technologies, promoting efficient resource management, or fostering inclusive economic growth, skilled practitioners play a central role in implementing solutions that contribute to long-term environmental and societal well-being. 
        As we confront the complex issues facing our world, the development of skills not only enhances individual capabilities but also strengthens collective efforts towards a more sustainable and resilient future.
        </p>
      </>
    ),
    badge: "svapasyā स्वपस्या",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Discover KL University",
    description: (
      <>
      <p>KL University stands as a sanctuary of knowledge and an exhilarating hub of learning, esteemed as one of India's most prestigious academic institutions. Established as a Deemed to be University in 2009, it has earned acclaim for its outstanding success in transforming students into prominent leaders and industry experts. The university's grand vision is manifested through its exceptional operations, creating an environment where academic excellence is not only pursued but celebrated. This vibrant institution fosters a culture of intellectual curiosity and innovation, setting a high standard for educational achievement.</p>
      <p>Beyond academics, KL University offers a dynamic space that nurtures students' passions and supports their growth in various fields of interest. With a wealth of opportunities at their disposal, students are encouraged to broaden their horizons and engage in activities that align with their personal and professional aspirations. This holistic approach ensures that graduates are well-equipped to address the complexities of the modern world, making meaningful contributions to society and driving progress in their respective fields. KL University’s commitment to fostering a well-rounded educational experience underscores its dedication to shaping the leaders of tomorrow.</p>
      </>
    ),
    badge: "KL University",
    image:
      "https://images.shiksha.com/mediadata/images/1618563674phpS4Gs9p.jpeg",
  },
];
