import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible] = useState(true); // Always set visible to true to keep the nav displayed

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/Register"); // This will redirect to the Register page
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Set the initial y to 0 so the nav is always in position
        }}
        animate={{
          y: 0, // Keep the y at 0 to ensure it's always visible
          opacity: visible ? 1 : 0, // Visible is always true
        }}
        transition={{
          duration: 0.2,
        }}
        className={`flex max-w-fit fixed top-1 inset-x-0 mx-auto border border-transparent rounded-full bg-black shadow-md z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 ${className}`}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link} // Use 'to' instead of 'href' for react-router-dom's Link
            className="relative text-neutral-400 hover:text-neutral-300 items-center flex space-x-1"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button
          onClick={handleRedirect}
          className="border text-sm font-medium relative border-neutral-300 text-white px-4 py-2 rounded-full"
        >
          <span>Login/Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
