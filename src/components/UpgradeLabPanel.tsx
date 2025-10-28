export function UpgradeLabPanel() {
  const upgrades = [
    { name: 'Weapon System', level: 5, cost: 1000 },
    { name: 'Shield Generator', level: 4, cost: 800 },
    { name: 'Energy Core', level: 6, cost: 1200 },
    { name: 'Mobility Thrusters', level: 3, cost: 600 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {upgrades.map((upgrade, i) => (
        <div key={i} className="p-4 bg-black/30 rounded-lg border border-green-400/30">
          <h3 className="text-green-400 font-bold mb-2">{upgrade.name}</h3>
          <p className="text-sm text-gray-400">Level {upgrade.level}</p>
          <button className="mt-3 w-full py-2 bg-green-400/20 hover:bg-green-400/30 text-green-400 rounded-lg transition-colors">
            Upgrade ({upgrade.cost} Credits)
          </button>
        </div>
      ))}
    </div>
  );
}
