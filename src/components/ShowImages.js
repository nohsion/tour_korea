import React from "react";
import "./ShowImages.css"


function ShowImages({originimgurl, serialnum, smallimageurl}) {
    return (
        <div className="image_content">
            <img src={originimgurl} alt="hi" title="hi" />
        </div>
    )
}

export default ShowImages