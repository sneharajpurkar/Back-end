import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/User.context'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  const { state, logout } = useContext(AuthContext);
  const router = useNavigate();

  console.log(role, "_ role")

  useEffect(() => {
    if (state.user) {
      setUser(state?.user);
      setRole(state?.user?.role)
    } else {
      setUser({});
      setRole("");
    }
  }, [state])
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', backgroundColor: 'bisque', color: 'brown' }}>
      <h3 style={{ cursor: "pointer" }}>Home</h3> {/*Everyone*/}
      {role == "Admin" &&
        <h3 style={{ cursor: "pointer" }}>User Handler</h3>} {/*Admin*/}
      {(role == "Admin" || role == "Seller") &&
        <h3 onClick={() => router('/productshandler')} style={{ cursor: "pointer" }}>Product Handler</h3>} {/*Seller, Admin*/}
      <h3 onClick={() => router('/all-products')} style={{ cursor: "pointer" }}>All Product</h3> {/*everyone*/}

      {(role == "Seller" || role == "Admin") &&
        <h3 style={{ cursor: "pointer" }} onClick={() => router("/add-product")}>Add Product</h3>}
      {role == "Buyer" &&
        <h3 style={{ cursor: "pointer" }}>Cart only buyer</h3>}
      {user?.name ?
        <>
          <h3 onClick={() => router('/profile')} style={{ cursor: "pointer" }}>{user.name}</h3>
          <h3 style={{ cursor: "pointer" }} onClick={logout}>Logout</h3>
        </> :
        <h3 style={{ cursor: "pointer" }} onClick={() => router('/login')}>Login</h3>
      }
    </div>
  )
}

export default Navbar