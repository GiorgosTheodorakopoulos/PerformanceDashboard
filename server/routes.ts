import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";

function broadcastReadings(wss: WebSocketServer, reading: any) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: "reading", data: reading }));
    }
  });
}

export function registerRoutes(app: Express): Server {
  const httpServer = createServer(app);
  const wss = new WebSocketServer({ server: httpServer, path: "/ws" });

  // WebSocket connection handling
  wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("close", () => console.log("Client disconnected"));
  });

  // Mock data generator
  setInterval(async () => {
    const reading = {
      timestamp: new Date(),
      fossil_power: (Math.random() * 100).toString(),
      renewable_power: (Math.random() * 150).toString(),
      battery_power: (Math.random() * 50 - 25).toString(),
      battery_soc: (Math.random() * 100).toString(),
      emissions_rate: (Math.random() * 300).toString(),
      cost_per_mwh: (50 + Math.random() * 30).toString(),
    };
    await storage.addReading(reading);
    broadcastReadings(wss, reading);
  }, 5000);

  // REST endpoints
  app.get("/api/readings/latest", async (req, res) => {
    const reading = await storage.getLatestReading();
    res.json(reading);
  });

  app.get("/api/readings", async (req, res) => {
    const start = new Date(req.query.start as string);
    const end = new Date(req.query.end as string);
    const readings = await storage.getReadings(start, end);
    res.json(readings);
  });

  app.get("/api/recommendations", async (req, res) => {
    const recs = await storage.getRecommendations();
    res.json(recs);
  });

  app.post("/api/recommendations/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await storage.updateRecommendation(parseInt(id), status);
    if (!updated) {
      res.status(404).json({ message: "Recommendation not found" });
      return;
    }
    res.json(updated);
  });

  return httpServer;
}