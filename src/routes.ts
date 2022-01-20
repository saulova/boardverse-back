// node_modules
import express, { Router } from 'express';
import { Server } from 'http';

// controllers
import Controllers from '@src-path/Controllers';

// middlewares
import Middlewares from '@src-path/Middlewares';

interface IRoutesProps {
  server: Server;
}

const Routes = ({ server }: IRoutesProps) => {
  const router = Router();
  // Middlewares.CheckSession.Api,
  // Get Methods
  router.get('/', Controllers.Home);
  router.use('/static', express.static('src/Public'));

  // Post Methods
  router.post('/login', Controllers.Login);
  router.post(
    '/sign-up',
    Middlewares.CheckRequestBody.SignUp,
    Controllers.SignUp
  );

  // WebSocket
  Controllers.WebSocketController(server);

  return router;
};

export default Routes;
