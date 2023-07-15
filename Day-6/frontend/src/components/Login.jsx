import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userData.email && userData.password) {
            const response = await axios.post("http://localhost:8001/login", {
                email: userData.email,
                password: userData.password
            })
            console.log(response.data, "response")
            if (response.data.status === 200) {
                alert(response.data.message)
                router('/add-product');
                setUserData({name:"", email:""});
            } else {
                alert("Error..")
            }
        } else {
            alert("Please fill all the fields.")
        }
        

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input onChange={handleChange} type='email' name="email" value={userData.email} /><br />
                <label>Password</label><br />
                <input onChange={handleChange} type='password' name="password" value={userData.password} /><br />
                <input type='submit' value='Login' /><br />
            </form>
        </div>
    )
}

export default Login