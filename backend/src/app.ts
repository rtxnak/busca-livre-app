import * as express from 'express';

import connectToDatabase from './database/connection';

class App {
  public app: express.Application

  constructor() {
    this.app = express.default();
    this.config();
    this.routes();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    connectToDatabase();
    this.app.listen(PORT);
    console.log(`Server is running at http://localhost:${PORT}`);
  }

  private routes(): void {
    // this.app.use('/');
  }
}

export { App };
