import { motion } from "motion/react";

export function TacticalEnvironmentMap() {
  return (
    <div className="relative h-64 bg-black/30 rounded-lg overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="border border-green-400/20" />
        ))}
      </div>
      <motion.div
        className="absolute w-4 h-4 bg-cyan-400 rounded-full"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-red-500 rounded-full"
          style={{
            left: `${30 + i * 20}%`,
            top: `${40 + i * 10}%`,
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}
