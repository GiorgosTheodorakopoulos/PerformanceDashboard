import { Battery, Cpu, Thermometer, Wind, Zap, Activity, Cloud, Gauge, AlertTriangle } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'stable';
  color: string;
  subtitle?: string;
}

const MetricCard = ({ title, value, unit, icon, trend, color, subtitle }: MetricCardProps) => (
  <div className={`p-6 rounded-lg border border-border bg-card`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-full ${color}`}>
        {icon}
      </div>
      <span className={`text-sm ${
        trend === 'up' ? 'text-green-500' : 
        trend === 'down' ? 'text-red-500' : 
        'text-yellow-500'
      }`}>
        {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} 
        {trend === 'stable' ? 'Stable' : `${Math.random() * 5 + 1}%`}
      </span>
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-muted-foreground">{unit}</span>
    </div>
    {subtitle && (
      <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
    )}
  </div>
);

const LineChart = () => (
  <div className="h-[300px] p-6 rounded-lg border border-border bg-card">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Generation vs Consumption</h3>
      <select className="px-2 py-1 rounded border border-border bg-background">
        <option>Last 24 hours</option>
        <option>Last week</option>
        <option>Last month</option>
      </select>
    </div>
    <div className="h-[200px] bg-accent/10 rounded flex items-end p-4">
      {/* Mock chart with two lines */}
      <div className="relative flex-1 h-full">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="absolute bottom-0" style={{ left: `${(i / 23) * 100}%`, height: '100%' }}>
            {/* Generation line */}
            <div 
              className="absolute w-1 bg-green-500 rounded-t opacity-70"
              style={{ 
                height: `${Math.random() * 40 + 40}%`,
                bottom: 0
              }}
            />
            {/* Consumption line */}
            <div 
              className="absolute w-1 bg-blue-500 rounded-t opacity-70"
              style={{ 
                height: `${Math.random() * 40 + 30}%`,
                bottom: 0
              }}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center gap-4 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
        <span className="text-sm">Generation</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500 opacity-70" />
        <span className="text-sm">Consumption</span>
      </div>
    </div>
  </div>
);

const StatusGauge = ({ value, max, label, color }: any) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold">{value}%</span>
      </div>
      <div 
        className={`absolute bottom-0 left-0 right-0 h-2 rounded-full bg-border`}
      >
        <div 
          className={`h-full rounded-full ${color}`} 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
    <span className="text-sm text-muted-foreground mt-1">{label}</span>
  </div>
);

export default function RealTimeMetrics() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Real-time Metrics</h1>
          <p className="text-muted-foreground mt-1">Monitor live data and KPIs</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last update: just now</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>

      {/* Basic KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Current Demand"
          value="2.4"
          unit="MW"
          icon={<Zap className="h-6 w-6 text-yellow-500" />}
          trend="up"
          color="bg-yellow-100"
          subtitle="Increased by 15%"
        />
        <MetricCard
          title="Total Generation"
          value="45.8"
          unit="MWh"
          icon={<Activity className="h-6 w-6 text-green-500" />}
          trend="stable"
          color="bg-green-100"
          subtitle="Today"
        />
        <MetricCard
          title="CO₂ Footprint"
          value="850"
          unit="kg"
          icon={<Cloud className="h-6 w-6 text-blue-500" />}
          trend="down"
          color="bg-blue-100"
          subtitle="Last 24 hours"
        />
        <MetricCard
          title="Storage"
          value="78"
          unit="%"
          icon={<Battery className="h-6 w-6 text-purple-500" />}
          trend="up"
          color="bg-purple-100"
          subtitle="Battery capacity"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart />
        
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="text-lg font-semibold mb-6">Energy Source Distribution</h3>
          <div className="space-y-4">
            {[
              { label: 'Solar', value: 45, color: 'bg-yellow-500' },
              { label: 'Wind', value: 30, color: 'bg-blue-500' },
              { label: 'Hydro', value: 15, color: 'bg-cyan-500' },
              { label: 'Storage', value: 10, color: 'bg-purple-500' },
            ].map(({ label, value, color }) => (
              <div key={label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{label}</span>
                  <span className="font-medium">{value}%</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="text-lg font-semibold mb-6">System Status</h3>
          <div className="flex justify-between">
            <StatusGauge 
              value={75} 
              label="Load" 
              color={`bg-${75 > 80 ? 'red' : 75 > 60 ? 'yellow' : 'green'}-500`}
            />
            <StatusGauge 
              value={88} 
              label="Storage" 
              color="bg-blue-500"
            />
            <StatusGauge 
              value={95} 
              label="Performance" 
              color="bg-green-500"
            />
          </div>
        </div>

        <div className="lg:col-span-2 p-6 rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Alerts & Warnings</h3>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
              3 active
            </span>
          </div>
          <div className="space-y-3">
            {[
              { 
                title: 'High Demand',
                message: 'Demand approaching 90% of available generation',
                time: '2 minutes ago',
                type: 'warning'
              },
              {
                title: 'Storage Limit',
                message: 'Storage capacity is above 85%',
                time: '15 minutes ago',
                type: 'info'
              },
              {
                title: 'Wind Generation',
                message: 'Low performance due to weather conditions',
                time: '1 hour ago',
                type: 'warning'
              },
            ].map(({ title, message, time, type }, index) => (
              <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-background">
                <div className={`p-2 rounded-full ${
                  type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <AlertTriangle className={`h-4 w-4 ${
                    type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{title}</h4>
                    <span className="text-xs text-muted-foreground">{time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 