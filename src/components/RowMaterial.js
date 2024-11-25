import UserName from "./userName";
import "../css/rawMaterial.css";
import SearchInput from "./searchInput";
import "../css/searchInput.css";
import AddNew from "./addNew";
import deleteIcon from "../images/Group 410.svg";
import editIcon from "../images/Group 409.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function RowMaterial() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/material");
    }

    const navigate2 = useNavigate();

    const handleNavigate2 = () => {
        navigate2("/addNewMaterial");
    }

    const handleDelete = () => {

        Swal.fire({
            title: "Delete Material",
            text: "Are You Sure You want to delete material 1",
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
        <div className="raw-material-Departament">
            <div className="heading-rawmaterial">
                <div className="text-title">
                    <p>Row Material</p>
                </div>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-search">
                <SearchInput/>
            </div>
            <div className="All-Row-Material">
                <div className="text">
                    <p>All Row Material</p>
                </div>
                <div className="col-addNew" onClick={handleNavigate2}>
                    <AddNew/>
                </div>
            </div>
            <div className="col-main-product">
                <div className="container-product">
                    <div className="contain-text" onClick={handleNavigate}>
                        <p className="id-product">1</p>
                        <p className="title-product">Raw Material</p>
                    </div>
                    <div className="col-Edit-Delete">
                        <img className="deleteIcon" src={deleteIcon} alt="deleteIcon" onClick={handleDelete} />
                        <img  className="editIcon"src={editIcon} alt="editIcon" onClick={handleNavigate}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RowMaterial;