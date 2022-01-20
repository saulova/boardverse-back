// node_modules
import { Server } from 'http';
import { WebSocketServer } from 'ws';
import queryString from 'query-string';

// utils
import Utils from '@src-path/Utils';

const WebSocket = (server: Server, webSocketServer: WebSocketServer) => {
  const envVars = Utils.EnvVars();

  server.on('upgrade', async (request, socket, head) => {
    let token = request.headers.cookie;

    if (token) {
      token = queryString.parse(token).token as string;
    }

    if (!(envVars.nodeEnv == 'production')) {
      let params;

      if (request.url) {
        params = request.url.split('?')[1];
      }

      if (params) {
        token = queryString.parse(params).token as string;
      }
    }

    if (!token) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    const jwtData = await Utils.Jwt.Check({ token: token });

    if (jwtData.error) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    if (!jwtData.payload.sub) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    try {
      webSocketServer.handleUpgrade(request, socket, head, (websocket) => {
        Object.assign(websocket, { userId: jwtData.payload.sub });
        webSocketServer.emit('connection', websocket, request);
      });
    } catch {
      socket.write('HTTP/1.1 500 Internal Server Error\r\n\r\n');
      socket.destroy();
    }
  });
};

export default WebSocket;
