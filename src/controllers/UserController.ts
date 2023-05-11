import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UserController {
  constructor(private userService: UserService) { }

  list = async (req: Request, res: Response) => {
    const users = await this.userService.list();
    res.send(users);
  };

  get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.get(id);
    res.send(user);
  };

  create = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await this.userService.create(name, email);
    res.send(user);
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await this.userService.update(id, name, email);
    res.send(user);
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.userService.delete(id);
    res.send('Usuario eliminado correctamente');
  };
}

export default UserController;