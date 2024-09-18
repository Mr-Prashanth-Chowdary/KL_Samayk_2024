// import React, { useState } from 'react';
import { useState } from 'react';
// import { FloatingNavDemo } from './FloatingNavDemo';
// import { SpotlightPreview } from './SpotlightPreview';
// import { TimelineDemo } from './TimelineDemo';
// import { LayoutGridDemo } from './LayoutGridDemo';
// import { AppleCardsCarouselDemo } from './BottomCards/AppleCardsCarouselDemo';
// import { Footer } from './Footer/Footer';


const Ct = () => {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  const handleButtonClick = () => {
    setIsCurtainOpen(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-auto">
      {/* Curtains with PNG background */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-black bg-no-repeat bg-cover bg-center transition-transform duration-1000 ease-in-out ${
          isCurtainOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/27/a9/7a/27a97a6b7a4a262ab346c66fe426256a.jpg')`, // Replace with the actual path to your PNG image
        }}
      ></div>
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-black bg-no-repeat bg-cover bg-center transition-transform duration-1000 ease-in-out ${
          isCurtainOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/27/a9/7a/27a97a6b7a4a262ab346c66fe426256a.jpg')`, // Replace with the actual path to your PNG image
        }}
      ></div>

      {/* Button: Only visible before the curtain opens */}
      {!isCurtainOpen && (
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold mb-6"></h1>
          <button
            onClick={handleButtonClick}
            className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Open Curtain
          </button>
        </div>
      )}

      {/* Content behind the curtain: Only visible when the curtain opens */}
      {isCurtainOpen && (
        <div className="w-full overflow-x-hidden flex flex-col">
        {/* set content */}
        </div>
      )}
    </div>
  );
};

export default Ct;
