import UserName from "./userName";
import imgAddNew from "../images/Group 429.svg";
import "../css/AddNewColor.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
function AddNewColor() {

    const [color, setColor] = useState('#F6F6FB');  // تخزين اللون المختار
    const [showPicker, setShowPicker] = useState(false); 
    const [Name, setName] = useState("Name");
    const [HexCode, setHexCode] = useState("Hex Code");

    const handleName = () => {
        setName("");
    }

    const handleInputChange = (event) => {
        setColor(event.target.value);
    };

    const handleColorChange = (newColor) => {
        setColor(newColor.hex);  // تحديث اللون عند اختيار اللون من شريط الاختيار
    };

    const togglePicker = () => {
        setShowPicker(!showPicker);  // التبديل بين إظهار وإخفاء شريط اختيار اللون
    };

    const blurtogglePicker = () => {
        setShowPicker(false);
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Colors");
    }
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
                        <div>
                            <input
                                value={color}
                                onClick={togglePicker}// عند الضغط على الـ input يظهر شريط اختيار اللون
                                onChange={handleInputChange}
                                style={{ backgroundColor: color, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                type="text" placeholder="Code" name="Code" />
                            {showPicker && (
                            <div style={{ position: 'absolute', zIndex: 2 , marginTop: "20px"}}>
                                <ChromePicker color={color} onChangeComplete={handleColorChange} />
                             </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-Hex-code">
                    <p>Hex Code</p>
                    <input
                        onFocus={() => {
                            setHexCode("")
                        }}
                        onBlur={() => {
                            setHexCode("Hex Code")
                        }}
                        onClick={blurtogglePicker} type="text" placeholder={HexCode} name="Hex Code" />
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