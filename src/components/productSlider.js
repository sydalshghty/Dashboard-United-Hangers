import "../css/productSlider.css";
import iconSlider from "../images/Group 429.svg";
import UserName from "./userName";
import "../css/userName.css";
import { useNavigate } from "react-router-dom";
import AddNew from "./addNew";
import "../css/addNew.css";
import imgProduct from "../images/61GsnUB4HuL 2 (1).png";
import Swal from "sweetalert2";
function ProductSlider() {

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
        navigate("/Slider")
    }
    return (
        <div className="productSlider-departament">
            <div className="header-slider">
                <div className="heading">
                    <img src={iconSlider} alt="imgProduct" onClick={handleNavigate} />
                    <p>Slider</p>
                </div>
                <UserName/>
            </div>
            <div className="addNew-col">
                <AddNew/>
            </div>
            <div className="col-product">
                <div className="col-image">
                    <img src={imgProduct} alt="productimg"/>
                </div>
                <div className="information-product">
                    <div className="title-content">
                        <p>Title</p>
                        <p>Slider 1</p>
                    </div>
                    <div className="description-content">
                        <p>Description</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
            <div className="Edit-And-Delete">
                <button onClick={handleDelete} className="Delete">Delete</button>
                <button className="Edit">Edit</button>
            </div>
        </div>
    )
}
export default ProductSlider;