import React from "react";
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import "./Content.css"

const contentType = {
    12: "travel",
    15: "festival",
    28: "activity",
    32: "hotel",
    38: "shopping",
    39: "food"
}

function Content({title, addr1, addr2, contentid, contenttypeid, firstimage, firstimage2, tel, mapx, mapy}) {
    return (
        <Link
            to={{
                pathname: `/${contentType[contenttypeid.toString()]}/${contentid}`,
                state: {
                    title, addr1, addr2, contentid, contenttypeid, firstimage, firstimage2, tel, mapx, mapy
                }
            }
            }>
            <div className="content">
                <div className="content__image">
                    <img src={firstimage} alt={title} title={title}/>
                </div>
                <div className="content__data">
                    <h4 className="content__title">{title}</h4>
                    <h6 className="content__addr">{addr1}</h6>
                </div>
            </div>
        </Link>
    )
}

Content.propTypes = {
    title: PropTypes.string.isRequired,
    addr1: PropTypes.string.isRequired,
    addr2: PropTypes.string,
    contentid: PropTypes.number.isRequired,
    contenttypeid: PropTypes.number.isRequired,
    firstimage: PropTypes.string.isRequired,
    firstimage2: PropTypes.string.isRequired,
    tel: PropTypes.string,
    mapx: PropTypes.number.isRequired,
    mapy: PropTypes.number.isRequired
}

export default Content