import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Font from "react-font";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Page_404 from "./pages/Page_404";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw]">
      <Font family="Oxanium" />
      <Font family="Roboto" />
      <Font family="Open Sans" />
      <Font family="Lato" />
      <Font family="Montserrat" />
      <Font family="Source Sans Pro" />
      <ToastContainer />

      <Navbar />
      <SearchBar />
      {/* Main content that should grow to fill remaining space */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Place-order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page_404 />} />
        </Routes>
      </div>
      {/* Footer at the bottom of the page */}
      <Footer />
    </div>
  );
}

export default App;
