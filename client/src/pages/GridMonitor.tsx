import { Activity, Zap, Battery, Thermometer } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '00:00', voltage: 220, current: 10, temperature: 35 },
  { time: '04:00', voltage: 218, current: 12, temperature: 36 },
  { time: '08:00', voltage: 225, current: 15, temperature: 38 },
  { time: '12:00', voltage: 223, current: 13, temperature: 37 },
  { time: '16:00', voltage: 221, current: 11, temperature: 36 },
  { time: '20:00', voltage: 219, current: 10, temperature: 35 },
];

export default function GridMonitor() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Grid Monitor</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Voltage Card */}
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-yellow-500" />
            <h2 className="text-xl font-semibold">Voltage</h2>
          </div>
          <div className="text-3xl font-bold">220V</div>
          <div className="text-sm text-muted-foreground">Nominal: 230V ±10%</div>
        </div>

        {/* Current Card */}
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Battery className="h-5 w-5 text-blue-500" />
            <h2 className="text-xl font-semibold">Current</h2>
          </div>
          <div className="text-3xl font-bold">10A</div>
          <div className="text-sm text-muted-foreground">Peak: 15A</div>
        </div>

        {/* Temperature Card */}
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Thermometer className="h-5 w-5 text-red-500" />
            <h2 className="text-xl font-semibold">Temperature</h2>
          </div>
          <div className="text-3xl font-bold">35°C</div>
          <div className="text-sm text-muted-foreground">Critical: {'>'} 50°C</div>
        </div>
      </div>

      {/* Grid Metrics Chart */}
      <div className="p-6 rounded-lg bg-card border border-border">
        <h2 className="text-xl font-semibold mb-4">Grid Metrics Over Time</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="voltage" stroke="#EAB308" name="Voltage (V)" />
              <Line type="monotone" dataKey="current" stroke="#3B82F6" name="Current (A)" />
              <Line type="monotone" dataKey="temperature" stroke="#EF4444" name="Temperature (°C)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 