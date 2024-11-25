import UserName from "./userName";
import SearchInput from "./searchInput";
import AddNew from "./addNew";
import imgEllipse from "../images/Ellipse 1.png";
import imgDelete from "../images/Group 410.svg";
import imgEdit from "../images/Group 409.svg";
import "../css/colors.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Colors() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/color");
    }

    const handleAddNew = () => {
        navigate("/AddNewColor");
    }
    const handleDelete = () => {

        Swal.fire({
            title: "Delete Color",
            text: "Are You Sure You want to delete Color 1",
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
        <div className="colors-Departament">
            <div className="heading-colors">
                <p className="title-colors">Colors</p>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-search">
                <SearchInput/>
            </div>
            <div className="all-colors">
                <p>All Colors</p>
                <div className="addNew-Button" onClick={handleAddNew}>
                    <AddNew/>
                </div>
            </div>
            <div className="main-product-colors">
                <div className="content-product">
                    <div onClick={handleNavigate} className="col-text">
                        <p className="id-product">1</p>
                        <img className="img-Ellipse" src={imgEllipse} alt="imgEllipse" />
                        <p className="title-product">Black</p>
                    </div>
                    <div className="Edit-Delete-Col">
                        <img onClick={handleDelete} className="img-Delete" src={imgDelete} alt="img-Delete" />
                        <img onClick={handleNavigate} className="img-Edit" src={imgEdit} alt="img-Edit"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Colors;