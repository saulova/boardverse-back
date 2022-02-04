// node_modules
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';
import { Server as ColyseusServer } from 'colyseus';
import { monitor } from '@colyseus/monitor';
import { WebSocketTransport } from '@colyseus/ws-transport';

// routes
import Routes from '@src-path/routes';

// utils
import Utils from '@src-path/Utils';

// rooms
import Rooms from '@src-path/Colyseus/Rooms';

const envVars = Utils.EnvVars();

let frontUrl: string = 'http://127.0.0.1:3000';
let host: string = '0.0.0.0';
let port: number = 3000;

if (envVars.frontUrl) {
  frontUrl = envVars.frontUrl;
}

if (envVars.host) {
  host = envVars.host;
}

if (envVars.port) {
  port = parseInt(envVars.port);
}

const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  frontUrl,
];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(Routes());
app.use('/colyseus', monitor());

const httpServer = createServer(app);

const gameServer = new ColyseusServer({
  transport: new WebSocketTransport({ server: httpServer }),
});

Rooms(gameServer);

gameServer.listen(port, host);

console.log('[BOARDVERSE 🎲 BACK-END]: Running on http://%s:%d', host, port);
