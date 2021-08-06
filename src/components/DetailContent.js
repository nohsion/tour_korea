import React from "react";
import PropTypes from "prop-types"


function DetailContent({key, booktour, contentid, contenttypeid, firstimage, firstimage2, homepage, overview, title}) {
    return (
        <div className="detail_content">
            <div className="detail_content">
                <img src={firstimage} alt={title} title={title}/>
            </div>
            <div className="detail_content__data">
                <h3 className="detail_content__title">{title}</h3>
                <p className="detail_content__overview">{overview}</p>
                <h6 className="detail_content__addr">homepage</h6>
            </div>
        </div>
    )
}


DetailContent.propTypes = {

}

export default DetailContent