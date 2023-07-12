export const GetAllProducts = async (req, res) => {
    try {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}

export const GetSingleProducts = async (req, res) => {
    try {
        const { id } = req.query;
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}

export const AddNewProduct = async (req, res) => {
    try {
        const { title, price, description, image, category } = req.body;
        if (!title) return res.send("Title is required!")
        if (!price) return res.send("price is required!")
        if (!description) return res.send("description is required!")
        if (!image) return res.send("image is required!")
        if (!category) return res.send("category is required!")

        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
            .then(res => res.json())
            .then(json => res.send(json))

    } catch (error) {
        return res.send(error)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { title, price, description, image, category } = req.body;
        const { id } = req.query;
        if (!id) return res.send("Id is required!")
        if (!title) return res.send("Title is required!")
        if (!price) return res.send("price is required!")
        if (!description) return res.send("description is required!")
        if (!image) return res.send("image is required!")
        if (!category) return res.send("category is required!")

        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PATCH",
            body: JSON.stringify(
                {
                    title,
                    price,
                    description,
                    image,
                    category
                }
            )
        })
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.query;

        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}