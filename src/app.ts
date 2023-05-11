import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import usersRouter from './routes/users';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Crea una instancia de Express
const app = express();

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
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

app.use('/users', usersRouter);

// Define el puerto en el que se ejecutará la aplicación
const port = process.env.PORT || 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port} accede a: http://localhost:${port}`);
});
