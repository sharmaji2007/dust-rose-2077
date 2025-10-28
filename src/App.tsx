import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HolographicRobotDisplay } from "./components/HolographicRobotDisplay";
import { AITargetingHeatmap } from "./components/AITargetingHeatmap";
import { NeuralCognitionCenter } from "./components/NeuralCognitionCenter";
import { ShieldProtocol } from "./components/ShieldProtocol";
import { UpgradeLabPanel } from "./components/UpgradeLabPanel";
import { QuantumCommandLog } from "./components/QuantumCommandLog";
import { AttackStrategyPanel } from "./components/AttackStrategyPanel";
import { OverheatManagement } from "./components/OverheatManagement";
import { AIChatPanel } from "./components/AIChatPanel";
import { EnergyRecoveryModule } from "./components/EnergyRecoveryModule";
import { TacticalEnvironmentMap } from "./components/TacticalEnvironmentMap";
import { PowerCoreGauge } from "./components/PowerCoreGauge";
import { Bot, Brain, Shield, Wrench, Database, Target, Flame, MessageSquare, Battery, Map, Activity, Zap, Cpu, Wifi } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

type EmotionState = 'calm' | 'aggressive' | 'tactical' | 'protective';

export default function App() {
  const [emotionState, setEmotionState] = useState<EmotionState>('calm');
  const [emotionIntensity, setEmotionIntensity] = useState(0.5);
  const [adaptiveColor, setAdaptiveColor] = useState('#00FFFF');
  const [rageModeActive, setRageModeActive] = useState(false);
  const [activeTab, setActiveTab] = useState('combat');
  const connectionStatus = 'CONNECTED';

  // Adaptive Emotion Engine - changes UI based on robot's state
  useEffect(() => {
    const emotionInterval = setInterval(() => {
      // Simulate emotion changes based on battle conditions
      const emotions: EmotionState[] = ['calm', 'aggressive', 'tactical', 'protective'];
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      setEmotionState(randomEmotion);
      setEmotionIntensity(0.3 + Math.random() * 0.7);

      // Rage mode activates when intensity is very high
      if (emotionIntensity > 0.85 && randomEmotion === 'aggressive') {
        setRageModeActive(true);
        setTimeout(() => setRageModeActive(false), 5000);
      }
    }, 8000);

    return () => clearInterval(emotionInterval);
  }, [emotionIntensity]);

  // Adaptive color based on emotion
  useEffect(() => {
    if (rageModeActive) {
      setAdaptiveColor('#FF0033');
    } else {
      switch (emotionState) {
        case 'calm':
          setAdaptiveColor('#00FFFF');
          break;
        case 'aggressive':
          setAdaptiveColor('#FF007F');
          break;
        case 'tactical':
          setAdaptiveColor('#00FFA3');
          break;
        case 'protective':
          setAdaptiveColor('#FFA500');
          break;
        default:
          setAdaptiveColor('#00FFFF');
      }
    }
  }, [emotionState, rageModeActive]);

  const getEmotionLabel = () => {
    if (rageModeActive) return 'RAGE MODE';
    switch (emotionState) {
      case 'calm': return 'CALM ANALYSIS';
      case 'aggressive': return 'COMBAT AGGRESSIVE';
      case 'tactical': return 'TACTICAL FOCUS';
      case 'protective': return 'DEFENSIVE MODE';
      default: return 'PROCESSING';
    }
  };

  const getEmotionDescription = () => {
    if (rageModeActive) return 'Maximum combat efficiency unlocked. All systems overcharged.';
    switch (emotionState) {
      case 'calm': return 'Analyzing battlefield with precision. Optimal decision-making enabled.';
      case 'aggressive': return 'High attack priority. Initiating offensive protocols.';
      case 'tactical': return 'Strategic positioning active. Calculating optimal moves.';
      case 'protective': return 'Defense systems prioritized. Shield protocols engaged.';
      default: return 'Quantum processing active.';
    }
  };

  return (
    <div 
      className="min-h-screen p-6 cyber-grid relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0A0F1C 0%, #1A1F2C 50%, #0F1419 100%)',
        fontFamily: 'Exo 2, sans-serif',
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(${adaptiveColor}30 1px, transparent 1px),
              linear-gradient(90deg, ${adaptiveColor}30 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Corner accent lights */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96"
          style={{
            background: `radial-gradient(circle at top left, ${adaptiveColor}40 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: rageModeActive ? 1 : 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96"
          style={{
            background: `radial-gradient(circle at bottom right, ${adaptiveColor}30 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: rageModeActive ? 1 : 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Floating particles with improved animation */}
        {[...Array(rageModeActive ? 25 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: adaptiveColor,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 15px ${adaptiveColor}, 0 0 30px ${adaptiveColor}50`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: rageModeActive ? 3 : 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Rage Mode Enhanced Effects */}
      <AnimatePresence>
        {rageModeActive && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Screen shake effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                x: [0, -2, 2, -2, 2, 0],
                y: [0, 2, -2, 2, -2, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
              }}
            >
              {/* Red overlay with glitch effect */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(45deg, rgba(255, 0, 51, 0.2) 0%, rgba(255, 0, 127, 0.3) 50%, rgba(255, 0, 51, 0.2) 100%)',
                  filter: 'blur(1px)',
                }}
              />
            </motion.div>

            {/* Enhanced pulse waves */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-4 border-red-500"
                style={{
                  borderRadius: '50%',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 50px rgba(255, 0, 51, 0.8)',
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: 4,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main container with glassmorphism */}
      <div className="max-w-[1800px] mx-auto relative">
        {/* Enhanced Header with Robot Logo */}
        <motion.div
          className="mb-6 text-center relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Robot Logo and Title */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <motion.div
              className="relative"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: rageModeActive ? 2 : 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${adaptiveColor}30, ${adaptiveColor}10)`,
                  border: `2px solid ${adaptiveColor}`,
                  boxShadow: `0 0 30px ${adaptiveColor}50, inset 0 0 20px ${adaptiveColor}20`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Bot 
                  className="w-8 h-8" 
                  style={{ 
                    color: adaptiveColor, 
                    filter: `drop-shadow(0 0 10px ${adaptiveColor})` 
                  }} 
                />
              </div>
              
              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border border-opacity-30 rounded-full"
                style={{ borderColor: adaptiveColor }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[-8px] border border-opacity-20 rounded-full"
                style={{ borderColor: adaptiveColor }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <div className="text-center">
              <h1
                className="text-6xl font-bold tracking-wider"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  background: `linear-gradient(135deg, ${adaptiveColor}, #FFFFFF, ${adaptiveColor})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: `0 0 30px ${adaptiveColor}80`,
                  filter: `drop-shadow(0 0 20px ${adaptiveColor}50)`,
                }}
              >
                DUST-ROSE 2077
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#00FFA3' }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span
                  className="text-lg tracking-widest"
                  style={{
                    color: '#E0E0E0',
                    fontFamily: 'Exo 2, sans-serif',
                    textShadow: `0 0 10px ${adaptiveColor}50`,
                  }}
                >
                  QUANTUM COMBAT INTELLIGENCE • ADAPTIVE AI WARFARE SYSTEM
                </span>
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#00FFA3' }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </div>

          {/* Enhanced Emotion Engine Status */}
          <motion.div
            className="mt-4 inline-flex flex-col items-center gap-3 px-10 py-4 rounded-2xl relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${adaptiveColor}15, ${adaptiveColor}05)`,
              border: `2px solid ${adaptiveColor}60`,
              boxShadow: `0 0 40px ${adaptiveColor}40, inset 0 0 20px ${adaptiveColor}10`,
              backdropFilter: 'blur(15px)',
            }}
            animate={{
              boxShadow: [
                `0 0 40px ${adaptiveColor}40, inset 0 0 20px ${adaptiveColor}10`,
                `0 0 60px ${adaptiveColor}80, inset 0 0 30px ${adaptiveColor}20`,
                `0 0 40px ${adaptiveColor}40, inset 0 0 20px ${adaptiveColor}10`,
              ],
            }}
            transition={{
              duration: rageModeActive ? 0.5 : 3,
              repeat: Infinity,
            }}
          >
            {/* Background animation */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(45deg, transparent 30%, ${adaptiveColor}20 50%, transparent 70%)`,
              }}
            />
            
            <div className="flex items-center gap-3 relative z-10">
              <motion.div
                className="w-4 h-4 rounded-full relative"
                style={{ backgroundColor: adaptiveColor }}
                animate={{
                  scale: rageModeActive ? [1, 2.5, 1] : [1, 1.8, 1],
                  opacity: [1, 0.4, 1],
                  boxShadow: [
                    `0 0 10px ${adaptiveColor}`,
                    `0 0 25px ${adaptiveColor}`,
                    `0 0 10px ${adaptiveColor}`,
                  ],
                }}
                transition={{
                  duration: rageModeActive ? 0.3 : 1.5,
                  repeat: Infinity,
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${adaptiveColor} 0%, transparent 70%)`,
                    filter: 'blur(4px)',
                  }}
                />
              </motion.div>
              
              <span 
                className="text-xl font-bold tracking-wider"
                style={{ 
                  color: adaptiveColor, 
                  fontFamily: 'Orbitron, sans-serif',
                  textShadow: `0 0 15px ${adaptiveColor}80`,
                }}
              >
                {getEmotionLabel()}
              </span>
              
              <Cpu 
                className="w-5 h-5" 
                style={{ 
                  color: adaptiveColor,
                  filter: `drop-shadow(0 0 8px ${adaptiveColor})`,
                }} 
              />
            </div>
            
            <span 
              className="text-sm text-center max-w-md relative z-10" 
              style={{ 
                color: '#E0E0E0',
                fontFamily: 'Exo 2, sans-serif',
                textShadow: '0 0 8px rgba(224, 224, 224, 0.5)',
              }}
            >
              {getEmotionDescription()}
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList 
            className="grid w-full grid-cols-5 mb-6 h-16 p-1"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
              border: `1px solid ${adaptiveColor}40`,
              borderRadius: '16px',
              backdropFilter: 'blur(20px)',
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${adaptiveColor}20`,
            }}
          >
            {[
              { value: 'combat', icon: Target, label: 'COMBAT' },
              { value: 'neural', icon: Brain, label: 'NEURAL AI' },
              { value: 'defense', icon: Shield, label: 'DEFENSE' },
              { value: 'upgrade', icon: Wrench, label: 'UPGRADE' },
              { value: 'logs', icon: Database, label: 'LOGS' },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative overflow-hidden rounded-xl transition-all duration-300 data-[state=active]:text-cyan-400"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={false}
                  animate={{
                    background: activeTab === tab.value 
                      ? `linear-gradient(135deg, ${adaptiveColor}30, ${adaptiveColor}10)`
                      : 'transparent',
                    boxShadow: activeTab === tab.value 
                      ? `0 0 20px ${adaptiveColor}40, inset 0 0 10px ${adaptiveColor}20`
                      : '0 0 0px transparent',
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>        
  {/* COMBAT TAB */}
          <TabsContent value="combat" className="space-y-4">
            <div className="grid grid-cols-12 gap-4">
              {/* LEFT COLUMN */}
              <motion.div
                className="col-span-3 space-y-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Enhanced Holographic Robot Display */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                    borderColor: adaptiveColor,
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px ${adaptiveColor}30`,
                    backdropFilter: 'blur(20px)',
                    height: '420px',
                  }}
                >
                  {/* Animated border */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${adaptiveColor}20 50%, transparent 70%)`,
                      opacity: 0.3,
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${adaptiveColor}30, ${adaptiveColor}10)`,
                        boxShadow: `0 0 15px ${adaptiveColor}40`,
                      }}
                    >
                      <Bot className="w-5 h-5" style={{ color: adaptiveColor }} />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: adaptiveColor,
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: `0 0 10px ${adaptiveColor}60`,
                      }}
                    >
                      ROBOT STATUS
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <HolographicRobotDisplay />
                  </div>
                </div>

                {/* Enhanced Overheat Management */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.1), rgba(0, 0, 0, 0.3))',
                    borderColor: '#FF007F',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 0, 127, 0.2)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 0, 127, 0.3) 50%, transparent 70%)',
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.3), rgba(255, 0, 127, 0.1))',
                        boxShadow: '0 0 15px rgba(255, 0, 127, 0.4)',
                      }}
                    >
                      <Flame className="w-5 h-5 glow-pink" />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: '#FF007F',
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: '0 0 10px rgba(255, 0, 127, 0.6)',
                      }}
                    >
                      THERMAL CONTROL
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <OverheatManagement />
                  </div>
                </div>
              </motion.div>

              {/* CENTER COLUMN */}
              <motion.div
                className="col-span-6 space-y-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Enhanced AI Targeting Heatmap */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.1), rgba(0, 0, 0, 0.3))',
                    borderColor: '#FF007F',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 0, 127, 0.2)',
                    backdropFilter: 'blur(20px)',
                    minHeight: '450px',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 0, 127, 0.3) 50%, transparent 70%)',
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.3), rgba(255, 0, 127, 0.1))',
                        boxShadow: '0 0 15px rgba(255, 0, 127, 0.4)',
                      }}
                    >
                      <Target className="w-5 h-5 glow-pink" />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: '#FF007F',
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: '0 0 10px rgba(255, 0, 127, 0.6)',
                      }}
                    >
                      QUANTUM TARGETING
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <AITargetingHeatmap />
                  </div>
                </div>

                {/* Enhanced Attack Strategy Panel */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${adaptiveColor}10, rgba(0, 0, 0, 0.3))`,
                    borderColor: adaptiveColor,
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px ${adaptiveColor}20`,
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${adaptiveColor}30 50%, transparent 70%)`,
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${adaptiveColor}30, ${adaptiveColor}10)`,
                        boxShadow: `0 0 15px ${adaptiveColor}40`,
                      }}
                    >
                      <Zap className="w-5 h-5" style={{ color: adaptiveColor }} />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: adaptiveColor,
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: `0 0 10px ${adaptiveColor}60`,
                      }}
                    >
                      ATTACK PROTOCOLS
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <AttackStrategyPanel />
                  </div>
                </div>

                {/* Enhanced Tactical Environment Map */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 163, 0.1), rgba(0, 0, 0, 0.3))',
                    borderColor: '#00FFA3',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 163, 0.2)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 163, 0.3) 50%, transparent 70%)',
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 255, 163, 0.3), rgba(0, 255, 163, 0.1))',
                        boxShadow: '0 0 15px rgba(0, 255, 163, 0.4)',
                      }}
                    >
                      <Map className="w-5 h-5 glow-green" />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: '#00FFA3',
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: '0 0 10px rgba(0, 255, 163, 0.6)',
                      }}
                    >
                      TACTICAL MAP
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <TacticalEnvironmentMap />
                  </div>
                </div>
              </motion.div>

              {/* RIGHT COLUMN */}
              <motion.div
                className="col-span-3 space-y-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Enhanced AI Chat Panel */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 0, 0, 0.3))',
                    borderColor: '#00FFFF',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    height: '500px',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.3) 50%, transparent 70%)',
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 255, 255, 0.1))',
                        boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                      }}
                    >
                      <MessageSquare className="w-5 h-5 glow-cyan" />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: '#00FFFF',
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
                      }}
                    >
                      TACTICAL AI
                    </h2>
                  </div>
                  <div className="h-[calc(100%-4rem)] relative z-10">
                    <AIChatPanel />
                  </div>
                </div>

                {/* Enhanced Energy Recovery Module */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 163, 0.1), rgba(0, 0, 0, 0.3))',
                    borderColor: '#00FFA3',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 163, 0.2)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 163, 0.3) 50%, transparent 70%)',
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 255, 163, 0.3), rgba(0, 255, 163, 0.1))',
                        boxShadow: '0 0 15px rgba(0, 255, 163, 0.4)',
                      }}
                    >
                      <Battery className="w-5 h-5 glow-green" />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: '#00FFA3',
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: '0 0 10px rgba(0, 255, 163, 0.6)',
                      }}
                    >
                      ENERGY SYSTEMS
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <EnergyRecoveryModule />
                  </div>
                </div>

                {/* Enhanced Power Core Gauges */}
                <div
                  className="p-6 rounded-2xl border relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${adaptiveColor}10, rgba(0, 0, 0, 0.3))`,
                    borderColor: adaptiveColor,
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px ${adaptiveColor}50`,
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${adaptiveColor}30 50%, transparent 70%)`,
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${adaptiveColor}30, ${adaptiveColor}10)`,
                        boxShadow: `0 0 15px ${adaptiveColor}40`,
                      }}
                    >
                      <Activity className="w-5 h-5" style={{ color: adaptiveColor }} />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-wide"
                      style={{
                        color: adaptiveColor,
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: `0 0 10px ${adaptiveColor}60`,
                      }}
                    >
                      CORE STATUS
                    </h2>
                  </div>
                  <div className="flex justify-around relative z-10">
                    <PowerCoreGauge value={92} label="Primary" color={adaptiveColor} />
                    <PowerCoreGauge value={87} label="Reserve" color="#00FFFF" />
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          {/* NEURAL AI TAB */}
          <TabsContent value="neural">
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${adaptiveColor}10, rgba(0, 0, 0, 0.3))`,
                  borderColor: adaptiveColor,
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px ${adaptiveColor}30`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, ${adaptiveColor}30 50%, transparent 70%)`,
                  }}
                />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${adaptiveColor}30, ${adaptiveColor}10)`,
                      boxShadow: `0 0 15px ${adaptiveColor}40`,
                    }}
                  >
                    <Brain className="w-6 h-6" style={{ color: adaptiveColor }} />
                  </div>
                  <h2
                    className="text-xl font-bold tracking-wide"
                    style={{
                      color: adaptiveColor,
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: `0 0 10px ${adaptiveColor}60`,
                    }}
                  >
                    NEURAL COGNITION CENTER
                  </h2>
                </div>
                <div className="relative z-10">
                  <NeuralCognitionCenter />
                </div>
              </div>
              
              <div
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 0, 0, 0.3))',
                  borderColor: '#00FFFF',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.3) 50%, transparent 70%)',
                  }}
                />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 255, 255, 0.1))',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                    }}
                  >
                    <MessageSquare className="w-6 h-6" style={{ color: '#00FFFF' }} />
                  </div>
                  <h2
                    className="text-xl font-bold tracking-wide"
                    style={{
                      color: '#00FFFF',
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
                    }}
                  >
                    AI COMMUNICATION HUB
                  </h2>
                </div>
                <div style={{ height: '600px' }} className="relative z-10">
                  <AIChatPanel />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* DEFENSE TAB */}
          <TabsContent value="defense">
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 0, 0, 0.3))',
                  borderColor: '#00FFFF',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.3) 50%, transparent 70%)',
                  }}
                />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 255, 255, 0.1))',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                    }}
                  >
                    <Shield className="w-6 h-6" style={{ color: '#00FFFF' }} />
                  </div>
                  <h2
                    className="text-xl font-bold tracking-wide"
                    style={{
                      color: '#00FFFF',
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
                    }}
                  >
                    SHIELD PROTOCOL & COUNTER-ATTACK
                  </h2>
                </div>
                <div className="relative z-10">
                  <ShieldProtocol />
                </div>
              </div>
              
              <div
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.1), rgba(0, 0, 0, 0.3))',
                  borderColor: '#FF007F',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 0, 127, 0.3)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 0, 127, 0.3) 50%, transparent 70%)',
                  }}
                />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.3), rgba(255, 0, 127, 0.1))',
                      boxShadow: '0 0 15px rgba(255, 0, 127, 0.4)',
                    }}
                  >
                    <Flame className="w-6 h-6" style={{ color: '#FF007F' }} />
                  </div>
                  <h2
                    className="text-xl font-bold tracking-wide"
                    style={{
                      color: '#FF007F',
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: '0 0 10px rgba(255, 0, 127, 0.6)',
                    }}
                  >
                    THERMAL MANAGEMENT
                  </h2>
                </div>
                <div className="relative z-10">
                  <OverheatManagement />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* UPGRADE TAB */}
          <TabsContent value="upgrade">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 163, 0.1), rgba(0, 0, 0, 0.3))',
                  borderColor: '#00FFA3',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 163, 0.3)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 163, 0.3) 50%, transparent 70%)',
                  }}
                />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 163, 0.3), rgba(0, 255, 163, 0.1))',
                      boxShadow: '0 0 15px rgba(0, 255, 163, 0.4)',
                    }}
                  >
                    <Wrench className="w-6 h-6" style={{ color: '#00FFA3' }} />
                  </div>
                  <h2
                    className="text-xl font-bold tracking-wide"
                    style={{
                      color: '#00FFA3',
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: '0 0 10px rgba(0, 255, 163, 0.6)',
                    }}
                  >
                    UPGRADE & REPAIR LABORATORY
                  </h2>
                </div>
                <div className="relative z-10">
                  <UpgradeLabPanel />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* LOGS TAB */}
          <TabsContent value="logs">
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${adaptiveColor}10, rgba(0, 0, 0, 0.3))`,
                  borderColor: adaptiveColor,
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px ${adaptiveColor}30`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, ${adaptiveColor}30 50%, transparent 70%)`,
                  }}
                />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${adaptiveColor}30, ${adaptiveColor}10)`,
                      boxShadow: `0 0 15px ${adaptiveColor}40`,
                    }}
                  >
                    <Database className="w-6 h-6" style={{ color: adaptiveColor }} />
                  </div>
                  <h2
                    className="text-xl font-bold tracking-wide"
                    style={{
                      color: adaptiveColor,
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: `0 0 10px ${adaptiveColor}60`,
                    }}
                  >
                    QUANTUM COMMAND LOG
                  </h2>
                </div>
                <div className="relative z-10">
                  <QuantumCommandLog />
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Enhanced Footer Status Bar */}
        <motion.div
          className="mt-6 p-6 rounded-2xl border relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${adaptiveColor}08, rgba(0, 0, 0, 0.4))`,
            borderColor: `${adaptiveColor}40`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 30px ${adaptiveColor}20`,
            backdropFilter: 'blur(20px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-10"
            style={{
              background: `linear-gradient(45deg, transparent 30%, ${adaptiveColor}30 50%, transparent 70%)`,
            }}
          />
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-8">
              {[
                { label: 'Neural Link Active', color: adaptiveColor, delay: 0 },
                { label: 'Quantum Processing', color: '#00FFA3', delay: 0.5 },
                { label: `Emotion Engine: ${getEmotionLabel()}`, color: adaptiveColor, delay: 1 },
              ].map((status, index) => (
                <div key={index} className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 rounded-full relative"
                    style={{
                      backgroundColor: status.color,
                      boxShadow: `0 0 15px ${status.color}80`,
                    }}
                    animate={{
                      opacity: [1, 0.3, 1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: rageModeActive ? 0.5 : 2,
                      repeat: Infinity,
                      delay: status.delay,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${status.color} 0%, transparent 70%)`,
                        filter: 'blur(2px)',
                      }}
                    />
                  </motion.div>
                  <span 
                    style={{ 
                      color: '#E0E0E0', 
                      fontFamily: 'Exo 2, sans-serif', 
                      fontSize: '14px',
                      textShadow: '0 0 8px rgba(224, 224, 224, 0.3)',
                    }}
                  >
                    {status.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Wifi 
                  className="w-4 h-4" 
                  style={{ 
                    color: '#00FFA3',
                    filter: 'drop-shadow(0 0 8px #00FFA3)',
                  }} 
                />
                <span 
                  style={{ 
                    color: '#00FFA3', 
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '12px',
                    textShadow: '0 0 8px rgba(0, 255, 163, 0.5)',
                  }}
                >
                  {connectionStatus}
                </span>
              </div>
              
              <div
                className="px-6 py-3 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${adaptiveColor}20, ${adaptiveColor}05)`,
                  border: `1px solid ${adaptiveColor}40`,
                  boxShadow: `0 0 20px ${adaptiveColor}30`,
                }}
              >
                <span
                  style={{
                    color: adaptiveColor,
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    textShadow: `0 0 10px ${adaptiveColor}60`,
                  }}
                >
                  SYSTEM TIME: {new Date().toLocaleTimeString('en-US', { hour12: false })}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Custom Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 0, 0, 0.3));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.6), rgba(0, 255, 255, 0.3));
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.8), rgba(0, 255, 255, 0.5));
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
        }

        /* Enhanced glitch effect for rage mode */
        @keyframes glitch {
          0% { transform: translate(0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(-2px, -2px); }
          30% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          70% { transform: translate(2px, 2px); }
          80% { transform: translate(-2px, -2px); }
          90% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }

        /* Holographic shimmer effect */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .holographic {
          position: relative;
        }

        .holographic::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
          pointer-events: none;
          border-radius: inherit;
        }

        /* Glow effects */
        .glow-cyan {
          filter: drop-shadow(0 0 8px #00FFFF);
        }
        .glow-pink {
          filter: drop-shadow(0 0 8px #FF007F);
        }
        .glow-green {
          filter: drop-shadow(0 0 8px #00FFA3);
        }

        /* Cyber grid background */
        .cyber-grid {
          position: relative;
        }
        .cyber-grid::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 100px 100px;
          pointer-events: none;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}