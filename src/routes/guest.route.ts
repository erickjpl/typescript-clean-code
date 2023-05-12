import { Router, Request, Response } from 'express';

export const register = (router: Router) => {
  router.get('/', (req: Request, res: Response) => {
    res.send('¡Hola, mundo!');
  });
};