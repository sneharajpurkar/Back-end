import Product from '../modal/Product.schema.js';

export const addProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        if (!name || !price || !image) return res.send("Fields are unfilled..")
        const newProduct = new Product({ name, price: parseInt(price), image });
        await newProduct.save();
        return res.json({ status: 200, message: "Product Added" })
    } catch (error) {
        return res.send(error)
    }
}

export const allProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products) {
            res.send(products)
        }
        else {
            res.send("no product found")
        }
    } catch (error) {
        return res.send(error)
    }
}