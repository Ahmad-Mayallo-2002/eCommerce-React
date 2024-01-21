import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Error } from "./components/error";
import { Products } from "./components/products";
import { Product } from "./components/product";
import { Cart } from "./components/cart";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
