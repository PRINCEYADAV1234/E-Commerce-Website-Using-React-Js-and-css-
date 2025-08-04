import React from 'react';
import NavbarHero from './component/NavbarHero';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProductCatelog from './component/ProductCatelog';
import AllProduct from './component/AllProduct';
import Contact from './component/ContactUs';
import ProductDetail from './component/ProductDetail';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarHero />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      {location.pathname !== "/products" && <ProductCatelog />}
       {location.pathname === '/' && <Contact />}
        {/* <Contact /> */}
    </>
  );
}
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
