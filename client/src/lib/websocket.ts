import { create } from 'zustand';
import type { EnergyReading } from '@shared/schema';

interface WebSocketStore {
  latestReading: EnergyReading | null;
  socket: WebSocket | null;
  connect: () => void;
  disconnect: () => void;
}

export const useWebSocketStore = create<WebSocketStore>((set) => ({
  latestReading: null,
  socket: null,
  connect: () => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    const socket = new WebSocket(wsUrl);

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "reading") {
        set({ latestReading: message.data });
      }
    };

    set({ socket });
  },
  disconnect: () => {
    set((state) => {
      state.socket?.close();
      return { socket: null };
    });
  },
}));
