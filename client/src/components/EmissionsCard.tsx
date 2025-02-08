import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface EmissionsCardProps {
  emissionsRate: number;
  costPerMwh: number;
}

export default function EmissionsCard({ emissionsRate, costPerMwh }: EmissionsCardProps) {
  const maxEmissions = 500; // kg CO2/hour
  const progress = (emissionsRate / maxEmissions) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Emissions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Emissions Rate</span>
              <span className="font-medium">{emissionsRate.toFixed(1)} kg CO₂/hour</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-muted-foreground">Cost per MWh</span>
            <span className="text-2xl font-bold">${costPerMwh.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
