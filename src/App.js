import logo from './logo.svg';
import './App.css';
import Footer from './component/footer/Footer';
import Signin from './component/signinsingup/Signin';
import Signup from './component/signinsingup/Signup';
import HomePage from './component/homepage/HomePage';
import ProductCart from './component/homepage/product/productdetails/ProductCart';
import { Routes, Route } from "react-router-dom";
import Cart from './component/cart/Cart';
import ContactUs from './component/contactus/ContactUs';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/getproductone/:id" element={<ProductCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        /
        {/* <Route path="/employee" element={<EmployeeDirect />} /> */}
        {/* if user can click on any praticular product that product valid "id" available then that particular product detail show*/}
      </Routes>
    </>
  );
}

export default App;
