import express, { Router, RequestHandler, ErrorRequestHandler } from 'express';
import connectToDatabase from './connection';

type Handler = RequestHandler | ErrorRequestHandler;

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }

  public handleError(middleware: Handler) {
    this.app.use(middleware);
  }
}

export default App;
