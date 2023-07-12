import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Users from './modals/Users.js';

const app = express();

app.use(express.json());
dotenv.config();

app.get('/', (req,res)=>{
    res.send("It's Working!")
})

app.post("/register", async (req, res) => {
    try {
        const { name, email, password, number } = req.body;

        if (!name) return res.send("Name is required!");
        if (!email) return res.send("Email is required!");
        if (!password) return res.send("Password is required!");
        if (!number) return res.send("Number is required!");

        const user = new Users({
            name: name,
            email: email,
            password,
            number
        })
        await user.save();
        // res.send("Registeratrion Complete...")
        console.log(req.body);
    } catch (error) {
        res.send(error)
    }

})

app.put("/update-data/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.send("Id is required!");
        const { number, name } = req.body;
        if (!number && !name) return res.send('Inputs data is required!')

        await Users.findByIdAndUpdate(id, { number: number, name: name })
        // console.log(res, "- res")
        res.send("Data Updated!");
    } catch (error) {
        return res.send(error)
    }
})

app.delete("/delete-user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.send("Id is required!");

        await Users.findByIdAndDelete(id);
        res.send("User deleted!")
    } catch (error) {
        return res.send(error)
    }
})

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected to DB")
}).catch((error)=>{
    console.log("Error while connecting mongofb :- ", error)
})

app.listen(8002, ()=>{
    console.log("server is running on port 8002");
})