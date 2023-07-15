import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/add-product' element={<AddProduct/>}/>
        <Route exact path='/all-products' element={<AllProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
