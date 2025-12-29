import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { useLocalStorage } from "../useLocalStorage";

function App() {
  const [searchText, setSearchText] = useLocalStorage("searchText", "");

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Category searchText={searchText} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
