import express from 'express';
import { login, register } from './controllers/User.controllers.js';
import { addProduct, allProducts } from './controllers/Product.controllers.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Working...");
})

//user routes
app.post('/register', register)
app.post('/login', login)

//product routes
app.post('/add-product', addProduct)
app.get('/all-products', allProducts)

mongoose.connect(process.env.MONGOO_URL).then(() => {
    console.log("connected to DB")
}).catch((error) => {
    console.log("Error while DB connection:", error)
})

app.listen(8001, () => {
    console.log("Server is listening on port 8001")
})
