import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export function OverheatManagement() {
  const temp = 72;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Flame className="w-16 h-16 text-orange-500" />
        </motion.div>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-orange-500">{temp}°C</p>
        <p className="text-sm text-gray-400">Core Temperature</p>
      </div>
      <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
          initial={{ width: 0 }}
          animate={{ width: `${temp}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      <button className="w-full py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors">
        Activate Cooling
      </button>
    </div>
  );
}
