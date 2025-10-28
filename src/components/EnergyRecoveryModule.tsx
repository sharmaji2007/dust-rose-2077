import { motion } from "framer-motion";
import { Battery } from "lucide-react";

export function EnergyRecoveryModule() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Battery className="w-16 h-16 text-green-400" />
        </motion.div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Energy Level</span>
          <span className="text-green-400">87%</span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: '87%' }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <div className="text-center text-sm text-gray-400">
        Recovery Rate: +5% per minute
      </div>
    </div>
  );
}
