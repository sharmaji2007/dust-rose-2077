import { motion } from "motion/react";

export function NeuralCognitionCenter() {
  return (
    <div className="space-y-4">
      {['Pattern Recognition', 'Decision Matrix', 'Threat Analysis', 'Strategic Planning'].map((item, i) => (
        <div key={i} className="p-4 bg-black/30 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-cyan-400">{item}</span>
            <span className="text-green-400">{85 + Math.floor(Math.random() * 15)}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-green-400"
              initial={{ width: 0 }}
              animate={{ width: `${85 + Math.random() * 15}%` }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
