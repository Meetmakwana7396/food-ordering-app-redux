import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Items />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
