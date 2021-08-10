import React from "react";
import "./DetailIntro.css"


function DetailIntro({ contenttypeid,
                         infocenter, usetimefesitival, expguide, parking, accomcount, restdate, usetime,
                         firstmenu, infocenterfood, opentimefood, parkingfood, reservationfood, restdatefood, treatmenu,
                         checkintime, checkouttime, parkinglodging, refundregulation, reservationurl, foodplace, subfacility, roomtype,
                         opentime, parkingshopping, saleitem, shopguide,
                        agelimit, eventplace, usetimefestival
                     }) {
    // 관광지 타입
    if (contenttypeid === 12) {
        return (
            <div className="detail_intro__data">
                <h4>상세정보</h4>
                <div>{infocenter}</div>
                <div>{usetimefesitival}</div>
                <div dangerouslySetInnerHTML={ {__html: expguide} }></div>
                <div dangerouslySetInnerHTML={ {__html: parking} }></div>
                <div>{accomcount}</div>
                <div dangerouslySetInnerHTML={ {__html: restdate} }></div>
                <div dangerouslySetInnerHTML={ {__html: usetime} }></div>
            </div>
        )
    }
    // 음식점 타입
    if (contenttypeid === 39) {
        return (
            <div className="detail_intro__data">
                <h4>상세정보</h4>
                <div>{firstmenu}</div>
                <div>{infocenterfood}</div>
                <div>{opentimefood}</div>
                <div>{parkingfood}</div>
                <div>{reservationfood}</div>
                <div>{restdatefood}</div>
                <div>{treatmenu}</div>
             </div>
        )
    }
    // 호텔 타입
    if (contenttypeid === 32) {
        return (
            <div className="detail_intro__data">
                <h4>상세정보</h4>
                <div>{checkintime}</div>
                <div>{checkouttime}</div>
                <div>{parkinglodging}</div>
                <div>{roomtype}</div>
                <div dangerouslySetInnerHTML={ {__html: reservationurl} }></div>
                <div>{foodplace}</div>
                <div>{subfacility}</div>
                <div dangerouslySetInnerHTML={ {__html: refundregulation} }></div>
            </div>
        )
    }
    // 쇼핑 타입
    if (contenttypeid === 38) {
        return (
            <div className="detail_intro__data">
                <h4>상세정보</h4>
                <div dangerouslySetInnerHTML={ {__html: opentime} }></div>
                <div>{parkingshopping}</div>
                <div>{saleitem}</div>
                <div dangerouslySetInnerHTML={ {__html: shopguide} }></div>
            </div>
        )
    }
    // 축제 타입
    if (contenttypeid === 15) {
        return (
            <div className="detail_intro__data">
                <h4>상세정보</h4>
                <div>{agelimit}</div>
                <div>{eventplace}</div>
                <div>{usetimefestival}</div>
            </div>
        )
    }
    else {
        return (
            <>
                <h4>상세정보</h4>
                <span>no data</span>
            </>
        )
    }

}

export default DetailIntro;