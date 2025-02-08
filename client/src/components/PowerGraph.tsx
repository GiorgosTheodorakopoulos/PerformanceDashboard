import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EnergyReading } from '@shared/schema';

interface PowerGraphProps {
  data: EnergyReading[];
}

export default function PowerGraph({ data }: PowerGraphProps) {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Power Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="timestamp" 
              tickFormatter={(time) => new Date(time).toLocaleTimeString()}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(label) => new Date(label).toLocaleString()}
              formatter={(value: number) => [`${value.toFixed(1)} kW`]}
            />
            <Area
              type="monotone"
              dataKey="fossil_power"
              stackId="1"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              name="Fossil"
            />
            <Area
              type="monotone"
              dataKey="renewable_power"
              stackId="1"
              stroke="hsl(var(--chart-2))"
              fill="hsl(var(--chart-2))"
              name="Renewable"
            />
            <Area
              type="monotone"
              dataKey="battery_power"
              stackId="1"
              stroke="hsl(var(--chart-3))"
              fill="hsl(var(--chart-3))"
              name="Battery"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
