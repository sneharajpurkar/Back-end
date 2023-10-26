import Product from '../modal/Product.schema.js';

export const addProduct = async (req, res) => {
    try {
        const { name, price, image, userId } = req.body;
        if (!name || !price || !image || !userId) return res.send("Fields are unfilled..")
        const newProduct = new Product({ name, price: parseInt(price), image, userId });
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

export const updateProduct = async (req, res) => {
    try{
        const {id, name, price, image, userId} = req.body;
        if (!id) return res.send("Id is required!")
        if (!name) return res.send("name is required!")
        if (!price) return res.send("price is required!")
        if (!image) return res.send("Image is required!")
        if (!userId) return res.send("userId is required!")

        const product = await Product.findById(id)
        if(product.userId == userId) {
            product.name = name;
            product.price = price;
            product.image = image;
            await product.save();
            return res.status(201).json({status: "Success", data: product})
        }else{
            return res.send("You are not owner of product")
        }

    }catch (error) {
        return res.send(error)
    }
}