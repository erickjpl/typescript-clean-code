import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import "reflect-metadata";

import { registerRoutes } from './routes';
// import usersRouter from './routes/users';

// import { container } from 'tsyringe';
// import BookController from './book/BookController';



// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Crea una instancia de Express
const app = express();
const router = Router();

// Configura el middleware de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el middleware de CORS
app.use(cors());

// Configura el middleware de helmet
app.use(helmet());

// Configura el middleware de morgan
app.use(morgan('combined'));

// Configura las rutas de la aplicación
router.use(errorHandler());
app.use(router);
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

// app.use('/users', usersRouter);

// app.use('/books', container.resolve(BookController).routes());

registerRoutes(router);

router.use((err: Error, req: Request, res: Response, next: Function) => {
  console.log(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
});

// Define el puerto en el que se ejecutará la aplicación
const port = process.env.PORT || 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port} accede a: http://localhost:${port}`);
});
