import UserName from "./userName";
import SearchInput from "./searchInput";
import AddNew from "./addNew";
import imgProduct from "../images/61GsnUB4HuL 2.png";
import imgEdit from "../images/Group 409.svg";
import imgDelete from "../images/Group 410.svg";
import "../css/services.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Services() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/AddNewServices");
    }

    const handleService = () => {
        navigate("/Service");
    }

    const handleEditService = () => {
        navigate("/EditService");
    }

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

    return (
        <div className="services-Departament">
            <div className="Services-content">
                <p className="p-Services">Services</p>
                <UserName/>
            </div>
            <div className="col-search">
                <SearchInput/>
            </div>
            <div className="heading-Services">
                <p>All Services</p>
                <div className="col-addNew" onClick={handleNavigate}>
                    <AddNew/>
                </div>
            </div>
            <div className="main-product">
                <div className="col-Product-slider">
                <p className="id-product">1</p>
                <img className="img-product" src= {imgProduct} alt="img-product" />
                <div className="col-text" style={{cursor: "pointer"}} onClick={handleService}>
                    <h3 className="heading-product">Service 1</h3>
                    <p className="description-product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className="col-Edit-Delete">
                    <img onClick={handleEditService} src= {imgEdit} alt="img-Edit" />
                    <img onClick={handleDelete} src= {imgDelete} alt="img-Delete"/>
                </div>
            </div>
            </div>
            <div className="col-product-mobile">
                    <div className="content-image">
                        <p className="id-product">1</p>
                        <img className="img-product" src={imgProduct} alt="img-product" />
                    </div>
                    <div className="content-text" style={{cursor: "pointer"}} onClick={handleService}>
                        <h3 className="heading-product">Service 1</h3>
                        <p className="description-product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="col-Edit-Delete">
                        <img onClick={handleEditService}  src= {imgEdit} alt="img-Edit" />
                        <img onClick={handleDelete}  src= {imgDelete} alt="img-Delete"/>
                    </div>
            </div>
        </div>
    )
}
export default Services;