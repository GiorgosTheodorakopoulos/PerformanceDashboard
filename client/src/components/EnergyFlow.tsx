import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Battery, Sun, Wind, Factory } from 'lucide-react';

interface EnergyFlowProps {
  fossilPower: number;
  renewablePower: number;
  batteryPower: number;
}

export default function EnergyFlow({ fossilPower, renewablePower, batteryPower }: EnergyFlowProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Energy Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between p-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Factory className="h-8 w-8 text-chart-1" />
              <div>
                <div className="text-sm text-muted-foreground">Fossil</div>
                <div className="font-medium">{fossilPower.toFixed(1)} kW</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Sun className="h-8 w-8 text-chart-2" />
              <div>
                <div className="text-sm text-muted-foreground">Renewable</div>
                <div className="font-medium">{renewablePower.toFixed(1)} kW</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Battery className="h-8 w-8 text-chart-3" />
              <div>
                <div className="text-sm text-muted-foreground">Battery</div>
                <div className="font-medium">{batteryPower.toFixed(1)} kW</div>
              </div>
            </div>
          </div>

          <ArrowRight className="h-16 w-16 text-muted-foreground" />

          <div className="text-center">
            <div className="text-2xl font-bold">
              {(fossilPower + renewablePower + batteryPower).toFixed(1)}
            </div>
            <div className="text-muted-foreground">Total kW</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
