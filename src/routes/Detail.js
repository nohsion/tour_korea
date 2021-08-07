import React from "react";
import axios from "axios";
import DetailContent from "../components/DetailContent";
import Map from "../components/Map";

class Detail extends React.Component {
    state = {
        infos: []
    }

    getInfos = async () => {
        const {location: {state: {contentid}}} = this.props

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

        const {data: {response: {body: {items: {item}}}}} = await axios.get(url_areaCode + queryParams)
        this.setState({infos: item})
    }

    componentDidMount() {
        const {location, history} = this.props
        if (location.state === undefined) {
            history.push("/")
        }

        this.getInfos()
    }

    render() {
        const {infos} = this.state
        console.log(infos)
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
                <div>
                    <Map
                        mapx={infos.mapx}
                        mapy={infos.mapy}
                    />
                </div>
            </section>
        )
    }
}

export default Detail