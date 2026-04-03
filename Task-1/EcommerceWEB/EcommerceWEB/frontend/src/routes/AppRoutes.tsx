import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import AdminDashboard from "../pages/AdminDashboard";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import AdminProducts from "../pages/AdminProducts";
import Success from "../pages/Sucess";


export default function AppRoutes() {
  return (      
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
  );
}