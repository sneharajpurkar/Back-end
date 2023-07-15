export const GetAllCarts = async (req, res) => {
    try {
        fetch('https://fakestoreapi.com/carts')
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}

export const GetSingleCarts = async (req, res) => {
    try {
        const { id } = req.query;
        fetch(`https://fakestoreapi.com/carts/${id}`)
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}

export const AddNewcart = async (req, res) => {
    try {
        const { userId, date, products } = req.body;
        if (!userId) return res.send("UserId is required!")
        if (!date) return res.send("Date is required!")
        if (!products) return res.send("Products is required!")

        fetch('https://fakestoreapi.com/carts', {
            method: "POST",
            body: JSON.stringify(
                {
                    userId,
                    date,
                    products
                }
            )
        })
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}

export const updatecart = async (req, res) => {
    try {
        const { userId, date, products } = req.body;
        const { id } = req.query;
        if (!userId) return res.send("UserId is required!")
        if (!date) return res.send("Date is required!")
        if (!products) return res.send("Products is required!")

        fetch(`https://fakestoreapi.com/carts/${id}`, {
            method: "PUT",
            body: JSON.stringify(
                {
                    userId,
                    date,
                    products
                }
            )
        })
            .then(res => res.json())
            .then(json => res.send(json))

    } catch (error) {
        return res.send(error)
    }
}

export const deletecart = async (req, res) => {
    try {
        const { id } = req.query;

        fetch(`https://fakestoreapi.com/carts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        return res.send(error)
    }
}