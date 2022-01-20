// node_modules
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';

// routes
import Routes from '@src-path/routes';

// Utils
import Utils from '@src-path/Utils';

const envVars = Utils.EnvVars();

let host: string = '0.0.0.0';
let port: number = 3000;

if (envVars.host) {
  host = envVars.host;
}

if (envVars.port) {
  port = parseInt(envVars.port);
}

const allowedOrigins = ['http://127.0.0.1:3000', 'http://192.168.100.6:3000'];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

const app = express();
const httpServer = createServer(app);

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(Routes({ server: httpServer }));

httpServer.listen(port, host, () =>
  console.log('[BOARDVERSE 🎲 BACK-END]: Running on http://%s:%d', host, port)
);
