"use client"

import { useState, useEffect } from "react";
import { IoIosRocket } from "react-icons/io";

interface CountdownProps {
  targetDate: string; // Data no formato "Jan 5, 2030 15:37:25"
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const countDownDate = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      return "EXPIRED";
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup no desmontagem
  }, [targetDate]);

  return (
    <div className="flex flex-col mt-12 items-center space-y-4 p-6 bg-black rounded-xl shadow-lg border-4 border-green-600 max-w-md mx-auto">
        <h2 className="text-white font-bold flex items-center">LANÇAMENTO: 05/03 <IoIosRocket className="ms-2"/></h2>
        <p className="text-white text-2xl font-mono bg-green-600 px-6 py-3 rounded-full shadow-md border-2 border-green-400 tracking-wide transition-all duration-300">
            {typeof timeLeft === "string"
            ? timeLeft
            : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </p>
    </div>
  );
};

export default Countdown;
