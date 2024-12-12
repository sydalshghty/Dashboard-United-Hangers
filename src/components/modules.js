import UserName from "./userName";
import SearchInput from "./searchInput";
import AddNew from "./addNew";
import { useNavigate } from "react-router-dom";
import "../css/products.css";
import imgProduct from "../images/61GsnUB4HuL 2.png";
import imgEdit from "../images/Group 409.svg";
import imgDelete from "../images/Group 410.svg";
import Swal from "sweetalert2";
function Modules() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/AddNewProduct")
    }

    const handleNavigateEdit = () => {
        navigate("/EditProduct")
    }

        const handleDelete = () => {

        Swal.fire({
            title: "Delete Product",
            text: "Are You Sure You want to delete Product 1",
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
        <div className="products-Departament">
            <div className="products-heading">
                <p className="products-title">Products</p>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <div className="col-search">
                <SearchInput/>
            </div>
            <div className="AllProducts-Col">
                <p>All Products</p>
                <div className="addNew-Col" onClick={handleNavigate}>
                    <AddNew/>
                </div>
            </div>
            <div className="main-Product">
                <div className="container-Product">
                    <p className="product-id">1</p>
                    <img className="img-product" src={imgProduct} alt="img-Product" />
                    <div className="content-product">
                        <h3>Product 1</h3>
                        <p className="size-product">26 CM, 30 CM, 36 CM, 42 CM</p>
                        <p className="model-product">PP, ABS, HIPS, PS, PETE, AC</p>
                        <ul className="bullets-Product">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="Edit-Delete-Col">
                        <img onClick={handleNavigateEdit} className="img-Edit" src={imgEdit} alt="img-Edit" />
                        <img onClick={handleDelete} className="img-Delete" src={imgDelete} alt="img-Delete"/>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Modules;