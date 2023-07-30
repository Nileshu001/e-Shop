import React, { useEffect } from "react";
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import ToggleButtons from "../../common/ToggleFilters";
import ProductDetails from "../productDetails/ProductDetails";
import ProductList from "../productLists/ProductList";
import SearchAppBar from "../searchAppBar/SearchAppBar";

const Home = () => {
  const location = location();
  const navigate = navigate();
  const isLoggedIn = axios.defaults.headers.common["Authorization"];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Box mt={2} display="flex" justifyContent="center">
        <ToggleButtons />
        <SearchAppBar />
      </Box>
      <Routes location={location}>
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Home;
