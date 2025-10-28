import { motion } from "motion/react";

export function HolographicRobotDisplay() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        className="relative w-48 h-48"
        animate={{ rotateY: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-30" />
        <div className="absolute inset-4 rounded-full border-2 border-cyan-400 opacity-50" />
        <div className="absolute inset-8 rounded-full border border-cyan-400 opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">🤖</div>
        </div>
      </motion.div>
      <div className="mt-4 text-center">
        <p className="text-cyan-400 font-bold">OPERATIONAL</p>
        <p className="text-sm text-gray-400">All Systems Online</p>
      </div>
    </div>
  );
}
