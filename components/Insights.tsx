import React from 'react';
import SectionTitle from './SectionTitle';
import { Timer, Gauge, Thermometer, Radio, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const indoorBenchmark = [
  { algorithm: 'Spiral Scan V2', time: 4.0, best: true },
  { algorithm: 'Grid Mapping',   time: 6.8, best: false },
  { algorithm: 'Spiral Scan V1', time: 7.2, best: false },
  { algorithm: 'Direct Search',  time: 11.5, best: false },
];

const outdoorBenchmark = [
  { range: '5 m',  time: 150, timeLabel: '2.5 min', drone: true },
  { range: '10 m', time: 420, timeLabel: '7 min',  drone: true },
];

const telemetryData = {
  transmitter: { temp: '22°C', pressure: '101.3 kPa' },
  receiver:    { signalIntensity: '85%', motorStatus: 'READY' },
};

const Insights: React.FC = () => {
  const { theme } = useTheme();
  const maxIndoor  = Math.max(...indoorBenchmark.map(d => d.time));
  const maxOutdoor = Math.max(...outdoorBenchmark.map(d => d.time));

  return (
    <section id="insights" className={`py-24 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[#f5f6fa]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle number="005" title="Validation & Benchmarking" />

        <p className={`max-w-2xl font-light text-base mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Comprehensive benchmarking results spanning indoor algorithm testing, outdoor drone-target experiments, and modulation-level signal quality analysis.
        </p>

        {/* Row 1 — Indoor + Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Indoor Lock-on Speed */}
          <div className={`rounded-lg p-8 border ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Timer className="text-blue-500" size={22} />
              <h3 className={`text-xl font-display ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Indoor — Auto-Alignment Lock-on Speed</h3>
            </div>

            <div className="space-y-5">
              {indoorBenchmark.map((item) => (
                <div key={item.algorithm}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-mono ${item.best ? 'text-blue-500' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.algorithm}
                      {item.best && <span className="ml-2 text-[11px] bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded">FASTEST</span>}
                    </span>
                    <span className={`text-base font-mono font-semibold ${item.best ? (theme === 'dark' ? 'text-white' : 'text-gray-900') : 'text-gray-500'}`}>
                      {item.time}s
                    </span>
                  </div>
                  <div className={`h-2.5 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${item.best ? 'bg-gradient-to-r from-blue-500 to-blue-400' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}
                      style={{ width: `${(item.time / maxIndoor) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-6 pt-5 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <p className={`text-sm font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Spiral Scan V2 achieves sub-5 second lock-on — best performing algorithm tested indoors.
              </p>
            </div>
          </div>

          {/* Sensor Telemetry */}
          <div className={`rounded-lg p-8 border ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Radio className="text-blue-500" size={22} />
              <h3 className={`text-xl font-display ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sensor Telemetry — Indoor Test</h3>
            </div>

            <div className="space-y-5">
              <div className={`rounded p-5 ${theme === 'dark' ? 'bg-black/50 border border-white/5' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-xs text-blue-500 font-mono uppercase tracking-widest mb-4">Transmitter</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="text-gray-500" size={18} />
                    <div>
                      <div className={`text-xs uppercase mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Temperature</div>
                      <div className={`text-xl font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{telemetryData.transmitter.temp}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge className="text-gray-500" size={18} />
                    <div>
                      <div className={`text-xs uppercase mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Pressure</div>
                      <div className={`text-xl font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{telemetryData.transmitter.pressure}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded p-5 ${theme === 'dark' ? 'bg-black/50 border border-white/5' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-xs text-blue-500 font-mono uppercase tracking-widest mb-4">Receiver</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className={`text-xs uppercase mb-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Signal Intensity</div>
                    <div className="flex items-center gap-3">
                      <div className={`flex-1 h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div className="h-full w-[85%] bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                      </div>
                      <span className="text-xl font-mono text-green-500">{telemetryData.receiver.signalIntensity}</span>
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs uppercase mb-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Motor Status</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xl font-mono text-green-500">{telemetryData.receiver.motorStatus}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-6 pt-5 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <p className={`text-sm font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                85% signal intensity maintained throughout all indoor benchmark runs.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 — Outdoor Drone Testing */}
        <div className={`rounded-lg p-8 border mb-8 ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Sun className="text-orange-400" size={22} />
            <h3 className={`text-xl font-display ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Outdoor Drone Testing — Alignment Lock-on</h3>
          </div>

          <p className={`text-base mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            The system was deployed outdoors and tested against a retroreflector mounted on a drone at two ranges. The MEMS-based beam steering achieved autonomous optical lock-on in both scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {outdoorBenchmark.map((item) => (
              <div key={item.range} className={`rounded-lg p-6 border-l-4 ${item.range === '5 m' ? 'border-green-500' : 'border-orange-500'} ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className={`text-xs font-mono uppercase tracking-widest mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Outdoor Range</div>
                    <div className={`text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.range}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-mono uppercase tracking-widest mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Lock-on Time</div>
                    <div className={`text-3xl font-display font-bold ${item.range === '5 m' ? 'text-green-500' : 'text-orange-400'}`}>{item.timeLabel}</div>
                  </div>
                </div>
                <div className={`h-2.5 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <div
                    className={`h-full rounded-full ${item.range === '5 m' ? 'bg-gradient-to-r from-green-500 to-green-400' : 'bg-gradient-to-r from-orange-500 to-orange-400'}`}
                    style={{ width: `${(item.time / maxOutdoor) * 100}%` }}
                  />
                </div>
                <p className={`text-sm mt-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.range === '5 m'
                    ? 'Beam locked on drone retroreflector at 5 m range in 2.5 minutes.'
                    : 'Longer acquisition at 10 m due to increased angular sensitivity and atmospheric disturbance — 7 minutes to lock.'}
                </p>
              </div>
            ))}
          </div>

          <div className={`rounded p-4 text-sm font-mono ${theme === 'dark' ? 'bg-black/40 border border-white/5 text-gray-400' : 'bg-blue-50 border border-blue-100 text-gray-600'}`}>
            Target: retroreflector mounted on UAV drone frame — tested at NRC outdoor range facility.
          </div>
        </div>

        {/* Row 3 — EVM Chart */}
        <div className={`rounded-lg p-8 border ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <h3 className={`text-xl font-display mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Peak EVM vs. Baud Rate — Modulation Analysis</h3>
          <p className={`text-base mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Signal quality across ten modulation schemes (1–10 Gbaud). Error Vector Magnitude (EVM) measures how accurately each symbol is transmitted — lower EVM indicates better signal fidelity.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className={`rounded-lg overflow-hidden border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <img
                src="/evm-chart.jpg"
                alt="Peak EVM (%) vs Baud Rate (Gbaud) across modulation schemes"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-4">
              <h4 className={`text-base font-display font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Key Observations</h4>
              {[
                { label: '32APSK — Best Low-Rate Performance', desc: '~29% EVM at 1–2 Gbaud, outperforming all other modulations at low baud rates.', color: 'text-blue-500' },
                { label: 'BPSK — Peaks at 8 Gbaud (~55%)', desc: 'Highest overall EVM at high baud rates, limiting throughput at >6 Gbaud.', color: 'text-gray-400' },
                { label: '128QAM & 64QAM — Stable at High Rates', desc: 'Both plateau around 38–43% EVM, showing consistent performance across mid-to-high baud rates.', color: 'text-orange-400' },
                { label: 'QPSK — Competitive up to 8 Gbaud', desc: 'Reaches ~53% EVM at 8 Gbaud, performing similarly to BPSK at the upper end.', color: 'text-green-500' },
                { label: 'Crossover at 4–6 Gbaud', desc: 'Most modulations converge in EVM at 4–6 Gbaud — optimal operating region for balanced speed and quality.', color: 'text-yellow-400' },
              ].map((obs) => (
                <div key={obs.label} className={`p-4 rounded border-l-4 ${obs.color.replace('text-', 'border-')} ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <div className={`text-sm font-semibold mb-1 ${obs.color}`}>{obs.label}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{obs.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
