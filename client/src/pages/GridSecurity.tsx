import { Shield, AlertTriangle } from 'lucide-react';

export default function GridSecurity() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Grid Security</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Security Status Card */}
        <div className="p-6 rounded-lg bg-card border border-border">
          <h2 className="text-xl font-semibold mb-4">Security Status</h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>System Secure</span>
          </div>
        </div>

        {/* Threat Detection Card */}
        <div className="p-6 rounded-lg bg-card border border-border">
          <h2 className="text-xl font-semibold mb-4">Threat Detection</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Active Threats</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Monitored Points</span>
              <span className="font-semibold">127</span>
            </div>
          </div>
        </div>

        {/* Recent Alerts Card */}
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-semibold">Recent Alerts</h2>
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">No recent security alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
} 