import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post(
  '/register',
  UserController.create,
);

router.get(
  '/',
  UserController.findAll,
);

router.get(
  '/:id',
  UserController.findOne,
);

export default router;
