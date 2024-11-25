import UserName from "./userName";
import imgSize from "../images/Group 429.svg";
import "../css/addNewSize.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AddNewSize() {

    const [Value, setValue] = useState("Value");
    const [Unit, setUnit] = useState("Unit");

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Sizes");
    }
    return (
        <div className="AddNewSize-Departament">
            <div className="addNewSize-Heading">
                <div className="col-image">
                    <img onClick={handleNavigate} src={imgSize} alt="imgSize"/>
                    <p>Add New Size</p>
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
            <div className="Cancel-And-Delete">
                <button className="cancel">Cancel</button>
                <button className="submit">Submit</button>
            </div>
        </div>
    )
}
export default AddNewSize;