import imgIcon from "../images/Group 429.svg"; 
import UserName from "./userName";
import "../css/addNewSlider.css";
import { useNavigate } from "react-router-dom";
import imgUpload from "../images/Vector (4).svg";
import { useState } from "react";
function AddNewSlider() {
    const navigate = useNavigate();
    const handlNavigate = () => {
        navigate("/Slider");
    }

    const [title, setTitle] = useState("Title");

    const [description, setDescription] = useState("Description...");
    return (
        <div className="addNewSlider-departament">
            <div className="addNewSlider-heading">
                <div className="col-image">
                    <img onClick={handlNavigate} src= {imgIcon} alt="imgIcon" />
                    <p>Add New Slider</p>
                </div>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="content-upload-product">
                <div className="select-image">
                    <img src={imgUpload} alt="upload-image" />
                    <p>Select Image to upload</p>
                </div>
                <div className="product-content">
                    <div className="col-title">
                        <p>Title</p>
                        <input
                            onFocus={() => {
                                setTitle("")
                            }}
                            onBlur={() => {
                                setTitle("Title")
                            }}
                            type="text" placeholder={title} name="title-product" />
                    </div>
                    <div className="col-description">
                        <p>Description</p>
                        <input
                            onFocus={() => {
                                setDescription("")
                            }}
                            onBlur={() => {
                                setDescription("Description...")
                            }}
                            type="text" placeholder={description} name="Description-product"
                        />
                    </div>
                </div>
            </div>
            <div className="Cancel-And-Delete">
                <button className="cancel">Cancel</button>
                <button className="submit">Submit</button>
            </div>
        </div>
    )
}
export default AddNewSlider;