import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/User.context';
import { useContext } from 'react';

const AddProduct = () => {
    const [userData, setUserData] = useState({ name: "", price: "", image: "" });
    const [user, setUser] = useState({});
    const { state } = useContext(AuthContext)
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userData.name && userData.price && userData.image) {
            const response = await axios.post("http://localhost:8001/add-product", {
                name: userData.name,
                price: userData.price,
                image: userData.image,
                userId: user?._id
            })
            console.log(response, "-response")
            if (response.data.status == 200) {
                alert(response.data.message)
                router('/all-products');
            } else {
                alert("Error..")
            }
        } else {
            alert("Please fill all the fields.")
        }
    }

    useEffect(() => {
        if (state.user) {
          setUser(state?.user)
        } else {
          setUser({});
        }
      }, [state])
    
    
      useEffect(() => {
        if (state?.user) {
          if (state?.user?.role != "Seller") {
            alert("You are not seller to add products.")
            router('/')
          }
        }
      }, [state])

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input onChange={handleChange} type='text' name="name" value={userData.name} /><br />
                <label>Price</label><br />
                <input onChange={handleChange} type='number' name="price" value={userData.price} /><br />
                <label>Image Url</label><br />
                <input onChange={handleChange} type='url' name="image" value={userData.image} /><br />
                <input style={{width: "140px", height: "40px", backgroundColor: "black", color: "white", border: "none", outline: "none", fontSize: "16px", cursor: "pointer", marginTop: "10px"}} type='submit' value='Add Product' /><br />
            </form>
        </div>
    )
}

export default AddProduct