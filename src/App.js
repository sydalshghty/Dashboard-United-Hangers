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
import RowMaterial from "./components/RowMaterial";
import EditMaterial from "./components/EditMaterial";
import AddNewMaterial from "./components/addNewMaterial";
import Sizes from "./components/Sizes";
import AddNewSize from "./components/addNewSize";
import EditSize from "./components/EditSize";
import Colors from "./components/Colors";
import Color from "./components/color";
import { Routes, Route } from "react-router-dom";
import AddNewColor from "./components/addNewColor";
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
          <Route path="/EditSlider" element={<EditSlider />} />
          <Route path="RowMaterial" element={<RowMaterial />} />
          <Route path="/material" element={<EditMaterial />} />
          <Route path="/addNewMaterial" element={<AddNewMaterial />} />
          <Route path="Sizes" element={<Sizes />} />
          <Route path="/AddNewSize" element={<AddNewSize />} />
          <Route path="/EditSize" element={<EditSize />} />
          <Route path="Colors" element={<Colors />} />
          <Route path="/color" element={<Color />} />
          <Route path="/AddNewColor" element={<AddNewColor/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;
