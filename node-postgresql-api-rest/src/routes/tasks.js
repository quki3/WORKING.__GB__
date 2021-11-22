import { Router } from 'express';
import { updateProject } from '../controllers/project.controller';
const router = Router();

import { createTask,deleteTask,getOneTask,getTasks, getTasksByProject, updateTask } from '../controllers/task.controller'

// /api/tasks/
router.post('/',createTask);
router.get('/',getTasks);

// /api/tasks/:id
router.delete('/:id',deleteTask);
router.put('/:id',updateTask);
router.get('/:id',getOneTask)

// /api/tasks/project/:projectid
router.get('/project/:projectid',getTasksByProject)

export default router;