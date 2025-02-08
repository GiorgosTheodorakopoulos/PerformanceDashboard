import { Sun, Wind, Droplets, Factory, Home, Building2, Zap } from 'lucide-react';

const EnergySource = ({ icon: Icon, label, value, percentage, color }: any) => (
  <div className={`p-4 rounded-lg border border-border bg-card relative overflow-hidden`}>
    <div className={`absolute inset-0 ${color} opacity-10`} />
    <div className="relative">
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm text-muted-foreground">kW/h</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="w-full bg-background rounded-full h-2 mr-2">
          <div
            className={`h-full rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
    </div>
  </div>
);

const ConsumptionPoint = ({ icon: Icon, label, value, trend }: any) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="h-6 w-6 text-primary" />
      <span className="font-medium">{label}</span>
    </div>
    <div className="flex items-baseline justify-between">
      <div>
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm text-muted-foreground ml-1">kW/h</span>
      </div>
      <span className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

const FlowDiagram = () => (
  <div className="p-6 rounded-lg border border-border bg-card">
    <h3 className="text-lg font-semibold mb-4">Energy Flow Diagram</h3>
    <div className="relative h-[400px] bg-accent/10 rounded-lg p-4">
      {/* Here would be a real interactive flow diagram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-muted-foreground">Interactive Energy Flow Diagram</span>
      </div>
    </div>
  </div>
);

export default function EnergyFlow() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Energy Flow</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Total Generation:</span>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700">
            <Zap className="h-4 w-4" />
            <span className="font-medium">4.2 MW/h</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <EnergySource
          icon={Sun}
          label="Solar Energy"
          value="2.1"
          percentage={50}
          color="bg-yellow-500"
        />
        <EnergySource
          icon={Wind}
          label="Wind Energy"
          value="1.5"
          percentage={35}
          color="bg-blue-500"
        />
        <EnergySource
          icon={Droplets}
          label="Hydroelectric"
          value="0.4"
          percentage={10}
          color="bg-cyan-500"
        />
        <EnergySource
          icon={Factory}
          label="Other Sources"
          value="0.2"
          percentage={5}
          color="bg-purple-500"
        />
      </div>

      <FlowDiagram />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ConsumptionPoint
              icon={Building2}
              label="Commercial Buildings"
              value="1.8"
              trend={2.5}
            />
            <ConsumptionPoint
              icon={Home}
              label="Residential Use"
              value="1.2"
              trend={-1.8}
            />
            <ConsumptionPoint
              icon={Factory}
              label="Industrial Use"
              value="0.8"
              trend={5.2}
            />
            <ConsumptionPoint
              icon={Zap}
              label="Public Infrastructure"
              value="0.4"
              trend={-0.5}
            />
          </div>
        </div>

        <div className="p-4 rounded-lg border border-border bg-card">
          <h3 className="text-lg font-semibold mb-4">Performance Statistics</h3>
          <div className="space-y-4">
            {[
              { label: 'Network Losses', value: '3.2%' },
              { label: 'Conversion Efficiency', value: '94.8%' },
              { label: 'Storage Usage', value: '22%' },
              { label: 'CO2 Savings', value: '850kg' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 