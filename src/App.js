import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList/:id" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/login/:id" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
