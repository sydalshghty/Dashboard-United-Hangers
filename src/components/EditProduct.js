import imgProduct from "../images/Group 429.svg";
import UserName from "./userName";
import "../css/EditProduct.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./Submit";
import mainImgProduct from "../images/61GsnUB4HuL 3.png";
import imgDelete from "../images/Vector (8).svg";
import imgEdit from "../images/Group 445.svg";
import ProductImg from "../images/61GsnUB4HuL 6.png";
import closeSquare from "../images/Close-Square.svg";
import ProductEdit from "../images/Group 452.svg";
import ProductSubmit from "./ProductSubmit";
function EditProduct() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Products")
    }
    return (
        <div className="Edit-Product-Departament">
            <div className="heading-EditProduct">
                <div className="col-image">
                    <img onClick={handleNavigate} src={imgProduct} alt="imgIcon" />
                    <p>Edit Product</p>
                </div>
                <div className="col-userName">
                    <UserName/>
                </div>
            </div>
            <SubmitButton />
            <div className="col-images">
                <p>Images</p>
            </div>
            <div className="Images-Departament">
                <div className="main-Image">
                    <img className="img-Product" src={mainImgProduct} alt="img-Product" />
                    <div className="Delete-Edit-Image">
                        <img src={imgDelete} alt="img-Delete" />
                        <img src={imgEdit} alt="img-Edit"/>
                    </div>
                </div>
                <div className="all-Images-Products">
                    <div className="col-img-product">
                        <div className="main-img-product">
                            <img className="main-img" src={ProductImg} alt="img-Product" />
                            <div className="Delete-Edit-Img">
                                <img src={closeSquare} alt="img-Delete" />
                                <img src={ProductEdit} alt="img-Edit"/>
                            </div>
                        </div>
                        <div className="main-img-product">
                            <img className="main-img" src={ProductImg} alt="img-Product" />
                            <div className="Delete-Edit-Img">
                                <img src={closeSquare} alt="img-Delete" />
                                <img src={ProductEdit} alt="img-Edit"/>
                            </div>
                        </div>
                        <div className="main-img-product">
                            <img className="main-img" src={ProductImg} alt="img-Product" />
                            <div className="Delete-Edit-Img">
                                <img src={closeSquare} alt="img-Delete" />
                                <img src={ProductEdit} alt="img-Edit"/>
                            </div>
                        </div>
                        <div className="main-img-product">
                            <img className="main-img" src={ProductImg} alt="img-Product" />
                            <div className="Delete-Edit-Img">
                                <img src={closeSquare} alt="img-Delete" />
                                <img src={ProductEdit} alt="img-Edit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-Submit">
                <ProductSubmit/>
            </div>
        </div>
    )
}
export default EditProduct;