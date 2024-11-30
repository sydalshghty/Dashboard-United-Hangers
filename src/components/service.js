import "../css/productSlider.css";
import iconSlider from "../images/Group 429.svg";
import UserName from "./userName";
import "../css/userName.css";
import { useNavigate } from "react-router-dom";
import AddNew from "./addNew";
import "../css/addNew.css";
import imgProduct from "../images/61GsnUB4HuL 2 (1).png";
import Swal from "sweetalert2";
function Service() {

    const handleDelete = () => {
        Swal.fire({
            title: "Delete Service",
            text: "Are You Sure You want to delete Service 1",
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
        navigate("/Services")
    }

    const handleNavigateAddNew = () => {
        navigate("/AddNewServices")
    }

    const handleNavigateEditService = () => {
        navigate("/EditService")
    }
    return (
        <div className="productSlider-departament">
            <div className="header-slider">
                <div className="heading">
                    <img src={iconSlider} alt="imgProduct" onClick={handleNavigate} />
                    <p>Service</p>
                </div>
                <UserName/>
            </div>
            <div className="addNew-col" onClick={handleNavigateAddNew}>
                <AddNew/>
            </div>
            <div className="col-product">
                <div className="col-image">
                    <img src={imgProduct} alt="productimg"/>
                </div>
                <div className="information-product">
                    <div className="title-content">
                        <p>Title</p>
                        <p>Service 1</p>
                    </div>
                    <div className="description-content">
                        <p>Description</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
            <div className="Edit-And-Delete">
                <button onClick={handleDelete} className="Delete">Delete</button>
                <button onClick={handleNavigateEditService} className="Edit">Edit</button>
            </div>
        </div>
    )
}
export default Service;