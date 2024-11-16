import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import imgProduct from "../images/61GsnUB4HuL 2.png";
import imgEdit from "../images/Group 409.svg";
import imgDelete from "../images/Group 410.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNew from "./addNew";
import "../css/slider.css";
import UserName from "./userName";
import Swal from "sweetalert2";
function Slider() {

    const handleDelete = () => {

        Swal.fire({
            title: "Delete Slider",
            text: "Are You Sure You want to delete Slider 1",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            confirmButtonText: "Delete",
            customClass: {
                popup: "my-Popup",
                title: "my-title",
                confirmButton: "my-delete",
                cancelButton: "my-cancel",
            }
        })
    }


    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate("/product");  
    };

    const handleEditSlider = () => {
        navigate("/EditSlider");
    }
    const [placeholder, setPlaceholder] = useState("Search");
    return (
        <div className="slider-departament">
            <div className="slider-content">
                    <p className="p-slider">Sliders</p>
                    <UserName/>
            </div>
            <div className="parent-input">
                 <div className="col-search">
                <input
                    onFocus={() => {
                        setPlaceholder("")
                    }}
                    onBlur={() => {
                        setPlaceholder("Search")
                    }}
                    type="text" placeholder={placeholder} name="Search" />
                    <FontAwesomeIcon className="icon-search" icon={faSearch}/>
            </div>
            </div>
            <div className="heading-slider">
                <p>All Sliders</p>
                <AddNew/>
            </div>
            <div className="main-product">
                <div className="col-Product-slider">
                <p className="id-product" onClick={handleNavigate}>1</p>
                <img className="img-product" src= {imgProduct} alt="img-product" />
                <div className="col-text">
                    <h3 className="heading-product">slider1</h3>
                    <p className="description-product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className="col-Edit-Delete">
                    <img onClick={handleEditSlider} src= {imgEdit} alt="img-Edit" />
                    <img onClick={handleDelete} src= {imgDelete} alt="img-Delete"/>
                </div>
            </div>
            </div>
            <div className="col-product-mobile">
                    <div className="content-image">
                        <p className="id-product" onClick={handleNavigate}>1</p>
                        <img className="img-product" src={imgProduct} alt="img-product" />
                    </div>
                    <div className="content-text">
                        <h3 className="heading-product">slider1</h3>
                        <p className="description-product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="col-Edit-Delete">
                        <img onClick={handleEditSlider} src= {imgEdit} alt="img-Edit" />
                        <img onClick={handleDelete} src= {imgDelete} alt="img-Delete"/>
                    </div>
            </div>
        </div> 
    )
}
export default Slider;