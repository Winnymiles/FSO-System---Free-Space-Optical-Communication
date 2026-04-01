import React from 'react';
import {
  Cpu, Radio, Zap, CloudRain,
  Camera, Eye, MonitorPlay, Microchip,
  Settings, Target, ShieldAlert, Monitor,
  ToggleRight, ArrowRight, ArrowDown, ArrowLeft, ArrowLeftRight, Lightbulb
} from 'lucide-react';

const ComponentBox = ({ icon: Icon, title, theme = 'default', desc, className = '' }: {
  icon: React.ElementType;
  title: string;
  theme?: string;
  desc?: string;
  className?: string;
}) => {
  const themeStyles: Record<string, string> = {
    cyan:    'border-cyan-400   bg-cyan-950/60   text-cyan-200   shadow-[0_0_12px_rgba(34,211,238,0.2)]',
    blue:    'border-blue-400   bg-blue-950/60   text-blue-200   shadow-[0_0_12px_rgba(59,130,246,0.2)]',
    green:   'border-green-400  bg-green-950/60  text-green-200  shadow-[0_0_12px_rgba(74,222,128,0.2)]',
    yellow:  'border-yellow-400 bg-yellow-950/60 text-yellow-200 shadow-[0_0_12px_rgba(250,204,21,0.2)]',
    orange:  'border-orange-400 bg-orange-950/60 text-orange-200 shadow-[0_0_12px_rgba(249,115,22,0.2)]',
    default: 'border-slate-500  bg-slate-800/80  text-slate-200  hover:border-slate-400',
  };

  const iconColors: Record<string, string> = {
    cyan: 'text-cyan-400', blue: 'text-blue-400', green: 'text-green-400',
    yellow: 'text-yellow-400', orange: 'text-orange-400', default: 'text-slate-300',
  };

  return (
    <div className={`relative p-4 border-2 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 group ${themeStyles[theme]} ${className}`}>
      <Icon className={`w-6 h-6 mb-2 flex-shrink-0 ${iconColors[theme]}`} />
      <span className="text-xs font-bold tracking-tight leading-tight">{title}</span>

      {desc && (
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-xs text-slate-200 z-50 pointer-events-none shadow-xl">
          {desc}
        </div>
      )}
    </div>
  );
};

const SensorSuiteBox = () => (
  <div className="relative p-4 border-2 rounded-xl flex flex-col transition-all duration-300 hover:scale-105 group border-blue-400 bg-blue-950/60 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.2)]">
    <div className="flex items-center gap-2 mb-3 border-b border-blue-500/50 pb-2">
      <CloudRain className="w-5 h-5 text-blue-400 flex-shrink-0" />
      <span className="text-xs font-bold uppercase tracking-wide">Sensor Suite</span>
    </div>
    <ul className="text-[11px] space-y-1.5 list-none text-left leading-tight">
      {['Temperature', 'Humidity', 'Pressure', 'Light', 'Raindrop'].map(s => (
        <li key={s} className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
          {s} Sensor
        </li>
      ))}
    </ul>
    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-xs text-slate-200 z-50 pointer-events-none shadow-xl">
      Environmental sensors monitoring ambient conditions in real time
    </div>
  </div>
);

const Arrow = ({ dir = 'down' }: { dir?: 'down' | 'right' | 'left' | 'both' }) => {
  if (dir === 'right') return <ArrowRight className="text-slate-500 flex-shrink-0" size={18} />;
  if (dir === 'left')  return <ArrowLeft className="text-slate-500 flex-shrink-0" size={18} />;
  if (dir === 'both')  return <ArrowLeftRight className="text-slate-500 flex-shrink-0" size={18} />;
  return <ArrowDown className="text-slate-500 flex-shrink-0" size={18} />;
};

const SystemDiagram: React.FC = () => (
  <div className="bg-slate-950 text-slate-200 p-6 font-sans overflow-x-auto rounded-lg">
    <div className="min-w-[1200px] max-w-screen-2xl mx-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 relative shadow-2xl">

        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none rounded-3xl"
             style={{ backgroundImage: 'linear-gradient(#94a3b8 1px,transparent 1px),linear-gradient(90deg,#94a3b8 1px,transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 grid grid-cols-[1fr_80px_1fr] gap-6 items-start">

          {/* ══════════════════════════════════════
              PRIMARY TERMINAL
          ══════════════════════════════════════ */}
          <div className="border-4 border-slate-700 rounded-3xl bg-slate-900/80 p-8 flex flex-col gap-6">
            <h3 className="text-white text-base font-bold tracking-widest uppercase text-center border-b border-slate-700 pb-4">
              Primary Terminal
            </h3>

            {/* Power → PC */}
            <div className="flex items-center justify-center gap-4">
              <ComponentBox theme="cyan" title="Power Supply" icon={Zap} className="flex-1"
                desc="Regulated DC power source for all primary components" />
              <Arrow dir="right" />
              <ComponentBox theme="default" title="PC" icon={Cpu} className="flex-1"
                desc="Runs control software and manages system coordination" />
            </div>

            {/* Down arrows */}
            <div className="flex justify-around px-8">
              <Arrow /><Arrow />
            </div>

            {/* Portenta + Retroreflector */}
            <div className="grid grid-cols-2 gap-4">
              <ComponentBox theme="default" title="Arduino Portenta H7 Microcontroller" icon={Microchip}
                desc="Primary MCU handling sensor polling and actuator control" />
              <ComponentBox theme="default" title="Retroreflector" icon={Target}
                desc="Passively reflects the incoming laser beam back to source" />
            </div>

            {/* Down arrows ×4 */}
            <div className="flex justify-around px-4">
              <Arrow /><Arrow /><Arrow /><Arrow />
            </div>

            {/* 2×2 grid: Relay | Sensor Suite / OLED | Antenna */}
            <div className="grid grid-cols-2 gap-4">
              <ComponentBox theme="blue" title="Relay Module" icon={ToggleRight}
                desc="Electrically switches power to connected actuators" />
              <SensorSuiteBox />
              <ComponentBox theme="yellow" title="OLED Display" icon={MonitorPlay}
                desc="Shows real-time system status and telemetry readings" />
              <ComponentBox theme="green" title="Antenna" icon={Radio}
                desc="LoRa RF antenna for long-range wireless communication" />
            </div>

            {/* Down arrow under Relay */}
            <div className="flex justify-start pl-[12.5%]">
              <Arrow />
            </div>

            {/* Lid Motor → Lid */}
            <div className="flex items-center gap-4 pl-4">
              <ComponentBox theme="blue" title="Lid Motor" icon={Settings} className="w-40"
                desc="Motorized actuator that opens or closes the protective lid" />
              <Arrow dir="right" />
              <ComponentBox theme="blue" title="Lid" icon={ShieldAlert} className="w-32"
                desc="Protective cover that shields optics when system is idle" />
            </div>
          </div>

          {/* ══════════════════════════════════════
              MIDDLE BRIDGE
          ══════════════════════════════════════ */}
          <div className="flex flex-col items-center justify-center gap-16 pt-24 h-full">
            <div className="flex flex-col items-center gap-2 text-red-400 bg-slate-900/90 px-3 py-4 rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
              <ArrowLeft className="w-5 h-5 animate-pulse" />
              <ArrowLeft className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.6s' }} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight mt-1">Optical<br/>Link</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-slate-400 bg-slate-900/90 px-3 py-4 rounded-xl border border-slate-600">
              <ArrowLeftRight className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight">LoRa<br/>RF</span>
            </div>
          </div>

          {/* ══════════════════════════════════════
              SECONDARY TERMINAL
          ══════════════════════════════════════ */}
          <div className="border-4 border-slate-700 rounded-3xl bg-slate-900/80 p-8 flex flex-col gap-6">
            <h3 className="text-white text-base font-bold tracking-widest uppercase text-center border-b border-slate-700 pb-4">
              Secondary Terminal
            </h3>

            {/* MEMS Mirror ← MEMS Controller (matching reference diagram) */}
            <div className="flex items-center gap-4">
              <ComponentBox theme="orange" title="MEMS Mirror" icon={Eye} className="flex-1"
                desc="Micro-mirror that steers the laser beam with high precision" />
              <Arrow dir="left" />
              <ComponentBox theme="orange" title="MEMS Controller" icon={Cpu} className="flex-1"
                desc="Drives the MEMS mirror with precision voltage signals" />
            </div>

            {/* Down arrows */}
            <div className="flex justify-around px-8">
              <Arrow /><Arrow />
            </div>

            {/* Steerable Laser + Camera | LattePanda | Power Supply */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="flex flex-col gap-4">
                <ComponentBox theme="default" title="Steerable Laser" icon={Zap}
                  desc="Emits the optical signal aimed at the target" />
                <ComponentBox theme="default" title="Camera" icon={Camera}
                  desc="Captures target image for visual tracking and alignment" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Arrow dir="both" /><Arrow dir="both" />
                <ComponentBox theme="default" title="Latte Panda (Delta 3)" icon={Cpu} className="w-full"
                  desc="Windows PC running beam steering and tracking algorithms" />
              </div>
              <div className="flex items-center gap-3 justify-end">
                <Arrow dir="both" />
                <ComponentBox theme="cyan" title="Power Supply" icon={Zap} className="flex-1"
                  desc="Regulated DC power source for secondary components" />
              </div>
            </div>

            {/* Down arrows from LattePanda */}
            <div className="flex justify-center gap-12">
              <Arrow /><Arrow />
            </div>

            {/* Antenna + Arduino MKR + Touchscreen */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <ComponentBox theme="green" title="Antenna" icon={Radio}
                desc="LoRa antenna enabling RF link with the primary terminal" />
              <div className="flex items-center gap-2">
                <Arrow dir="both" />
                <ComponentBox theme="default" title="Arduino MKR 1310" icon={Microchip} className="flex-1"
                  desc="Handles LoRa communication and environmental telemetry" />
              </div>
              <ComponentBox theme="default" title='7" Touchscreen HDMI' icon={Monitor}
                desc="User interface for monitoring system status and control" />
            </div>

            {/* Down arrows from MKR */}
            <div className="flex justify-center gap-12 pl-16">
              <Arrow /><Arrow />
            </div>

            {/* OLED + Light Sensor */}
            <div className="grid grid-cols-2 gap-4 pl-8">
              <ComponentBox theme="yellow" title="OLED Display" icon={MonitorPlay}
                desc="Displays secondary terminal readings and link status" />
              <ComponentBox theme="blue" title="Light Sensor" icon={Lightbulb}
                desc="Measures received optical signal intensity for feedback" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default SystemDiagram;
