import React from "react";


function ShowImages({originimgurl, serialnum, smallimageurl}) {
    return (
        <img
            className="d-block w-100"
            src={originimgurl}
        />
    )
}

export default ShowImages