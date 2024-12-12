import { useState } from "react";
import "../css/ProductSubmit.css";
function ProductSubmit() {
     const [Title, setTitle] = useState("Title");

    const [Description, setDescription] = useState("Description . . .");
    return (
        <div className="content-Product-Submit">
                <div className="Name-Description-Col">
                    <form action="">
                        <div className="col-Name">
                            <label>Name</label>
                            <input onFocus={() => {
                                setTitle("")
                            }}
                                onBlur={() => {
                                    setTitle("Title")
                            }}    type="text" placeholder={Title} />
                        </div>
                        <div className="col-Description">
                            <label>Description</label>
                            <input onFocus={() => {
                                    setDescription("")
                            }}
                                onBlur={() => {
                                    setDescription("Description . . .")
                            }}    type="text" placeholder={Description} />
                        </div>
                    </form>
                    <div className="col-Raw-Material">
                        <h3>Raw Material</h3>
                        <div>
                            <p className="PP-col">PP</p>
                            <p className="ABS-col">ABS</p>
                            <p className="HIPS-col">HIPS</p>
                            <p className="PS-col">PS</p>
                        </div>
                    </div>
                </div>
                <div className="Colors-Sizes-Col">
                    <div className="Colors-Departament">
                        <h3>Colors</h3>
                        <div className="ALL-Col-Colors">
                                <div>
                                    <li></li>
                                    <p>Black</p>
                                </div>
                                <div>
                                    <li></li>
                                    <p>White</p>
                                 </div>
                                <div>
                                    <li></li>
                                    <p>Red</p>
                                </div>
                                 <div>
                                    <li></li>
                                    <p>Yellow</p>
                                </div>
                                <div>
                                    <li></li>
                                    <p>Blue</p>
                                </div>
                        </div>
                    </div>
                    <div className="Sizes-Departament">
                        <h3>Sizes</h3>
                        <div className="ALL-Col-Sizes">
                            <p>26 CM</p>
                            <p>30 CM</p>
                            <p>36 CM</p>
                            <p>42 CM</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProductSubmit;