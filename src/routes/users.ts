import Router from 'express-promise-router';
import { container } from 'tsyringe';
import { UserController } from "../controllers/UserController";

const router = Router();

const controller = container.resolve<UserController>('UserController');

router.get('/', controller.list);

export default router;