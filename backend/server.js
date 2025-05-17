import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task-routes.js';
import './models/Task.js';
import sequelize from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
