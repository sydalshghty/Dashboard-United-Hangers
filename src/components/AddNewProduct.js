import "../css/AddNewProduct.css";
import imgProduct from "../images/Group 429.svg";
import UserName from "./userName";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./Submit";
import imgSelect from "../images/Vector (2).png";
import { useState } from "react";
import ProductSubmit from "./ProductSubmit";
function AddNewProduct() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Products")
    }

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
    
  const handleImageChange2 = (event) => {
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
        <div className="Add-New-Product-Departament">
            <div className="heading-AddNewProduct">
                <div className="col-image">
                    <img onClick={handleNavigate} src={imgProduct} alt="img-Product"/>
                    <p>Add New Product</p>
                </div>
                <div className="col-UserName">
                    <UserName/>
                </div>
            </div>
            <div className="submit-col">
                <SubmitButton/>
            </div>
            <div className="heading-image">
                <p>Images</p>
            </div>
            <div className="col-Select-Image">
                <div className="select-Image-One">
                    <div className="col-select">
                        <input type="file" onChange={handleImageChange} name="Img-Product" />
                        <img src={imgSelect} alt="img-Select" />
                        <p>Select Main Image</p>
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
                </div>
                <div className="select-Image-Two">
                    <div className="col-select">
                        <input type="file" onChange={handleImageChange2} name="Img-Product" />
                        <img src={imgSelect} alt="img-Select" />
                        <p>Select Detailed Images Up To 5 Images</p>
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
                </div>
            </div>
            <div>
                <ProductSubmit/>
            </div>
        </div>
    )
}
export default AddNewProduct;