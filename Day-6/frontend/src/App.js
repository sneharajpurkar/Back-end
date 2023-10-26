import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';
import Navbar from './components/Navbar';
import ProductsHandler from './components/Products/ProductsHandler';
import Profile from './components/Profile';
import UpdateProduct from './components/Products/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/add-product' element={<AddProduct/>}/>
        <Route exact path='/all-products' element={<AllProducts/>}/>
        <Route exact path='/productshandler' element={<ProductsHandler/>}/>
        <Route exact path='/updateProduct/:id' element={<UpdateProduct/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
