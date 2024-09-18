"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../../lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 2 }: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const combinedVariants = variant || defaultVariants;

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Adjust this value based on when you want the animation to trigger
  });

  return (
    <motion.h1
      ref={ref} // Attach the observer to the element
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate only when in view
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
