import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

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
  const [token, setToken] = useState<string | null>(null); // State to hold the token

  const navigate = useNavigate();

  // Function to check if token is present in localStorage
  const checkToken = () => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); // Set the token state (null if not present)
  };

  useEffect(() => {
    checkToken(); // Check the token when the component mounts
  }, []);

  const handleRedirect = () => {
    navigate("/Register"); // Redirect to Register/Login
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Keep the nav in position
        }}
        animate={{
          y: 0, // Keep it visible
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`flex max-w-fit fixed top-1 inset-x-0 mx-auto border border-transparent rounded-full bg-black shadow-md z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 ${className}`}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className="relative text-neutral-400 hover:text-neutral-300 items-center flex space-x-1"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}

        {/* Conditionally render Login/Register or Profile */}
        {token ? (
          <Link
            to="/Profile" // Assuming "/Profile" is your profile page
            className="border text-sm font-medium relative border-neutral-300 text-white px-4 py-2 rounded-full"
          >
            <span>Profile</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Link>
        ) : (
          <button
            onClick={handleRedirect}
            className="border text-sm font-medium relative border-neutral-300 text-white px-4 py-2 rounded-full"
          >
            <span>Login/Register</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
