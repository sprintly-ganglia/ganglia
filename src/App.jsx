import "./App.css";

// import { Route, Router } from 'lucide-react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/HomePage/Home";
import NavBar from "./Components/NavBar";
import OurServices from "./Components/OurServices";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <div className="  w-full mt-10 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
