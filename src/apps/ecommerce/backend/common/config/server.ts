import * as core from 'express-serve-static-core';
import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import * as http from 'http';
import "reflect-metadata";

dotenv.config();

import { registerRoutes } from '../../routes';

export class Server {
  private express: core.Express;
  readonly port: string;
  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    // Configura el middleware de bodyParser
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    // Configura el middleware de helmet
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    // Configura el middleware de morgan
    this.express.use(morgan('combined'));

    const router = Router();
    // Configura el middleware de CORS
    router.use(cors());
    router.use(errorHandler());

    this.express.use(router);

    registerRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen (): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.info(
          `Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        );
        console.info('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer () {
    return this.httpServer;
  }

  async stop (): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
