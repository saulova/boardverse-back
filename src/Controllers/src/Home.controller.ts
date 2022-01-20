import { Request, Response } from 'express';

const Home = (req: Request, res: Response) => {
  res.send('<h1>Hello world!</h1>');
};

export default Home;
