import React from "react";
import axios from "axios";
import DetailContent from "../components/DetailContent";
import Map from "../components/Map";
import ShowImages from "../components/ShowImages";
import Content from "../components/Content";

class Detail extends React.Component {
    state = {
        infos: [], // 공통 정보
        images: [] // 이미지 정보
    }

    getInfos = async () => {
        const { location: { state: { contentid } } } = this.props

        /* 공통 정보 조회 */
        let url_areaCode = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(contentid)
        queryParams += '&' + encodeURIComponent('defaultYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('overviewYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('firstImageYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('mapinfoYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams += '&_type=json'

        const { data: { response: { body: { items: { item } } } } } = await axios.get(url_areaCode + queryParams)
        this.setState({ infos: item })


        /* 이미지 정보 조회 */
        let url_detailImage = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailImage' /*URL*/
        let queryParams1 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams1 += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(contentid)
        queryParams1 += '&' + encodeURIComponent('imageYN') + '=' + encodeURIComponent('Y')
        queryParams1 += '&' + encodeURIComponent('subImageYN') + '=' + encodeURIComponent('Y')
        queryParams1 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams1 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams1 += '&_type=json'

        const { data: { response: { body: { items } } } } = await axios.get(url_detailImage + queryParams1)
        if (items === "") {
            console.log("api가 제공하는 이미지가 없습니다")
            this.setState({ images: [
                    {id: 1},
                    {id: 2}
                ]})
        }
        else {
            this.setState({ images: items.item })
        }

    }

    componentDidMount() {
        const { location } = this.props
        if (location.state === undefined) {
            window.location.replace("/")
        }

        this.getInfos()
    }

    render() {
        const { infos, images } = this.state
        console.log(images)
        return (
            <section className="container">
                <div>
                    <DetailContent
                        key={infos.contentid}
                        booktour={infos.booktour}
                        contentid={infos.contentid}
                        contenttypeid={infos.contenttypeid}
                        firstimage={infos.firstimage}
                        firstimage2={infos.firstimage2}
                        homepage={infos.homepage}
                        overview={infos.overview}
                        title={infos.title}
                    />
                </div>
                <div className="showImages">
                    {images.map(content => (
                        <ShowImages
                            originimgurl={content.originimgurl}
                            serialnum={content.serialnum}
                            smallimageurl={content.smallimageurl}
                        />
                    ))}
                </div>
                <div>
                    <Map
                        mapx={infos.mapx}
                        mapy={infos.mapy}
                        title={infos.title}
                    />
                </div>
            </section>
        )
    }
}

export default Detail