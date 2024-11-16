import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../css/userName.css";
function UserName() {
    return (
        <div className="userName-col">
            <div className="col-user">
                <FontAwesomeIcon icon={faUser}/>
            </div>
            <p className="p-userName">User Name</p>
            <FontAwesomeIcon className="icon-Down" icon={faChevronDown}/>
        </div>
    )
}
export default UserName;