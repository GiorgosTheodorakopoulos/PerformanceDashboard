import { Leaf, Droplets, Wind, Battery } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
}

const MetricCard = ({ icon, title, value, change }: MetricCardProps) => (
  <div className="bg-card p-4 rounded-lg border border-border">
    <div className="flex items-center gap-3 mb-2">
      <div className="text-primary">{icon}</div>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    </div>
    <div className="flex items-end justify-between">
      <p className="text-2xl font-semibold">{value}</p>
      <span className={`text-sm ${change >= 0 ? 'text-success-dark' : 'text-destructive'}`}>
        {change > 0 ? '+' : ''}{change}%
      </span>
    </div>
  </div>
);

export default function EcoMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        icon={<Leaf className="h-5 w-5" />}
        title="Carbon Offset"
        value="2.4 tons"
        change={12}
      />
      <MetricCard
        icon={<Battery className="h-5 w-5" />}
        title="Energy Saved"
        value="345 kWh"
        change={8}
      />
      <MetricCard
        icon={<Droplets className="h-5 w-5" />}
        title="Water Conserved"
        value="1,200 L"
        change={-3}
      />
      <MetricCard
        icon={<Wind className="h-5 w-5" />}
        title="Clean Energy Usage"
        value="78%"
        change={15}
      />
    </div>
  );
} 