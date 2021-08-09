import React, {useRef, useEffect} from "react";
import "./Map.css"

const {kakao} = window

function Map({mapx, mapy, title, addr}) {

    mapx = parseFloat(mapx)
    mapy = parseFloat(mapy)
    console.log(mapy, mapx, title)

    const container = useRef(null);
    const options = {
        center: new window.kakao.maps.LatLng(mapy, mapx),
        level: 4,
    };

    useEffect(() => {
        var map = new kakao.maps.Map(container.current, options);
        var markerPosition = new kakao.maps.LatLng(mapy, mapx);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

        var iwContent = '<span class="info-title">' + title + '</span>'
        var iwPosition = new kakao.maps.LatLng(mapy, mapx);

        new kakao.maps.CustomOverlay({
            map: map,
            position: iwPosition,
            content: iwContent,
            yAnchor: 2.7
        });
        return () => {
        };
    }, [mapx, mapy, options, title]);

    return (
        <>
            <div
                className="map"
                style={{width: "500px", height: "500px"}}
                ref={container}
            />
            <div className="map_addr">
                <h5>{addr}</h5>
            </div>
        </>


    );
}

export default Map;