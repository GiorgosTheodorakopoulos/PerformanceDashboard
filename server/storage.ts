import {
  type EnergyReading,
  type Recommendation,
  type InsertEnergyReading,
  type InsertRecommendation,
} from "@shared/schema";

export interface IStorage {
  // Energy readings
  getLatestReading(): Promise<EnergyReading | undefined>;
  getReadings(start: Date, end: Date): Promise<EnergyReading[]>;
  addReading(reading: InsertEnergyReading): Promise<EnergyReading>;
  
  // Recommendations
  getRecommendations(): Promise<Recommendation[]>;
  addRecommendation(rec: InsertRecommendation): Promise<Recommendation>;
  updateRecommendation(id: number, status: string): Promise<Recommendation | undefined>;
}

export class MemStorage implements IStorage {
  private readings: Map<number, EnergyReading>;
  private recommendations: Map<number, Recommendation>;
  private readingId: number;
  private recId: number;

  constructor() {
    this.readings = new Map();
    this.recommendations = new Map();
    this.readingId = 1;
    this.recId = 1;
  }

  async getLatestReading(): Promise<EnergyReading | undefined> {
    const readings = Array.from(this.readings.values());
    if (readings.length === 0) return undefined;
    return readings.reduce((latest, current) => 
      latest.timestamp > current.timestamp ? latest : current
    );
  }

  async getReadings(start: Date, end: Date): Promise<EnergyReading[]> {
    return Array.from(this.readings.values()).filter(
      reading => reading.timestamp >= start && reading.timestamp <= end
    );
  }

  async addReading(reading: InsertEnergyReading): Promise<EnergyReading> {
    const id = this.readingId++;
    const newReading = { ...reading, id };
    this.readings.set(id, newReading);
    return newReading;
  }

  async getRecommendations(): Promise<Recommendation[]> {
    return Array.from(this.recommendations.values());
  }

  async addRecommendation(rec: InsertRecommendation): Promise<Recommendation> {
    const id = this.recId++;
    const newRec = { ...rec, id };
    this.recommendations.set(id, newRec);
    return newRec;
  }

  async updateRecommendation(id: number, status: string): Promise<Recommendation | undefined> {
    const rec = this.recommendations.get(id);
    if (!rec) return undefined;
    const updated = { ...rec, status };
    this.recommendations.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
