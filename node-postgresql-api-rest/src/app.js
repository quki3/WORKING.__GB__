import express,{json} from 'express';
import morgan from 'morgan';

//inicializations
const app = express();

//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//middlewares
app.use(morgan('dev'));
app.use(json());

//use routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);

export default app;