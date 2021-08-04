import React from "react";
import PropTypes from "prop-types"

function Content({ title, addr1, addr2, contentid, contenttypeid, firstimage, tel, mapx, mapy}) {
    return (
        <div>{title}</div>
    )
}

Content.propTypes = {
    title: PropTypes.string.isRequired,
    addr1: PropTypes.string.isRequired,
    addr2: PropTypes.string,
    contentid: PropTypes.number.isRequired,
    contenttypeid: PropTypes.number.isRequired,
    firstimage: PropTypes.string.isRequired,
    tel: PropTypes.string,
    mapx: PropTypes.number.isRequired,
    mapy: PropTypes.number.isRequired
}

export default Content