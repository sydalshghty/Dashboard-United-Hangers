import imgSize from "../images/Group 429.svg";
import UserName from "./userName";
import { useState } from "react";
import Swal from "sweetalert2";
import "../css/EditSize.css";
import { useNavigate } from "react-router-dom";

function EditSize() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Sizes")
    }
    const [Value, setValue] = useState("Value");
    const [Unit, setUnit] = useState("Unit");

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
        <div className="EditSize-Departament">
            <div className="EditSize-Heading">
                <div className="col-image">
                    <img onClick={handleNavigate} src={imgSize} alt="imgSize"/>
                    <p>size</p>
                </div>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-input-AddNewSize">
                <div className="col-Value">
                    <p>Value</p>
                    <input
                        onFocus={() => {
                            setValue("")
                        }}
                        onBlur={() => {
                            setValue("Value")
                        }}
                        type="text" placeholder={Value} name="Value" />
                </div>
                <div className="col-Unit">
                    <p>Unit</p>
                    <input
                        onFocus={() => {
                            setUnit("");
                        }}
                        onBlur={() => {
                            setUnit("Unit");
                        }}
                        type="text" placeholder={Unit} name="Unit" />
                </div>
            </div>
            <div className="col-Delete-Edit">
                <button onClick={handleDelete} className="delete">Delete</button>
                <button className="Edit">Edit</button>
            </div>
        </div>
    )
}
export default EditSize;