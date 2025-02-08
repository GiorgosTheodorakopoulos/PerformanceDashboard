import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Battery, Sun, Wind, AlertTriangle } from 'lucide-react';

interface SystemHealthProps {
  batterySoc: number;
  hasWarnings: boolean;
}

export default function SystemHealth({ batterySoc, hasWarnings }: SystemHealthProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Battery className="h-5 w-5" />
              <span>Battery Status</span>
            </div>
            <Badge variant={batterySoc > 20 ? "default" : "destructive"}>
              {batterySoc.toFixed(1)}% SoC
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              <span>Solar System</span>
            </div>
            <Badge>Operational</Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="h-5 w-5" />
              <span>Wind Turbines</span>
            </div>
            <Badge>Operational</Badge>
          </div>

          {hasWarnings && (
            <div className="flex items-center gap-2 text-destructive mt-4">
              <AlertTriangle className="h-5 w-5" />
              <span>System warnings detected</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
