import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function SearchInput() {

    const [placeholder, setPlaceholder] = useState("Search");

    return (
        <div className="parent-input">
            <div className="col-search">
                <input
                    onFocus={() => {
                        setPlaceholder("")
                    }}
                    onBlur={() => {
                        setPlaceholder("Search")
                    }}
                    type="text" placeholder={placeholder} name="Search" />
                    <FontAwesomeIcon className="icon-search" icon={faSearch}/>
            </div>
        </div>
    )
}
export default SearchInput;