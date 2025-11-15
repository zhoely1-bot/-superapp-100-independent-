import { Server } from 'ws';
import { insertMessage } from './db';

const PORT = 8080;

export const startWSServer = () => {
  const server = new Server({ port: PORT });

  server.on('connection', (ws, req) => {
    const clientIp = req.socket.remoteAddress;

    ws.on('message', async (data) => {
      try {
        const msg = JSON.parse(data);
        await insertMessage(msg.fromId, msg.toId, msg.body);
        ws.send(JSON.stringify({ status: 'delivered', id: msg.id }));
      } catch (e) {
        ws.send(JSON.stringify({ error: 'invalid message' }));
      }
    });

    ws.send(JSON.stringify({ type: 'welcome', message: 'Connected to P2P chat' }));
  });

  console.log(`[WebSocket] Server listening on ws://localhost:${PORT}`);
};
