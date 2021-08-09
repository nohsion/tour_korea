import React from "react";
import "./ShowImages.css"


function ShowImages({originimgurl, serialnum, smallimageurl}) {
    return (
        <div className="image_content">
            <img src={originimgurl} alt="detail_image" title="detail_image" />
        </div>
    )
}

export default ShowImages