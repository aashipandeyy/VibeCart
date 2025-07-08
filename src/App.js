import React from "react";
import LandingPage from "./pages/LandingPage";
import SwipeInterface from "./pages/SwipeInterface";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import ShoppingCart from "./pages/ShoppingCart";
import EditProfile from "./pages/EditProfile";
import CategoriesPage from "./pages/CategoriesPage";
import AccountSettings from "./pages/AccountSettings";
import DealsPage from "./pages/Deals";
import OrdersPage from "./pages/Orders";
import ShopPage from "./pages/Shop";
import DiscoverPage from "./pages/Discover";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/swipe" element={<SwipeInterface />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Routes>
    </Router>
  );
}

export default App;