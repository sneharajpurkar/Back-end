import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import axios from 'axios';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const [role, setRole] = useState("Buyer");
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {
            const response = await axios.post("http://localhost:8001/register", {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: role
            })
            console.log(response, "-response")
            if (response.data.status == 200) {
                alert(response.data.message)
                router('/login');
            } else {
                alert("Error..")
            }
        } else {
            alert("Please fill all the fields.")
        }

    }

    const roleSelect = (event) => {
        setRole(event.target.value);
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input onChange={handleChange} type='text' name="name" value={userData.name} /><br />
                <select onChange={roleSelect}>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                    <option value="Admin">Admin</option>
                    <option value="Super Admin">Super Admin</option>
                </select>
                <label>Email</label><br />
                <input onChange={handleChange} type='email' name="email" value={userData.email} /><br />
                <label>Password</label><br />
                <input onChange={handleChange} type='password' name="password" value={userData.password} /><br />
                <input style={{width: "140px", height: "40px", backgroundColor: "black", color: "white", border: "none", outline: "none", fontSize: "16px", cursor: "pointer", marginTop: "10px"}} type='submit' value='Register' /><br />
            </form>
        </div>
    )
}

export default Register