import type { Recommendation } from '@shared/schema';

export const mockRecommendations: Recommendation[] = [
  {
    id: 1,
    timestamp: new Date(),
    message: "Decrease fossil generator output to 40% to optimize costs",
    status: "pending",
    impact: "2.5",
  },
  {
    id: 2,
    timestamp: new Date(),
    message: "Charge battery to 80% before peak demand period",
    status: "accepted",
    impact: "1.8",
  },
  {
    id: 3,
    timestamp: new Date(),
    message: "Schedule maintenance for solar panels to improve efficiency",
    status: "rejected",
    impact: "3.2",
  },
];