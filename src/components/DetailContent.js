import React from "react";
import PropTypes from "prop-types"


function DetailContent({key, booktour, contentid, contenttypeid, firstimage, firstimage2, homepage, overview, title}) {
    console.log(homepage)
    return (
        <div className="detail_content">
            <div className="detail_content">
                <img src={firstimage} alt={title} title={title}/>
            </div>
            <div className="detail_content__data">
                <h3 className="detail_content__title">{title}</h3>
                <p className="detail_content__overview">{overview}</p>
                <h5 className="detail_content__addr">{homepage}</h5>
            </div>
        </div>
    )
}


DetailContent.propTypes = {
    key: PropTypes.number.isRequired,
    booktour: PropTypes.string.isRequired,
    contentid: PropTypes.number.isRequired,
    contenttypeid: PropTypes.number.isRequired,
    firstimage: PropTypes.string.isRequired,
    firstimage2: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default DetailContent