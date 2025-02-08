import { Activity, CheckCircle, AlertTriangle, XCircle, Server, Cpu, HardDrive, Network } from 'lucide-react';

interface HealthStatusProps {
  status: 'healthy' | 'warning' | 'critical';
  component: string;
  metric: string;
  details: string;
}

const HealthStatus = ({ status, component, metric, details }: HealthStatusProps) => {
  const statusConfig = {
    healthy: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50' },
    warning: { icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    critical: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="p-4 rounded-lg border border-border bg-card">
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-full ${statusConfig[status].bg}`}>
          <StatusIcon className={`h-6 w-6 ${statusConfig[status].color}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{component}</h3>
            <span className="text-sm text-muted-foreground">{metric}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{details}</p>
        </div>
      </div>
    </div>
  );
};

const SystemMetric = ({ icon: Icon, label, value, trend }: any) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="h-5 w-5 text-primary" />
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div className="flex items-baseline justify-between">
      <span className="text-2xl font-bold">{value}</span>
      <span className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

export default function SystemHealth() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">System Health</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Overall Status:</span>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700">
            <Activity className="h-4 w-4" />
            <span className="font-medium">98% Healthy</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SystemMetric
          icon={Server}
          label="Server Availability"
          value="99.9%"
          trend={0.5}
        />
        <SystemMetric
          icon={Cpu}
          label="CPU Usage"
          value="45%"
          trend={-2.3}
        />
        <SystemMetric
          icon={HardDrive}
          label="Disk Space"
          value="234GB"
          trend={-5.2}
        />
        <SystemMetric
          icon={Network}
          label="Network Latency"
          value="24ms"
          trend={1.8}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Subsystem Status</h2>
          <div className="space-y-3">
            <HealthStatus
              status="healthy"
              component="Main Server"
              metric="Uptime: 99.9%"
              details="All systems operating normally"
            />
            <HealthStatus
              status="warning"
              component="Database"
              metric="Usage: 85%"
              details="High memory usage - Optimization recommended"
            />
            <HealthStatus
              status="healthy"
              component="Network"
              metric="Latency: 24ms"
              details="Stable network performance"
            />
            <HealthStatus
              status="critical"
              component="Backup System"
              metric="Last Backup: 48h ago"
              details="Last backup failed - Check required"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Events</h2>
          <div className="space-y-3">
            {[
              {
                time: '10:23',
                event: 'Automatic restart of metrics service',
                type: 'info'
              },
              {
                time: '09:45',
                event: 'High CPU usage on Server 2',
                type: 'warning'
              },
              {
                time: '09:30',
                event: 'System update completed successfully',
                type: 'success'
              },
              {
                time: '09:15',
                event: 'Backup failure on secondary system',
                type: 'error'
              },
            ].map((event, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className={`w-2 h-2 rounded-full ${
                  event.type === 'info' ? 'bg-blue-500' :
                  event.type === 'warning' ? 'bg-yellow-500' :
                  event.type === 'success' ? 'bg-green-500' :
                  'bg-red-500'
                }`} />
                <span className="text-sm font-medium text-muted-foreground">{event.time}</span>
                <span className="text-sm flex-1">{event.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 