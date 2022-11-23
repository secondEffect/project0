import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import authRouter from './src/router/auth';
import { config } from './src/util/config';

const app = express();

app.use(helmet());

app.use(morgan('tiny'));

app.use(cors());

app.use(express.json());

// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log(req);
//   res.send({ message: 'Hello World' });
// });

app.use('/auth', authRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.sendStatus(500);
});

app.listen(config.host.port, () => {
  console.log('Started Server');
});
