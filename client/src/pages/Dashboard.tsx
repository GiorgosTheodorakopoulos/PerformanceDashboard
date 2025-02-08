import { useEffect } from 'react';
import { useWebSocketStore } from '@/lib/websocket';
import EmissionsCard from '@/components/EmissionsCard';
import PowerGraph from '@/components/PowerGraph';
import SystemHealth from '@/components/SystemHealth';
import EnergyFlow from '@/components/EnergyFlow';

export default function Dashboard() {
  const { latestReading, connect, disconnect } = useWebSocketStore();

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  if (!latestReading) {
    return (
      <div className="p-6">
        <div className="text-center text-muted-foreground">
          Connecting to real-time data...
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EmissionsCard 
          emissionsRate={parseFloat(latestReading.emissions_rate)} 
          costPerMwh={parseFloat(latestReading.cost_per_mwh)} 
        />
        <SystemHealth 
          batterySoc={parseFloat(latestReading.battery_soc)} 
          hasWarnings={parseFloat(latestReading.battery_soc) < 20} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EnergyFlow 
          fossilPower={parseFloat(latestReading.fossil_power)}
          renewablePower={parseFloat(latestReading.renewable_power)}
          batteryPower={parseFloat(latestReading.battery_power)}
        />
        <PowerGraph data={[latestReading]} />
      </div>
    </div>
  );
}