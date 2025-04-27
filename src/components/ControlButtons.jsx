import { motion } from "framer-motion";

export default function ControlButtons({ isRunning, onStart, onStop, onReset }) {
  return (
    <div className="flex space-x-4">
      {!isRunning ? (
        <motion.button
          onClick={onStart}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Start
        </motion.button>
      ) : (
        <motion.button
          onClick={onStop}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Stop
        </motion.button>
      )}
      <motion.button
        onClick={onReset}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Reset
      </motion.button>
    </div>
  );
}
