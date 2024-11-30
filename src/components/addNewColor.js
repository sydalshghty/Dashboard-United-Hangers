import UserName from "./userName";
import imgAddNew from "../images/Group 429.svg";
import "../css/AddNewColor.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
function AddNewColor() {

    const [color, setColor] = useState('#F6F6FB');  
    const [showPicker, setShowPicker] = useState(false); 
    const [Name, setName] = useState("Name");

    const handleName = () => {
        setName("");
    }

    const handleInputChange = (event) => {
        setColor(event.target.value);
    };

    const handleColorChange = (newColor) => {
        setColor(newColor.hex); 
    };

    const togglePicker = () => {
        setShowPicker(!showPicker); 
    };

    const blurtogglePicker = () => {
        setShowPicker(false);
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Colors");
    }

    const [code, setCode] = useState("Code");

    return (
        <div className="Add-New-Color-Departament">
            <div className="heading-Add-New-Color">
                <div className="col-image">
                    <img onClick={handleNavigate} src={imgAddNew} alt="img-AddNew"/>
                    <p>Add New Color</p>
                </div>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-inputs-content">
                <div className="col-Name-Code">
                    <div className="col-name">
                        <p>Name</p>
                        <input
                            onFocus={handleName}
                            onBlur={() => {
                                setName("Name")
                            }}
                            onClick={blurtogglePicker} type="text" placeholder={Name} name="Name" />
                    </div>
                    <div className="col-code">
                        <p>Code</p>
                        <input onFocus={() => {
                            setCode("");
                        }}
                            onBlur={() => {
                                setCode("Code");
                        }}    onClick={blurtogglePicker} type="text" placeholder={code} name="Code" />
                    </div>
                </div>
                <div className="col-Hex-code">
                    <p>Hex Code</p>
                    <div>
                        <input
                            value={color}
                            onClick={togglePicker}
                            onChange={handleInputChange}
                            style={{ backgroundColor: color, padding: '10px', borderRadius: '4px' }}
                            type="text" placeholder="Hex Code" name="Hex Code"
                        />
                        {showPicker && (
                            <div style={{ position: 'absolute', zIndex: 2 , marginTop: "20px"}}>
                                <ChromePicker color={color} onChangeComplete={handleColorChange} />
                             </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="Cancel-And-Delete">
                <button className="cancel">Cancel</button>
                <button className="submit">Submit</button>
            </div>
        </div>
    )
}
export default AddNewColor;