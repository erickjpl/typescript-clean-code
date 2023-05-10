import express from "express";
import usersRouter from './routes/users';

const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log("El servidor está funcionando en el puerto 3000.");
});