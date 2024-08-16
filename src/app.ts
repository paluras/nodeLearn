import express, { NextFunction, Request, Response } from 'express'
import { taskRouter } from './routes/tasks';
import { connectDB } from './db/connection'
require('dotenv').config()

const app = express();
const PORT: number = 5000;


const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);

    }
}

app.use(express.static('./public'))


// middleware

app.use(express.json())


// routes

app.use('/api/v1/tasks', taskRouter)



startDB()

export { }