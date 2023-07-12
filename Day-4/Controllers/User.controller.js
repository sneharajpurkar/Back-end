import User from "../Modals/User.modals.js";
import encrypt from 'encryptjs';

export const register = async (req, res) => {
    try {
        const { name, number, email, password } = req.body;
        const isEmailExist = await User.find({ email: email })
        if (isEmailExist.length) return res.send("Email is already taken..")
        const isNumberExist = await User.find({ number })
        if (isNumberExist.length) return res.send("Number is already taken..")

        let secretKey = "secretKey";
        const encryptPass = encrypt.encrypt(password, secretKey, 256);

        const user = new User({
            name, number, email, password : encryptPass
        });
        const mongoData = await user.save();
        if (mongoData) {
            return res.send("User Registered!")
        }
    } catch (error) {
        res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.find({ email, password })

        if (user.length) {
            return res.send({ message: "Login successful..", data: user[0] })
        } else {
            return res.send("Register first...")
        }

    } catch (error) {
        res.send(error)
    }
}