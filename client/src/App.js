import Product from './pages/Product';
import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart'
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
  const user=false;
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart />} />
        {/* {user ? <Route path="/" element={<Home/>} /> : <Route path="/login" element={<Login />}/> } */}
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
