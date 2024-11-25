import UserName from "./userName";
import SearchInput from "./searchInput";
import AddNew from "./addNew";
import deleteImg from "../images/Group 410.svg";
import EditImg from "../images/Group 409.svg";
import "../css/sizes.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Sizes() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/AddNewSize");
    }

    const handleNavigateSize = () => {
        navigate("/EditSize");
    }

        const handleDelete = () => {

        Swal.fire({
            title: "Delete Size",
            text: "Are You Sure You want to delete Size 1",
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
        <div className="sizes-Departament">
            <div className="heading-sizes">
                <p className="p-title">Sizes</p>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-search">
                <SearchInput/>
            </div>
            <div className="col-All-Sizes">
                <p>All Sizes</p>
                <div className="add-New" onClick={handleNavigate}>
                    <AddNew/>
                </div>
            </div>
            <div className="main-product-sizes">
                <div className="content-product-size">
                    <p className="id-product">1</p>
                    <p className="title-product">25 CM</p>
                    <div className="Edit-Delete-col">
                        <img onClick={handleDelete} className="delete-Img" src={deleteImg} alt="delete-Img" />
                        <img onClick={handleNavigateSize} className="edit-Img" src={EditImg} alt="Edit-Img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sizes;