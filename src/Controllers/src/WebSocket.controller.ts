// node_modules
import { Server } from 'http';
import WebSocket from 'ws';

// middlewares
import Middlewares from '@src-path/Middlewares';

interface ICustomWebSocketData extends WebSocket {
  userId: string;
  isAlive: boolean;
}
// [Under Development]
const WebSocketController = async (httpServer: Server) => {
  const webSocketServer = new WebSocket.Server({
    noServer: true,
    path: '/ws',
  });

  let rooms: { [key: string]: string[] } = { public: [] };

  const leave = (room: string, userId: string) => {
    rooms[room] = rooms[room].filter((value) => {
      return value != userId;
    });
  };

  Middlewares.CheckSession.WebSocket(httpServer, webSocketServer);

  function heartbeat(this: WebSocket) {
    Object.assign(this, { isAlive: true });
  }

  webSocketServer.on(
    'connection',
    (websocketConnection: ICustomWebSocketData, connectionRequest) => {
      Object.assign(websocketConnection, { isAlive: true });

      websocketConnection.on('pong', heartbeat);

      rooms.public.push(websocketConnection.userId);

      websocketConnection.on('message', (data) => {
        console.log(JSON.stringify(rooms));
        console.log(data.toString());
        websocketConnection.send(data.toString());
      });

      websocketConnection.on('close', () => {
        // for each room, remove the closed socket
        Object.keys(rooms).forEach((room) =>
          leave(room, websocketConnection.userId)
        );
      });
    }
  );

  const checkConnectionsInterval = setInterval(function ping() {
    webSocketServer.clients.forEach(function each(ws) {
      const customWs = ws as ICustomWebSocketData;
      if (customWs.isAlive === false) return ws.terminate();

      customWs.isAlive = false;
      ws.ping();
    });
  }, 30000);

  webSocketServer.on('close', () => {
    clearInterval(checkConnectionsInterval);
  });

  return webSocketServer;
};

export default WebSocketController;
