import express from 'express';
import morgan from 'morgan';
import { AddNewProduct, GetAllProducts, GetSingleProducts, deleteProduct, updateProduct } from './controllers/ApiControllers.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res)=> {
    res.send("working...")
})

app.get('/get-all-products', GetAllProducts);
app.get('/get-single-product', GetSingleProducts);
app.post("/add-new-product", AddNewProduct);
app.patch('/update-product', updateProduct);
app.delete("/delete-product", deleteProduct);

app.listen(8004, ()=>{
    console.log("server running on port 8000")
})