import React from "react";
import axios from "axios";
import DetailContent from "../components/Detail/DetailContent";
import Map from "../components/Detail/Map";
import ShowImages from "../components/Detail/ShowImages";
import DetailIntro from "../components/Detail/DetailIntro";
import "./Detail.css"


class Detail extends React.Component {
    state = {
        isLoading: true,
        infos: [], // 공통 정보
        images: [], // 이미지 정보
        intros: [], // 소개 정보
        addr: "", // 주소
        contenttypeid: "" // ex. 관광지, 음식, 호텔..
    }

    getInfos = async () => {
        const {location: {state}} = this.props
        this.setState({addr: state.addr1})
        this.setState({contenttypeid: state.contenttypeid})

        /* 공통 정보 조회 */
        let url_areaCode = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(state.contentid)
        queryParams += '&' + encodeURIComponent('defaultYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('overviewYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('firstImageYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('mapinfoYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams += '&_type=json'

        const {data: {response: {body: {items: {item}}}}} = await axios.get(url_areaCode + queryParams)
        this.setState({infos: item})


        /* 이미지 정보 조회 */
        let url_detailImage = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailImage' /*URL*/
        let queryParams1 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams1 += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(state.contentid)
        queryParams1 += '&' + encodeURIComponent('imageYN') + '=' + encodeURIComponent('Y')
        queryParams1 += '&' + encodeURIComponent('subImageYN') + '=' + encodeURIComponent('Y')
        queryParams1 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams1 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams1 += '&_type=json'

        const {data: {response: {body: {items}}}} = await axios.get(url_detailImage + queryParams1)
        if (Array.isArray(items.item)) {
            this.setState({images: items.item})
        } else if (items.item) {
            this.setState({images: [...this.state.images, items.item]})
        } else {
            this.setState({images: [...this.state.images,
                    {
                        id: 1,
                        originimgurl: "https://static.thenounproject.com/png/1439134-200.png"
                    }]})
        }
        this.setState({images: items.item})

        /* 소개 정보 조회 */
        let url_detailIntro = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro' /*URL*/
        let queryParams2 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams2 += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(state.contentid)
        queryParams2 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent(state.contenttypeid)
        queryParams2 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams2 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams2 += '&_type=json'

        const {data: {response: {body}}} = await axios.get(url_detailIntro + queryParams2)
        this.setState({intros: body.items.item})

        this.setState({ isLoading: false })
    }

    componentDidMount() {
        const {location} = this.props
        if (location.state === undefined) {
            window.location.replace("/")
        }

        this.getInfos()
    }

    render() {
        const {isLoading, infos, images, intros, addr, contenttypeid} = this.state
        console.log(intros, contenttypeid)
        return (
            <section className="detail_container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <>
                        <div>
                            <DetailContent
                                key={infos.contentid}
                                contentid={infos.contentid}
                                contenttypeid={infos.contenttypeid}
                                firstimage={infos.firstimage}
                                firstimage2={infos.firstimage2}
                                homepage={infos.homepage}
                                overview={infos.overview}
                                title={infos.title}
                            />
                        </div>
                        <div className="detail_images">
                            <ShowImages
                                images={images}
                            />
                        </div>
                        <div>
                            <DetailIntro
                                contenttypeid={infos.contenttypeid}
                                infocenter={intros.infocenter}
                                expguide={intros.expguide}
                                usetimefesitival={intros.usetimefestival}
                                parking={intros.parking}
                                accomcount={intros.accomcount}
                                restdate={intros.restdate}
                                usetime={intros.usetime}

                                firstmenu={intros.firstmenu}
                                infocenterfood={intros.infocenterfood}
                                opentimefood={intros.opentimefood}
                                parkingfood={intros.parkingfood}
                                reservationfood={intros.reservationfood}
                                restdatefood={intros.restdatefood}
                                treatmenu={intros.treatmenu}

                                checkintime={intros.checkintime}
                                checkouttime={intros.checkouttime}
                                parkinglodging={intros.parkinglodging}
                                refundregulation={intros.refundregulation}
                                reservationurl={intros.reservationurl}
                                foodplace={intros.foodplace}
                                subfacility={intros.subfacility}
                                roomtype={intros.roomtype}

                                opentime={intros.opentime}
                                parkingshopping={intros.parkingshopping}
                                saleitem={intros.saleitem}
                                shopguide={intros.shopguide}

                                agelimit={intros.agelimit}
                                eventplace={intros.eventplace}
                                usetimefestival={intros.usetimefestival}
                            />
                        </div>
                        <div>
                            <Map
                                mapx={infos.mapx}
                                mapy={infos.mapy}
                                title={infos.title}
                                addr={addr}
                            />
                        </div>
                    </>
                )}
            </section>
        )
    }
}

export default Detail