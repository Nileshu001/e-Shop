import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import AddProduct from "./components/addproduct/AddProduct";
import EditProduct from "./components/editProduct/EditProduct";
import CreateOrder from "./components/createOrders/CreateOrders";
import Home from "./components/home/Home";
import ProductList from "./components/productLists/ProductList";
import ProductDetails from "./components/productDetails/ProductDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route exact path="/users" element={<Signup />} />
        <Route path="/auth" element={<SignIn />} />
        <Route adminOnly={true} path="/add-product" element={<AddProduct />} />
        <Route adminOnly={true} path="/modify-product/:id" element={<EditProduct />} />
        <Route adminOnly={false} path="/order/:id/:quantity" element={<CreateOrder />} />
        <Route adminOnly={false} path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
