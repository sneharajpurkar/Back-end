import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/User.context'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductsHandler = () => {
    const { state } = useContext(AuthContext);
    const router = useNavigate();

    const [user, setUser] = useState({});
    const [userAddedProduct, setUserAddedProduct] = useState([]);
    // console.log(userAddedProduct, "userAddedProduct from backend")
    const [updatedData, setUpdatedData] = useState({ name: "", price: "", image: "" });
    console.log(updatedData, "updatedData")

    useEffect(() => {
        if (state.user) {
            setUser(state?.user)
        } else {
            setUser({});
            setUserAddedProduct([])
        }
    }, [state])

    useEffect(() => {
        async function getSellProduct() {
            const { data } = await axios.post("http://localhost:8001/get-sell-products", { userId: user?._id });
            setUserAddedProduct(data)
        }
        if (user?._id) {
            getSellProduct();
        }
    }, [user])

    // const handleChange = (event) => {
    //     setUpdatedData({ ...updatedData, [event.target.name]: event.target.value })
    // }

    // const updateProduct = async (event, id) => {
    //     event.preventDefault();
    //     alert(id)
    // }

    return (
        <div>
            <h1>Here is selling products:</h1>
            <div style={{width:"100%", display: 'flex', justifyContent: "space-evenly", flexWrap: 'wrap' }}>
                {userAddedProduct && userAddedProduct.map((pro) => (
                    <div style={{ width: "18%", height: "450px", border: "2px solid black", marginTop: "10px" }}>
                        <img style={{ width: "100%", height: "62%" }} src={pro.image} />
                        <h3>Name: {pro.name} </h3>
                        <h4>Price: {pro.price}  </h4>
                        <button style={{width: "140px", height: "40px", backgroundColor: "black", color: "white", border: "none", outline: "none", fontSize: "16px", cursor: "pointer"}} onClick={() => router(`/updateProduct/${pro._id}`)} type='submit' >Update</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsHandler