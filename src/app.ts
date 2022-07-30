import express, { Request, Response, NextFunction } from 'express';
import productsRoute from './routes/productsRoute';
import usersRoute from './routes/usersRoute';

require('express-async-errors');

const app: express.Application = express();

app.use(express.json());

app.use(productsRoute);

app.use(usersRoute);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  switch (name) {
    default: res.status(500).json({ message });
  }
});

export default app;
