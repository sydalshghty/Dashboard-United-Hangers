import Navbar from "./components/navBar";
import Slider from "./components/slider";
import Modules from "./components/modules";
import Inquiries from "./components/inquiries";
import Messages from "./components/massage";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import WhyUS from "./components/WhyUS";
import OurFactory from "./components/OurFactory";
import BusinessHours from "./components/business";
import ProductSlider from "./components/productSlider";
import AddNewSlider from "./components/addNewSlider";
import EditSlider from "./components/EditSlider";
import { Routes, Route } from "react-router-dom";
import "./app.css";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content-app">
        <Routes>
          <Route path="/" element= {<Slider/>}/>
          <Route path="modules" element={<Modules />}/>
          <Route path="Slider" element={<Slider />} />
          <Route path="Inquiries" element={<Inquiries />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="Services" element={<Services />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="WhyUS" element={<WhyUS />} />
          <Route path="OurFactory" element={<OurFactory />} />
          <Route path="BusinessHours" element={<BusinessHours />} />
          <Route path="/product" element={<ProductSlider />} />
          <Route path="/AddNewSlider" element={<AddNewSlider />} />
          <Route path="/EditSlider" element= {<EditSlider/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
