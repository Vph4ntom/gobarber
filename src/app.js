import express from 'express';
import routes from './routes';

/**
 * Percorre todos os modelos e instancia cada um, 
 * arquivo /database/index.js
 */
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
