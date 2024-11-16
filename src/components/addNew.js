import "../css/addNew.css";
import { useNavigate } from "react-router-dom";
function AddNew() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/AddNewSlider")
    }
    return (
        <button onClick={handleNavigate} className="addNew">Add New</button>
    )
}
export default AddNew;