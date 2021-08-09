import React from "react";

function DetailIntro({ infocenter, usetimefesitival, expguide, parking, accomcount, restdate, usetime,
                         firstmenu, infocenterfood, opentimefood, parkingfood, reservationfood, restdatefood, treatmenu,
                         checkintime, checkouttime, parkinglodging, refundregulation, reservationurl, foodplace, subfacility, roomtype,
                         opentime, parkingshopping, saleitem, shopguide,
                        agelimit, eventplace, usetimefestival
                     }) {
    return (
        <>
            <div className="detail_intro__data">
                <h4>상세정보</h4>
                <div>{infocenter}</div>
                <div>{usetimefesitival}</div>
                <div>{expguide}</div>
                <div>{parking}</div>
                <div>{accomcount}</div>
                <div>{restdate}</div>
                <div>{usetime}</div>

                <div>{firstmenu}</div>
                <div>{infocenterfood}</div>
                <div>{opentimefood}</div>
                <div>{parkingfood}</div>
                <div>{reservationfood}</div>
                <div>{restdatefood}</div>
                <div>{treatmenu}</div>

                <div>{checkintime}</div>
                <div>{checkouttime}</div>
                <div>{parkinglodging}</div>
                <div>{roomtype}</div>
                <div dangerouslySetInnerHTML={ {__html: reservationurl} }></div>
                <div>{foodplace}</div>
                <div>{subfacility}</div>
                <div dangerouslySetInnerHTML={ {__html: refundregulation} }></div>

                <div dangerouslySetInnerHTML={ {__html: opentime} }></div>
                <div>{parkingshopping}</div>
                <div>{saleitem}</div>
                <div dangerouslySetInnerHTML={ {__html: shopguide} }></div>

                <div>{agelimit}</div>
                <div>{eventplace}</div>
                <div>{usetimefestival}</div>
            </div>

        </>
    )
}

export default DetailIntro