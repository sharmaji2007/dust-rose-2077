export function QuantumCommandLog() {
  const logs = [
    { time: '14:32:15', message: 'System initialized successfully', type: 'success' },
    { time: '14:32:18', message: 'Neural network calibrated', type: 'info' },
    { time: '14:32:22', message: 'Target acquired at sector 7', type: 'warning' },
    { time: '14:32:25', message: 'Engaging combat protocols', type: 'error' },
    { time: '14:32:30', message: 'Shield integrity at 95%', type: 'success' },
  ];

  return (
    <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
      {logs.map((log, i) => (
        <div key={i} className="p-3 bg-black/30 rounded-lg flex items-start gap-3">
          <span className="text-xs text-gray-500 font-mono">{log.time}</span>
          <span className={`text-sm ${
            log.type === 'success' ? 'text-green-400' :
            log.type === 'warning' ? 'text-yellow-400' :
            log.type === 'error' ? 'text-red-400' : 'text-cyan-400'
          }`}>{log.message}</span>
        </div>
      ))}
    </div>
  );
}
