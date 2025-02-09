import { Activity, Battery, Cloud, Cpu, Droplets, Leaf, Sun, Wind, AlertTriangle } from 'lucide-react';
import EcoMetrics from '@/components/EcoMetrics';

const PerformanceChart = () => (
  <div className="p-6 rounded-lg border border-border bg-card">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Energy Performance</h3>
      <select className="px-2 py-1 rounded border border-border bg-background">
        <option>Last 24 hours</option>
        <option>Last week</option>
        <option>Last month</option>
      </select>
    </div>
    <div className="h-[300px] bg-accent/10 rounded flex items-end p-4">
      {/* Mock chart data */}
      <div className="relative flex-1 h-full">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="absolute bottom-0" style={{ left: `${(i / 23) * 100}%`, height: '100%' }}>
            <div 
              className="absolute w-1 bg-primary rounded-t opacity-70"
              style={{ 
                height: `${Math.random() * 40 + 40}%`,
                bottom: 0
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ResourceMetric = ({ icon: Icon, label, value, unit, trend }: any) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div className="flex items-baseline justify-between">
      <div>
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm text-muted-foreground ml-1">{unit}</span>
      </div>
      <span className={`text-sm ${trend >= 0 ? 'text-success-dark' : 'text-destructive'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

const StatusCard = ({ title, value, description, icon: Icon }: any) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const EmissionsCard = () => (
  <div className="p-6 rounded-lg border border-border bg-card">
    <h2 className="text-xl font-semibold mb-6">Current Emissions</h2>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-muted-foreground">Emissions Rate</span>
          <span className="font-medium">134.5 kg CO₂/hour</span>
        </div>
        <div className="h-2 bg-primary/20 rounded-full">
          <div className="h-full w-3/4 bg-primary rounded-full" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground">Cost per MWh</span>
        <span className="text-2xl font-bold">$55.53</span>
      </div>
    </div>
  </div>
);

const SystemHealthCard = () => (
  <div className="p-6 rounded-lg border border-border bg-card">
    <h2 className="text-xl font-semibold mb-6">System Health</h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Battery className="h-5 w-5 text-primary" />
          <span>Battery Status</span>
        </div>
        <span className="px-2 py-1 text-sm rounded-full bg-red-100 text-red-700">0.3% SoC</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Sun className="h-5 w-5 text-primary" />
          <span>Solar System</span>
        </div>
        <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-700">Operational</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Wind className="h-5 w-5 text-primary" />
          <span>Wind Turbines</span>
        </div>
        <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-700">Operational</span>
      </div>
      <div className="flex items-center gap-2 text-red-500 mt-4">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-sm">System warnings detected</span>
      </div>
    </div>
  </div>
);

const EnergyFlowCard = () => (
  <div className="p-6 rounded-lg border border-border bg-card">
    <h2 className="text-xl font-semibold mb-6">Energy Flow</h2>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-muted">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 4v16H4V4h16zM3 7h18M7 4v3M17 4v3" />
            </svg>
          </div>
          <div>
            <div className="font-medium">Fossil</div>
            <div className="text-sm text-muted-foreground">37.9 kW</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-muted">
            <Sun className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-medium">Renewable</div>
            <div className="text-sm text-muted-foreground">65.7 kW</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-muted">
            <Battery className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-medium">Battery</div>
            <div className="text-sm text-muted-foreground">-18.6 kW</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">85.0</div>
          <div className="text-sm text-muted-foreground">Total kW</div>
        </div>
      </div>
    </div>
  </div>
);

const PowerDistributionCard = () => (
  <div className="p-6 rounded-lg border border-border bg-card">
    <h2 className="text-xl font-semibold mb-6">Power Distribution</h2>
    <div className="h-[200px] relative">
      {/* Scatter plot points */}
      <div className="absolute h-2 w-2 rounded-full bg-primary" style={{ left: '50%', top: '20%' }} />
      <div className="absolute h-2 w-2 rounded-full bg-primary" style={{ left: '50%', top: '30%' }} />
      <div className="absolute h-2 w-2 rounded-full bg-primary" style={{ left: '50%', top: '70%' }} />
      {/* Grid lines */}
      <div className="absolute inset-0 border-l border-dashed border-border" style={{ left: '50%' }} />
      <div className="absolute inset-0 grid grid-cols-1 gap-6">
        <div className="border-t border-dashed border-border" />
        <div className="border-t border-dashed border-border" />
        <div className="border-t border-dashed border-border" />
      </div>
      {/* Y-axis labels */}
      <div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-sm text-muted-foreground">
        <span>120</span>
        <span>90</span>
        <span>60</span>
        <span>30</span>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your eco performance overview</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
          <Activity className="h-4 w-4" />
          <span className="text-sm font-medium">System Healthy</span>
        </div>
      </div>

      {/* Key Metrics */}
      <EcoMetrics />

      {/* Performance Chart */}
      <PerformanceChart />

      {/* Resource Usage */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ResourceMetric
          icon={Battery}
          label="Power Usage"
          value="2.4"
          unit="kW"
          trend={-5.2}
        />
        <ResourceMetric
          icon={Cpu}
          label="System Load"
          value="68"
          unit="%"
          trend={2.1}
        />
        <ResourceMetric
          icon={Cloud}
          label="Carbon Offset"
          value="12.5"
          unit="tons"
          trend={8.4}
        />
        <ResourceMetric
          icon={Droplets}
          label="Water Usage"
          value="845"
          unit="L"
          trend={-3.2}
        />
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatusCard
          icon={Sun}
          title="Solar Generation"
          value="4.2 MWh"
          description="15% increase from yesterday"
        />
        <StatusCard
          icon={Wind}
          title="Wind Power"
          value="2.8 MWh"
          description="Optimal wind conditions"
        />
        <StatusCard
          icon={Leaf}
          title="Environmental Impact"
          value="32% Reduced"
          description="Carbon footprint this month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmissionsCard />
        <SystemHealthCard />
        <EnergyFlowCard />
        <PowerDistributionCard />
      </div>
    </div>
  );
}