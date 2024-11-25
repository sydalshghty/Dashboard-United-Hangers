import imgMaterial from "../images/Group 429.svg";
import UserName from "./userName";
import "../css/EditMaterial.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
function EditMaterial() {

    const [namePlaceholder, setNamePlaceholder] = useState("Name");

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/RowMaterial");
    }

    const handleDelete = () => {
        Swal.fire({
            title: "Delete Material",
            text: "Are You Sure You want to delete Material 1",
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
        <div className="Edit-Material-Departament">
            <div className="Edit-Material-Heading">
                <div className="col-material">
                    <img onClick={handleNavigate} src={imgMaterial} alt="img-Material"/>
                    <p>Material</p>
                </div>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-input-material">
                <p>Name</p>
                <input
                    onFocus={() => {
                        setNamePlaceholder("")
                    }}
                    onBlur={() => {
                        setNamePlaceholder("Name")
                    }}
                    type="text" placeholder={namePlaceholder} name="Name-Material" />
            </div>
            <div className="col-Delete-Edit">
                <button onClick={handleDelete} className="delete">Delete</button>
                <button className="Edit">Edit</button>
            </div>
        </div>
    )
}
export default EditMaterial;