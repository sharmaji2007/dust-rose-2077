import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function ShieldProtocol() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Shield className="w-32 h-32 text-cyan-400" />
        <motion.div
          className="absolute inset-0 border-4 border-cyan-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      <div className="text-center">
        <p className="text-2xl font-bold text-cyan-400">SHIELD ACTIVE</p>
        <p className="text-gray-400">Defense Level: Maximum</p>
      </div>
    </div>
  );
}
