import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post(
  '/register',
  UserController.create,
);

router.get(
  '/users',
  UserController.findAll,
);

router.get(
  '/user/:id',
  UserController.findOne,
);

export default router;
