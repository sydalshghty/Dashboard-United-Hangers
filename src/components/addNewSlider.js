import imgIcon from "../images/Group 429.svg"; 
import UserName from "./userName";
import "../css/addNewSlider.css";
import { useNavigate } from "react-router-dom";
//import imgUpload from "../images/Vector (4).svg";
import { useState } from "react";
function AddNewSlider() {
    const navigate = useNavigate();
    const handlNavigate = () => {
        navigate("/Slider");
    }

    const [title, setTitle] = useState("Title");

    const [description, setDescription] = useState("Description...");

    const [image, setImage] = useState(null); 

  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader(); 
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };
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
                <div className="select-image" style={{position: "relative"}}>
                        <input className="choose-file" type="file" onChange={handleImageChange}></input>
                    <p>Select Image to upload</p>
                    {image ? <img
                                className="img-upload"
                                src={image}
                                alt="Uploaded"
                                style={{
                                position: "absolute",
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain", 
                     }}
                                /> : null}
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