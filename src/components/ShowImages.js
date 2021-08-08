import React from "react";


function ShowImages({originimgurl, serialnum, smallimageurl}) {
    return (
        <div>
            <div className="image_container">
                <img src={originimgurl}/>
            </div>
        </div>
    )
}

export default ShowImages