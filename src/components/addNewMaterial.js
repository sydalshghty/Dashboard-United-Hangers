import imgReturn from "../images/Group 429.svg";
import UserName from "./userName";
import "../css/addNewMaterial.css";
import { useNavigate } from "react-router-dom";
import "../css/addNewSlider.css";
import { useState } from "react";

function AddNewMaterial() {

    const [namePlaceholder, setNamePlaceholder] = useState("Name");

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/RowMaterial")
    }
    return (
        <div className="Add-New-Material-Departament">
            <div className="heading-AddNewMaterial">
                <div className="col-material">
                    <img onClick={handleNavigate} src={imgReturn} alt="imgReturn"/>
                    <p>Add New Material</p>
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
            <div className="Cancel-And-Delete">
                    <button className="cancel">Cancel</button>
                    <button className="submit">Submit</button>
            </div>
        </div>
    )
}
export default AddNewMaterial;