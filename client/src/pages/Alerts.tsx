import { AlertTriangle, Bell, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const mockAlerts = [
  {
    id: 1,
    type: 'critical',
    message: 'Voltage spike detected in Sector A',
    timestamp: '2024-02-08T14:30:00',
    status: 'active'
  },
  {
    id: 2,
    type: 'warning',
    message: 'High power consumption in Building B',
    timestamp: '2024-02-08T13:15:00',
    status: 'active'
  },
  {
    id: 3,
    type: 'info',
    message: 'Routine maintenance scheduled for tomorrow',
    timestamp: '2024-02-08T12:00:00',
    status: 'resolved'
  }
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'critical':
      return <XCircle className="h-5 w-5 text-destructive" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-warning" />;
    case 'info':
      return <AlertCircle className="h-5 w-5 text-info" />;
    default:
      return <Bell className="h-5 w-5" />;
  }
};

const getAlertClass = (type: string) => {
  switch (type) {
    case 'critical':
      return 'border-l-4 border-l-destructive bg-destructive/10';
    case 'warning':
      return 'border-l-4 border-l-warning bg-warning/10';
    case 'info':
      return 'border-l-4 border-l-info bg-info/10';
    default:
      return 'border-l-4 border-l-primary';
  }
};

export default function Alerts() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Alerts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="p-6 rounded-lg bg-card border border-border">
          <h2 className="text-xl font-semibold mb-2">Total Alerts</h2>
          <div className="text-3xl font-bold">3</div>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <h2 className="text-xl font-semibold mb-2">Critical</h2>
          <div className="text-3xl font-bold text-destructive">1</div>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <h2 className="text-xl font-semibold mb-2">Warnings</h2>
          <div className="text-3xl font-bold text-warning">1</div>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <h2 className="text-xl font-semibold mb-2">Resolved</h2>
          <div className="text-3xl font-bold text-success">1</div>
        </div>
      </div>

      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg ${getAlertClass(alert.type)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getAlertIcon(alert.type)}
                <div>
                  <p className="font-semibold">{alert.message}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(alert.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {alert.status === 'resolved' ? (
                  <span className="flex items-center gap-1 text-sm text-success">
                    <CheckCircle className="h-4 w-4" />
                    Resolved
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-sm text-warning">
                    <AlertCircle className="h-4 w-4" />
                    Active
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 