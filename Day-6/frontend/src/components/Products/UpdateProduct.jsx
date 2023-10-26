import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/User.context';
import { toast } from 'react-hot-toast';

const UpdateProduct = () => {
    const [productData, setProductData] = useState();
    const [isDataChange, setIsDataChanged] = useState(false);
    const { id } = useParams();
    console.log(id, "id")
    console.log(productData, "productData")

    const { state } = useContext(AuthContext);

    useEffect(() => {
        async function getProductData() {
            const response = await axios.post('http://localhost:8001/single-sell-product', { id })
            setProductData(response.data)
        }
        if (id) {
            getProductData()
        }
    }, [id])

    function handleChange(event) {
        setIsDataChanged(true);
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsDataChanged(false);
        if (productData.name && productData.price && productData.image && state?.user) {
            const response = await axios.post("http://localhost:8001/update-product", { id: productData._id, name: productData.name, price: productData.price, image: productData.image, userId: state?.user?._id })
            if (response.data.status === "Success") {
                setProductData(response.data.data)
                toast.success("Product updated successfully!")
            } else {
                toast.error("Internal Server error")
                setIsDataChanged(true);
            }
        } else {
            toast.error("Please fill all the fields")
            setIsDataChanged(true);
        }
    }

    return (
        <div>
            <h1>Update Product</h1>
            <div style={{ width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {productData ?
                    <div style={{ width: '20%', height: '550px', border: '2px solid black' }}>
                        <img style={{ width: "220px", height: "280px", marginTop: '10px' }} src={productData.image} />
                        <form style={{marginTop: "20px"}} onSubmit={handleSubmit}>
                            <label style={{ fontSize: "16px" }}>Name:</label><br />
                            <input style={{ width: '220px', height: '25px', border: '1px solid black', marginBottom: '5px' }} type='text' value={productData.name} name='name' onChange={handleChange} /><br />
                            <label style={{ fontSize: "16px"}}>Price:</label><br />
                            <input style={{ width: '220px', height: '25px', border: '1px solid black', marginBottom: '5px'  }} type='number' value={productData.price} name='price' onChange={handleChange} /><br />
                            <label style={{ fontSize: "16px" }}>Image:</label><br />
                            <input style={{ width: '220px', height: '25px', border: '1px solid black', marginBottom: '5px'  }} type='text' value={productData.image} name='image' onChange={handleChange} /><br />
                            <input style={{ width: "220px", height: "40px", backgroundColor: "black", color: "white", border: "none", outline: "none", fontSize: "16px", cursor: "pointer", marginTop: "15px"}} type='Submit' disabled={!isDataChange} />
                        </form>
                    </div>
                    : <h3>Loading...</h3>
                }
            </div>
        </div>
    )
}

export default UpdateProduct