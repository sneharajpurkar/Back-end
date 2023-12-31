import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/User.context'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userData, setUserData] = useState({})
    const { state, login } = useContext(AuthContext);
    const router = useNavigate()

    console.log(userData, "userData check")

    useEffect(() => {
        if (state?.user?._id) {
            // console.log(state?.user?._id, "heree")
            async function getData() {
                const res = await axios.post("http://localhost:8001/get-current-user-with-pass", { userId: state?.user?._id })
                setUserData(res.data.data)
            }
            getData()
        } else {
            router("/login")
        }
    }, [state])


    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const res = await axios.post("http://localhost:8001/update-profile", { userData })
            login({ payload: res.data })
            setUserData(res.data)
            alert("Data updated successfully.")
        } else {
            return alert("Please fill required fields.")
        }
    }


    return (
        <div>
            <h1>Update Profie</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label><br />
                <input value={userData.name} name='name' onChange={handleChange} /><br />
                <label>Email :</label><br />
                <input value={userData.email} name='email' onChange={handleChange} /><br />
                <label>Password :</label><br />
                <input value={userData.password} name='password' onChange={handleChange} /><br />
                <input style={{width: "140px", height: "40px", backgroundColor: "black", color: "white", border: "none", outline: "none", fontSize: "16px", cursor: "pointer", marginTop: "10px"}} type='Submit' value="Update data" /><br />
            </form>
        </div>
    )
}

export default Profile