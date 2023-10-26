import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/User.context';


const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const router = useNavigate();

    const { state, login, logout } = useContext(AuthContext);
    console.log(state, "- state in login")

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
                console.log(response.data.data)
                // localStorage.setItem("accessToken", JSON.stringify(response.data.data))
                login({ token: response.data.data, payload: response.data.user })
                alert(response.data.message)
                router('/');
                setUserData({ password: "", email: "" });
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
                <input style={{width: "140px", height: "40px", backgroundColor: "black", color: "white", border: "none", outline: "none", fontSize: "16px", cursor: "pointer", marginTop: "10px"}} type='submit' value='Login' /><br />
            </form>
            <button style={{width: "140px", height: "40px", backgroundColor: "black", color: "white", border: "none", outline: "none", fontSize: "16px", cursor: "pointer", marginTop: "10px"}} onClick={() => router('/register')} >Register</button>
        </div>
    )
}

export default Login