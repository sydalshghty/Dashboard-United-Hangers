import imgMessage from "../images/Group 429.svg";
import UserName from "./userName";
import "../css/AddNewMessage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AddNewMessage() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Messages");
    }

    const [Name, setName] = useState("Name");
    const [Phone, setPhone] = useState("Phone");
    const [Email, setEmail] = useState("Email");
    const [Message, setMessage] = useState("Message . . .");

    return (
        <div className="AddNewMessage-Departament">
            <div className="heading-AddNewMessage">
                <div className="col-image">
                    <img onClick={handleNavigate} src={imgMessage} alt="imgMessage"/>
                    <p>Add New Message</p>
                </div>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="content-Message">
                <div className="Name-Phone-Col">
                    <div className="col-Name">
                        <p>Name</p>
                        <input onFocus={() => {
                            setName("")
                        }}
                            onBlur={() => {
                            setName("Name")
                        }}    type="text" placeholder={Name} />
                    </div>
                    <div className="col-Phone">
                        <p>Phone</p>
                        <input onFocus={() => {
                            setPhone("")
                        }}
                            onBlur={() => {
                            setPhone("Phone")
                        }}    type="number" placeholder={Phone} />
                    </div>
                </div>
                <div className="Email-Message-Col">
                    <div className="Email-Col">
                        <p>Email</p>
                        <input onFocus={() => {
                            setEmail("")
                        }}
                            onBlur={() => {
                            setEmail("Email")
                        }}    type="email" placeholder={Email} />
                    </div>
                    <div className="Message-Col">
                        <p>Message</p>
                        <input onFocus={() => {
                            setMessage("")
                        }}
                        onBlur={() => {
                                setMessage("Message . . .")
                        }}type="text" placeholder={Message} />
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
export default AddNewMessage;