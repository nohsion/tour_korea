import React from "react";
import "./DetailContent.css"
// import PropTypes from "prop-types"


function DetailContent({ contentid, contenttypeid, firstimage, firstimage2, homepage, overview, title }) {
    return (
        <div className="detail_content">
            <div className="detail_content__header">
                <div className="detail_content__image">
                    <img src={firstimage} alt={title} title={title} />
                </div>
                <h3 className="detail_content__title">{title}</h3>
            </div>
            <div className="detail_content__data">
                <div className="detail_content__overview" dangerouslySetInnerHTML=
                    { {__html: overview} }>
                </div>
                <div className="detail_content__homepage" dangerouslySetInnerHTML=
                    { {__html: homepage} }>
                </div>
            </div>
        </div>
    )
}


// DetailContent.propTypes = {
//     booktour: PropTypes.number.isRequired,
//     contentid: PropTypes.number.isRequired,
//     contenttypeid: PropTypes.number.isRequired,
//     firstimage: PropTypes.string.isRequired,
//     firstimage2: PropTypes.string.isRequired,
//     homepage: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
// }

export default DetailContent