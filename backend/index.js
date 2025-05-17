import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/db';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('DB conectada');
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
})();