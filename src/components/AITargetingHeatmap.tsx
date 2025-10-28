import { motion } from "motion/react";

export function AITargetingHeatmap() {
  return (
    <div className="relative h-96 bg-black/30 rounded-lg overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-2">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded"
            style={{
              backgroundColor: `rgba(255, 0, 127, ${Math.random() * 0.8})`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-red-500 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
