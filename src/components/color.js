import imgColor from "../images/Group 429.svg";
import UserName from "./userName";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import "../css/color.css";
import Swal from "sweetalert2";
function Color() {
    const [color, setColor] = useState('#F6F6FB');  
    const [showPicker, setShowPicker] = useState(false); 
    const [Name, setName] = useState("Name");

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
        navigate("/Colors")
    }
    const [code, setCode] = useState("Code");

    return (
        <div className="color-departament">
            <div className="heading-color">
                <div className="col-image">
                    <img onClick={handleNavigate} src={imgColor} alt="imgColor"/>
                    <p>Color</p>
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
                        <input
                            onClick={blurtogglePicker}
                            onFocus={() => {
                            setCode("");
                        }}
                            onBlur={() => {
                                setCode("Code");
                        }}    type="text" placeholder={code} name="Code" />
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
            <div className="col-Delete-Edit">
                <button onClick={handleDelete} className="delete">Delete</button>
                <button className="Edit">Edit</button>
            </div>
        </div>
    )
}
export default Color;