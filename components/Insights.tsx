import React from 'react';
import SectionTitle from './SectionTitle';
import { Timer, Gauge, Thermometer, Radio } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const benchmarkData = [
  { algorithm: 'Spiral Scan V2', time: 4.0, best: true },
  { algorithm: 'Grid Mapping', time: 6.8, best: false },
  { algorithm: 'Spiral Scan V1', time: 7.2, best: false },
  { algorithm: 'Direct Search', time: 11.5, best: false },
];

const telemetryData = {
  transmitter: { temp: '22°C', pressure: '101.3 kPa' },
  receiver: { signalIntensity: '85%', motorStatus: 'READY' },
};

const Insights: React.FC = () => {
  const { theme } = useTheme();
  const maxTime = Math.max(...benchmarkData.map(d => d.time));

  return (
    <section id="insights" className={`py-24 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle number="005" title="Validation & Benchmarking" />

        <p className={`max-w-2xl font-light text-sm mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Indoor benchmarking results demonstrating system performance across different scanning algorithms and real-time sensor telemetry.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Test 1: Lock-on Speed Comparison */}
          <div className={`rounded-lg p-8 border ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Timer className="text-blue-500" size={20} />
              <h3 className={`text-lg font-display ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Auto-Alignment Lock-on Speed</h3>
            </div>

            <div className="space-y-4">
              {benchmarkData.map((item) => (
                <div key={item.algorithm} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-mono ${item.best ? 'text-blue-500' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.algorithm}
                      {item.best && <span className="ml-2 text-[10px] bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded">FASTEST</span>}
                    </span>
                    <span className={`text-sm font-mono ${item.best ? (theme === 'dark' ? 'text-white' : 'text-gray-900') : 'text-gray-500'}`}>
                      {item.time}s
                    </span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${item.best ? 'bg-gradient-to-r from-blue-500 to-blue-400' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}
                      style={{ width: `${(item.time / maxTime) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <p className={`text-xs font-mono ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                System achieves sub-5 second lock-on via Spiral Scan V2 algorithm
              </p>
            </div>
          </div>

          {/* Test 2: Sensor Telemetry */}
          <div className={`rounded-lg p-8 border ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Radio className="text-blue-500" size={20} />
              <h3 className={`text-lg font-display ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sensor Telemetry (Live Data)</h3>
            </div>

            <div className="space-y-6">
              {/* Transmitter */}
              <div className={`rounded p-4 ${theme === 'dark' ? 'bg-black/50 border border-white/5' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-4">Transmitter</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="text-gray-500" size={16} />
                    <div>
                      <div className={`text-[10px] uppercase ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>Temperature</div>
                      <div className={`text-lg font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{telemetryData.transmitter.temp}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge className="text-gray-500" size={16} />
                    <div>
                      <div className={`text-[10px] uppercase ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>Pressure</div>
                      <div className={`text-lg font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{telemetryData.transmitter.pressure}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Receiver */}
              <div className={`rounded p-4 ${theme === 'dark' ? 'bg-black/50 border border-white/5' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mb-4">Receiver</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className={`text-[10px] uppercase mb-2 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>Signal Intensity</div>
                    <div className="flex items-center gap-3">
                      <div className={`flex-1 h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div className="h-full w-[85%] bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                      </div>
                      <span className="text-lg font-mono text-green-500">{telemetryData.receiver.signalIntensity}</span>
                    </div>
                  </div>
                  <div>
                    <div className={`text-[10px] uppercase mb-2 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>Motor Status</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-lg font-mono text-green-500">{telemetryData.receiver.motorStatus}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <p className={`text-xs font-mono ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                Signal intensity maintained at 85% during indoor tests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;