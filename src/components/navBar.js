import "../css/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/Logo (1).svg";
import iconProducts from "../images/Buy.svg";
import iconSlider from "../images/Vector.svg";
import iconInquiries from "../images/Document.svg";
import iconMessage from "../images/Vector (1).svg";
import iconServices from "../images/Group 350.svg";
import iconAboutUs from "../images/Group 353 (1).svg";
import iconWhyUs from "../images/Group 353.svg";
import iconOurFactory from "../images/Vector (2).svg";
import iconBusinessHours from "../images/Vector (3).svg";
import iconColors from "../images/Vector (5).svg";
import iconRawMaterial from "../images/Vector (6).svg";
import iconSizes from "../images/Vector (7).svg";
import { useState } from "react";
function Navbar() {

    const [hover, setHover] = useState(false);
    const [sliderHover, setSliderHover] = useState(false);
    const [inquiriesHover, setInquiriesHover] = useState(false);
    const [messageHover, setMessageHover] = useState(false);
    const [servicesHover, setServicesHover] = useState(false);
    const [aboutUsHover, setAboutUsHover] = useState(false);
    const [whyUsHover, setWhyUsHover] = useState(false);
    const [ourFactoryHover, setOurFactoryHover] = useState(false);
    const [businessHover, setBusinessHover] = useState(false);
    const [colorsHover, setColorsHover] = useState(false);
    const [rawMaterialHover, setRawMaterialHover] = useState(false);
    const [sizesHover, setSizesHover] = useState(false);

    return (
        <div className="navBar-departament">
            <div className="united-hanger-logo">
                <img src= {logo} alt="United Hanger"/>
                <p>United Hanger</p>
            </div>
            <nav>
                <div className="container">
                    <ul>
                        <li className={`${hover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(true);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                            }}>
                            <Link to={"modules"} className="link">
                                <img src={iconProducts} alt="Products" />
                            </Link>
                            <Link to={"modules"}>modules</Link>
                        </li>
                        <li className={`${sliderHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(true);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"Slider"} className="link">
                            <img src= {iconSlider} alt="Slider"/> 
                            </Link>
                            <Link to={"Slider"}>Slider</Link>
                        </li>
                        <li className={`${inquiriesHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(true);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"Inquiries"} className="link">
                            <img src= {iconInquiries} alt="Inquiries"/>  
                            </Link>   
                            <Link to={"Inquiries"}>Inquiries</Link>
                        </li>
                        <li className={`${messageHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(true);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"Messages"} className="link">
                             <img src={iconMessage} alt="Messages" />   
                            </Link>  
                            <Link to={"Messages"}>Messages</Link>
                        </li>
                        <li className={`${servicesHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(true);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"Services"} className="link">
                             <img src={iconServices} alt="Services" />   
                            </Link>  
                            <Link to={"Services"}>Services</Link>
                        </li>
                        <li className={`${aboutUsHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(true);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"AboutUs"} className="link">
                            <img src={iconAboutUs} alt="About Us" />
                            </Link>   
                            <Link to={"AboutUs"}>About Us</Link>
                        </li>
                        <li className={`${whyUsHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(true);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"WhyUS"} className="link">
                            <img src={iconWhyUs} alt="Why US" />    
                            </Link>   
                            <Link to={"WhyUS"}>Why US</Link>
                        </li>
                        <li className={`${ourFactoryHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(true);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"OurFactory"} className="link">
                            <img src={iconOurFactory} alt="Our Factory" />    
                            </Link>    
                            <Link to={"OurFactory"}>Our Factory</Link>
                        </li>
                        <li className={`${businessHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(true);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"BusinessHours"} className="link">
                            <img src={iconBusinessHours} alt="Business Hours" />    
                            </Link>    
                            <Link to={"BusinessHours"}>Business Hours</Link>
                        </li>
                        <li className={`${colorsHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(true);
                                setRawMaterialHover(false);
                                setSizesHover(false);
                        }}>
                            <Link to={"Colors"} className="link">
                            <img src={iconColors} alt="Business Hours" />    
                            </Link>    
                            <Link to={"Colors"}>Colors</Link>
                        </li>
                        <li className={`${rawMaterialHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(true);
                                setSizesHover(false);
                        }}>
                            <Link to={"RowMaterial"} className="link">
                            <img src={iconRawMaterial} alt="Business Hours" />    
                            </Link>    
                            <Link to={"RowMaterial"}>Row Material</Link>
                        </li>
                        <li className={`${sizesHover ? "hovered" : ""}`}
                            onClick={() => {
                                setHover(false);
                                setSliderHover(false);
                                setInquiriesHover(false);
                                setMessageHover(false);
                                setServicesHover(false);
                                setAboutUsHover(false);
                                setWhyUsHover(false);
                                setOurFactoryHover(false);
                                setBusinessHover(false);
                                setColorsHover(false);
                                setRawMaterialHover(false);
                                setSizesHover(true);
                        }}>
                            <Link to={"Sizes"} className="link">
                            <img src={iconSizes} alt="Business Hours" />    
                            </Link>    
                            <Link to={"Sizes"}>Sizes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;