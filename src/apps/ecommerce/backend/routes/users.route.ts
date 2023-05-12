import { Router } from 'express';
import { UserController } from "../users/UserController";
import { container } from 'tsyringe';

const path = 'users'

export const register = (router: Router) => {
  const userController = container.resolve(UserController);

  router.get(`/${path}/`, (req, res) => userController.list(req, res));
};
