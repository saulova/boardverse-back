// node_modules
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// services
import Services from '@src-path/Services';

dotenv.config();

const Login = async (req: Request, res: Response) => {
  const user = await Services.User.Login(req.body);

  if (user.error) {
    return res
      .status(user.error.statusCode)
      .json({ error: user.error.content });
  }

  if (process.env.NODE_ENV == 'production') {
    return res
      .status(200)
      .cookie('token', user.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
      })
      .json({ username: user.username });
  }

  return res
    .status(200)
    .json({ username: user.username, token: 'Bearer ' + user.token });
};

export default Login;
