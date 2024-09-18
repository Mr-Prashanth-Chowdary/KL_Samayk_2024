// import React, { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { CardSpotlight } from './card-spotlight';

// Define the type for the time left state
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  // Set your target date here
  const targetDate = '2024-09-18T09:26:00';

  // Initialize the state with the time left calculated from the target date
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    // Update the time left every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Function to calculate the time left until the target date
  function calculateTimeLeft(targetDate: string): TimeLeft {
    const now = new Date();
    const difference = new Date(targetDate).getTime() - now.getTime();
    
    // Default to 0 if the target date has passed
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  if(timeLeft.days == 0 && timeLeft.hours == 0 && timeLeft.minutes == 0 && timeLeft.seconds == 0){
    return (
      <>
      <p className="md:text-2xl py-10 text-center text-neutral-300">Celbratoin started 🎉</p>
      </>
    )
  }
  return (
    <>
    <div className="py-10">
    <p className='text-center md:text-2xl text-white pt-10'>Celebration starts in</p>
    <div className="flex justify-center space-x-1">
      <CardSpotlight className="flex items-center justify-center h-20 w-20">
        <div className='flex-col'>
        <p className="relative z-2 text-white text-center">{timeLeft.days}</p>
        <p className="text-white">Days</p>
        </div>
        
      </CardSpotlight>
      <CardSpotlight className="flex items-center justify-center h-20 w-20">
      <div className='flex-col'>
        <p className="relative z-2 text-white text-center">{timeLeft.hours}</p>
        <p className="text-white">Hrs</p>
        </div>
      </CardSpotlight>
      <CardSpotlight className="flex items-center justify-center h-20 w-20">
      <div className='flex-col'>
        <p className="relative z-2 text-white text-center">{timeLeft.minutes}</p>
        <p className="text-white">Mins</p>
        </div>
      </CardSpotlight>
      <CardSpotlight className="flex items-center justify-center h-20 w-20">
      <div className='flex-col'>
        <p className="relative z-2 text-white text-center">{timeLeft.seconds}</p>
        <p className="text-white">Sec</p>
        </div>
      </CardSpotlight>
    </div>
    </div>
    </>
  );
}
