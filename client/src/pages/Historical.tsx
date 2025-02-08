import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/date-picker";
import PowerGraph from '@/components/PowerGraph';
import { addDays } from 'date-fns';
import type { EnergyReading } from '@shared/schema';

export default function Historical() {
  const [dateRange, setDateRange] = useState({
    from: addDays(new Date(), -7),
    to: new Date(),
  });

  const { data: readings = [] } = useQuery({
    queryKey: ['/api/readings', dateRange],
    queryFn: async () => {
      const params = new URLSearchParams({
        start: dateRange.from.toISOString(),
        end: dateRange.to.toISOString(),
      });
      const res = await fetch(`/api/readings?${params}`);
      return res.json() as Promise<EnergyReading[]>;
    },
  });

  const totalEmissions = readings.reduce((sum: number, r: EnergyReading) => 
    sum + parseFloat(r.emissions_rate), 0);
  const avgCost = readings.reduce((sum: number, r: EnergyReading) => 
    sum + parseFloat(r.cost_per_mwh), 0) / readings.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Historical Data</h1>
        <DatePickerWithRange date={dateRange} setDate={setDateRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {totalEmissions.toFixed(1)} kg CO₂
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ${avgCost.toFixed(2)}/MWh
            </div>
          </CardContent>
        </Card>
      </div>

      <PowerGraph data={readings} />
    </div>
  );
}