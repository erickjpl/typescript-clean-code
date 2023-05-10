import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ha ocurrido un error al obtener los usuarios');
  }
});

function getUsers(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = ['Juan', 'María', 'Pedro'];
      resolve(users);
    }, 1000);
  });
}

export default router;