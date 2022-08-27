import express, { Express } from 'express';
import cors from 'cors';
import db from './database/db';
import router from './routes';

class App {
  public app: Express = express();

  constructor() {
    this.app.use(express.json());
    this.app.use(cors());
    this.routes();
  }

  private routes = () => {
    this.app.use(router);
  };

  public start = (PORT: string | number): void => {
    this.app.listen(PORT, async () => {
      await db
        .sync()
        .then(() => console.log(`Running on: http://localhost:${PORT}`))
        .catch((err) => console.log('Unable to connect to the database:', err));
    });
  };
}

export default App;
