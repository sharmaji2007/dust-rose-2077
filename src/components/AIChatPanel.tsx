import { useState } from "react";
import { Send } from "lucide-react";

export function AIChatPanel() {
  const [messages] = useState([
    { role: 'ai', text: 'Tactical AI online. Ready for commands.' },
    { role: 'user', text: 'Status report' },
    { role: 'ai', text: 'All systems operational. Enemy detected at 300m.' },
  ]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg ${
              msg.role === 'ai'
                ? 'bg-cyan-500/20 text-cyan-400 ml-0 mr-8'
                : 'bg-gray-700/50 text-gray-300 ml-8 mr-0'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter command..."
          className="flex-1 px-4 py-2 bg-black/30 border border-cyan-400/30 rounded-lg text-cyan-400 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
        />
        <button className="px-4 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 rounded-lg transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
