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
function Navbar() {
    return (
        <div className="navBar-departament">
            <div className="united-hanger-logo">
                <img src= {logo} alt="United Hanger"/>
                <p>United Hanger</p>
            </div>
            <nav>
                <div className="container">
                    <ul>
                        <li>
                            <Link to={"modules"} className="link">
                                <img src={iconProducts} alt="Products" />
                            </Link>
                            <Link to={"modules"}>modules</Link>
                        </li>
                        <li>
                            <Link to={"Slider"} className="link">
                            <img src= {iconSlider} alt="Slider"/> 
                            </Link>
                            <Link to={"Slider"}>Slider</Link>
                        </li>
                        <li>
                            <Link to={"Inquiries"} className="link">
                            <img src= {iconInquiries} alt="Inquiries"/>  
                            </Link>   
                            <Link to={"Inquiries"}>Inquiries</Link>
                        </li>
                        <li>
                            <Link to={"Messages"} className="link">
                             <img src={iconMessage} alt="Messages" />   
                            </Link>  
                            <Link to={"Messages"}>Messages</Link>
                        </li>
                        <li>
                            <Link to={"Services"} className="link">
                             <img src={iconServices} alt="Services" />   
                            </Link>  
                            <Link to={"Services"}>Services</Link>
                        </li>
                        <li>
                            <Link to={"AboutUs"} className="link">
                            <img src={iconAboutUs} alt="About Us" />
                            </Link>   
                            <Link to={"AboutUs"}>About Us</Link>
                        </li>
                        <li>
                            <Link to={"WhyUS"} className="link">
                            <img src={iconWhyUs} alt="Why US" />    
                            </Link>   
                            <Link to={"WhyUS"}>Why US</Link>
                        </li>
                        <li>
                            <Link to={"OurFactory"} className="link">
                            <img src={iconOurFactory} alt="Our Factory" />    
                            </Link>    
                            <Link to={"OurFactory"}>Our Factory</Link>
                        </li>
                        <li>
                            <Link to={"BusinessHours"} className="link">
                            <img src={iconBusinessHours} alt="Business Hours" />    
                            </Link>    
                            <Link to={"BusinessHours"}>Business Hours</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;