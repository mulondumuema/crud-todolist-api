import { Router } from 'express';
import { createTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/read');

router.patch('/update:id');

router.delete('/delete:id');

export default router;