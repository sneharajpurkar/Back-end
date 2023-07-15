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
      <div style={{ display: 'flex', justifyContent: "space-evenly", flexWrap: 'wrap' }}>
        {product.map((pro) => (
          <div  style={{ width: "20%", height: "400px", border: "2px solid black", marginTop: '10px' }}>
            <h3>Name: {pro.name}</h3>
            <h4>Price: {pro.price}</h4>
            <img style={{ width: "100%", height: "70%" }} src={pro.image} alt='productimage' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProducts