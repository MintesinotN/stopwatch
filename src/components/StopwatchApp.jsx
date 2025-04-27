import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import TimeDisplay from "./TimeDisplay";

export default function StopwatchApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center w-full max-w-md">
        <motion.h1
          className="text-4xl font-extrabold mb-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ⏱️ Stopwatch
        </motion.h1>
        <TimeDisplay time={time} />
      </div>
    </div>
  );
}
