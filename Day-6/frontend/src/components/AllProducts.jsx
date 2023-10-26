import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getdata() {
      const responce = await axios.get("http://localhost:8001/all-products");
      setProduct(responce.data)
    }
    getdata();
  }, [])

  return (
    <div>
      <h1>All products is here:</h1>
      <div style={{width: "100%", display: 'flex', justifyContent: "space-evenly", flexWrap: 'wrap' }}>
        {product.map((pro) => (
          <div  style={{ width: "20%", height: "400px", border: "2px solid black", marginTop: '25px' }}>
            <img style={{ width: "100%", height: "75%" }} src={pro.image} alt='productimage' />
            <h3>Name: {pro.name}</h3>
            <h3>Price: {pro.price}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProducts