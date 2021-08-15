import React from "react";
import "./Youtube.css"

function Youtube({id}) {
    let source = "https://www.youtube.com/embed/" + id
    return (
        <div className="detail_youtube">
            <iframe width="380" height="210" src={source}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
}

export default Youtube