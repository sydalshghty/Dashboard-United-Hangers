import UserName from "./userName";
import SearchInput from "./searchInput";
import AddNew from "./addNew";
import "../css/messages.css";
import { useNavigate } from "react-router-dom";
function Messages() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/AddNewMessage")
    }
    return (
        <div className="Messages-Departament">
            <div className="heading-messages">
                <p className="p-messages">Messages</p>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-Search">
                <SearchInput/>
            </div>
            <div className="All-Messages">
                <p>All Messages</p>
                <div className="add-New" onClick={handleNavigate}>
                    <AddNew/>
                </div>
            </div>
            <div className="Main-Messages-Cols">
                <div className="content-Mesaage">
                    <p className="id-P">1</p>
                    <div className="text-Message">
                        <p className="Name-P">Name</p>
                        <p className="Description-P">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Messages;