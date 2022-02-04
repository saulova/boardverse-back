// node_modules
import { Router } from 'express';

// controllers
import Controllers from '@src-path/Controllers';

// middlewares
import Middlewares from '@src-path/Middlewares';

const Routes = () => {
  const router = Router();

  // Get Methods
  router.get('/', Controllers.Home);

  // Post Methods
  router.post('/login', Controllers.Login);
  router.post(
    '/sign-up',
    Middlewares.CheckRequestBody.SignUp,
    Controllers.SignUp
  );

  return router;
};

export default Routes;
