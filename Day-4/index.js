import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { login, register } from './Controllers/User.controller.js';
import morgan from 'morgan';

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("Working..")
})

const registerMiddleware = (req, res, next) => {
    const { name, number, email, password } = req.body;
    if (!name) return res.send("Name is required from middleware!")
    if (!number) return res.send("Number is required from middleware!")
    if (!email) return res.send("Email is required from middleware!")
    if (!password) return res.send("Password is required from middleware!")
    next();
}

const loginMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    if (!email) return res.send("Email is required!")
    if (!password) return res.send("Password is required!")
    next();
}

app.post('/register', registerMiddleware, register)
app.post('/login', loginMiddleware, login)

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to DB")
}).catch((error) => {
    console.log("Error while connecting mongodb", error)
})

app.listen(8001, () => {
    console.log("Server is listening on port 3000")
})
