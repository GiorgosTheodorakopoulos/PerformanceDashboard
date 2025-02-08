import { pgTable, text, serial, integer, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const energyReadings = pgTable("energy_readings", {
  id: serial("id").primaryKey(),
  timestamp: timestamp("timestamp").notNull(),
  fossil_power: decimal("fossil_power").notNull(),
  renewable_power: decimal("renewable_power").notNull(),
  battery_power: decimal("battery_power").notNull(),
  battery_soc: decimal("battery_soc").notNull(),
  emissions_rate: decimal("emissions_rate").notNull(),
  cost_per_mwh: decimal("cost_per_mwh").notNull(),
});

export const recommendations = pgTable("recommendations", {
  id: serial("id").primaryKey(),
  timestamp: timestamp("timestamp").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull(), // pending, accepted, rejected
  impact: decimal("impact").notNull(), // expected CO2 savings
});

export const insertEnergyReadingSchema = createInsertSchema(energyReadings).omit({ id: true });
export const insertRecommendationSchema = createInsertSchema(recommendations).omit({ id: true });

export type EnergyReading = typeof energyReadings.$inferSelect;
export type Recommendation = typeof recommendations.$inferSelect;
export type InsertEnergyReading = z.infer<typeof insertEnergyReadingSchema>;
export type InsertRecommendation = z.infer<typeof insertRecommendationSchema>;
