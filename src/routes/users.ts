import Router from 'express-promise-router';
import container from '../config'
import UserController from "../controllers/UserController";

const router = Router();

const controller: UserController = container.get('App.UserController');

router.get('/', controller.list.bind(controller));

export default router;