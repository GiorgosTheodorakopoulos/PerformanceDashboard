import { useQuery, useMutation } from '@tanstack/react-query';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { queryClient } from '@/lib/queryClient';
import { mockRecommendations } from '@/lib/mockData';
import { Clock, Check, X } from 'lucide-react';

export default function Recommendations() {
  const { data: recommendations = [] } = useQuery({
    queryKey: ['/api/recommendations'],
    initialData: mockRecommendations,
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number, status: string }) => {
      await fetch(`/api/recommendations/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/recommendations'] });
    },
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">AI Recommendations</h1>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <Card key={rec.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {new Date(rec.timestamp).toLocaleString()}
                  </div>
                  <p className="text-lg">{rec.message}</p>
                  <p className="text-sm text-muted-foreground">
                    Expected impact: {parseFloat(rec.impact).toFixed(1)} tons CO₂ saved
                  </p>
                </div>

                {rec.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600"
                      onClick={() => updateMutation.mutate({ id: rec.id, status: 'accepted' })}
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive"
                      onClick={() => updateMutation.mutate({ id: rec.id, status: 'rejected' })}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                  </div>
                )}

                {rec.status === 'accepted' && (
                  <span className="text-green-600 flex items-center gap-1">
                    <Check className="h-4 w-4" />
                    Accepted
                  </span>
                )}

                {rec.status === 'rejected' && (
                  <span className="text-destructive flex items-center gap-1">
                    <X className="h-4 w-4" />
                    Declined
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}