import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        requiired: true
    },
    price: {
        type: Number,
        requiired: true
    },
    image: {
        type: String,
        requiired: true
    },
})

export default mongoose.model("Product", productSchema)