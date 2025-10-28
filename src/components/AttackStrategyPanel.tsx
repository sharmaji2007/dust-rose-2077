export function AttackStrategyPanel() {
  const strategies = [
    { name: 'Frontal Assault', power: 95, risk: 'High' },
    { name: 'Flanking Maneuver', power: 75, risk: 'Medium' },
    { name: 'Stealth Approach', power: 60, risk: 'Low' },
  ];

  return (
    <div className="space-y-3">
      {strategies.map((strategy, i) => (
        <button
          key={i}
          className="w-full p-4 bg-black/30 hover:bg-pink-500/20 rounded-lg border border-pink-500/30 hover:border-pink-500 transition-all text-left"
        >
          <div className="flex justify-between items-center">
            <span className="text-pink-400 font-bold">{strategy.name}</span>
            <span className="text-xs text-gray-400">Risk: {strategy.risk}</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-400">Power:</span>
            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-red-500"
                style={{ width: `${strategy.power}%` }}
              />
            </div>
            <span className="text-xs text-pink-400">{strategy.power}%</span>
          </div>
        </button>
      ))}
    </div>
  );
}
