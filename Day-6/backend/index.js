import express from 'express';
import { getCurrentUser, getCurrentUserWithPass, getSellProducts, login, register, singleSellProducts, updateProfile } from './controllers/User.controllers.js';
import { addProduct, allProducts, updateProduct } from './controllers/Product.controllers.js';
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

app.post("/get-current-user", getCurrentUser)
app.post("/get-current-user-with-pass", getCurrentUserWithPass)

//user routes
app.post('/register', register)
app.post('/login', login)
app.post("/get-sell-products", getSellProducts)
app.post("/update-profile", updateProfile )
app.post("/single-sell-product", singleSellProducts)

//product routes
app.post('/add-product', addProduct)
app.get('/all-products', allProducts)
app.post('/update-product', updateProduct)

mongoose.connect(process.env.MONGOO_URL).then(() => {
    console.log("connected to DB")
}).catch((error) => {
    console.log("Error while DB connection:", error)
})

app.listen(8001, () => {
    console.log("Server is listening on port 8001")
})
