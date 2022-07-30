import express, { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import productRoute from './routes/productsRoute';

const app: express.Application = express();

app.use(express.json());

app.use(productRoute);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  switch (name) {
    default: res.status(500).json({ message });
  }
});

export default app;
