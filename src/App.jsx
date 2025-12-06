import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Category from "./components/Category";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <Router>
      <Header searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        {/* Correct: pass searchText to Category */}
        <Route path="/" element={<Category searchText={searchText} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
