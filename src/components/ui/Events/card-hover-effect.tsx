import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import './event.css';
import { useNavigate } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    tags: string[];
    imagePath: string; // Include image path in item structure
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cart, setCart] = useState<{ item: typeof items[number]; quantity: number }[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isBillingOpen, setBillingOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const toggleCart = (item: typeof items[number]) => {
    const token = localStorage.getItem('token');

    if (!token) {
      setShowLoginPopup(true);
      return;
    }

    setCart((prev) => {
      const existingItem = prev.find(cartItem => cartItem.item.title === item.title);
      if (existingItem) {
        return existingItem.quantity === 1
          ? prev.filter(cartItem => cartItem.item.title !== item.title)
          : prev.map(cartItem =>
              cartItem.item.title === item.title
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            );
      } else {
        return [...prev, { item, quantity: 1 }];
      }
    });
  };

  const registrationFee = 300; // Total price is fixed at 300

  const uniqueTags = Array.from(new Set(items.flatMap(item => item.tags)));

  const filteredItems = selectedTag 
    ? items.filter(item => item.tags.includes(selectedTag))
    : items;

  const confirmPayment = async () => {
    const token = localStorage.getItem('token');
    const titles = cart.map(cartItem => cartItem.item.title);

    if (!token) {
      setShowLoginPopup(true);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/api/auth/update-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ eventNames: titles }),
      });

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      setAlertMessage('Data sent successfully! Proceeding for payment.');
      setCart([]);
      setBillingOpen(false);

      // Redirect to pay page after 2 seconds
        setTimeout(() => {
        navigate('/pay');
      }, 2000);
    } catch (error) {
      console.error(error);
      setAlertMessage('Error sending data to the backend');
    }
  };

  const navigate = useNavigate();

  return (
    <div className={cn("py-10", className)}>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">Filter by Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded ${
                selectedTag === tag ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <div
            key={item.title}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card imagePath={item.imagePath}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <button
                className={`mt-4 px-4 py-2 rounded ${
                  cart.some(cartItem => cartItem.item.title === item.title)
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
                onClick={() => toggleCart(item)}
              >
                {cart.some(cartItem => cartItem.item.title === item.title) ? "UnRegister" : "Register"}
              </button>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={confirmPayment}
        >
          Checkout
        </button>
      </div>

      {/* Login and Billing Popups */}
      <AnimatePresence>
        {showLoginPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg z-50">
              <h2 className="text-lg font-bold">Please Log In</h2>
              <p className="mt-4">You need to be logged in to add items to the cart.</p>
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => setShowLoginPopup(false)}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    navigate('/login');
                    setShowLoginPopup(false);
                  }}
                >
                  Go to Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBillingOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg z-50">
              <h2 className="text-lg font-bold">Billing Details</h2>
              <div className="mt-4">
                {cart.length > 0 ? (
                  <>
                    <h3 className="font-semibold">Selected Items:</h3>
                    <ul>
                      {cart.map(cartItem => (
                        <li key={cartItem.item.title}>
                          {cartItem.item.title}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-4 font-semibold">Registration Fee: ₹{registrationFee.toFixed(2)}</h3>
                  </>
                ) : (
                  <p>No items selected. Proceeding with the registration fee.</p>
                )}
              </div>
              <h3 className="mt-4 font-semibold">Total: ₹{registrationFee.toFixed(2)}</h3>
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => setBillingOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 ml-2 text-white px-4 py-2 rounded"
                  onClick={confirmPayment}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
      {alertMessage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-black p-6 rounded-lg shadow-lg z-50">
            <h2 className="text-lg font-bold text-white">{alertMessage}</h2>
            {/* <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setAlertMessage(null)}
            >
              Close
            </button> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
};

// Updated Card component to accept imagePath
export const Card = ({
  className,
  imagePath,
  children,
}: {
  className?: string;
  imagePath: string; // New prop for image path
  children: React.ReactNode;
}) => {
  return (
    <div
  className={cn(
    "rounded-2xl h-full w-full overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
    className
  )}
  style={{
    backgroundImage: `url(${imagePath})`, // Set the background image
    backgroundSize: 'cover', // Cover the whole card
    backgroundPosition: 'center', // Center the image
  }}
>
  {/* Overlay for opacity */}
  <div
    className="absolute inset-0 bg-black opacity-70" // Adjust opacity here
    style={{ zIndex: 10 }} // Ensure the overlay is above the background
  ></div>
  
  <div className="relative z-20 p-4">
    {children}
  </div>
</div>

  );
};

// CardTitle and CardDescription remain unchanged

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-zinc-400 mt-2", className)}>
      {children}
    </p>
  );
};
