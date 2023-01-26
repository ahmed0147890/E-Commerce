import Navbar from "./components/Navbar";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import ProductDetalis from "./components/ProductDetails";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<><Home/></>}/>
      <Route path="/about" element={<><About/></>}/>
      <Route path="products/:productId" element={<><ProductDetalis/></>}/>
      <Route path="/contact" element={<><Contact/></>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
