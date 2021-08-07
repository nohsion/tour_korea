import React, { useRef, useEffect } from "react";
import "./Map.css"


function Map({ mapx, mapy }) {
    if ((typeof mapx) === String) {
        mapx = Number(mapx)
    }
    if ((typeof mapy) === String) {
        mapx = Number(mapy)
    }
    // mapx = 33.476947
    // mapy = 126.822903
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(mapx, mapy), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
    };

    useEffect(() => {
        new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        return () => { };
    }, []);

    return (
        <div
            className="map"
            style={{ width: "500px", height: "500px" }}
            ref={container}
        ></div>
    );
}

export default Map;