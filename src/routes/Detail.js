import React from "react";
import axios from "axios";

class Detail extends React.Component {
    state = {
        infos: []
    }

    getInfos = async () => {
        const {location: {state: {contentid}}} = this.props
        // if (contentid === undefined) {
        //
        // }
        console.log(contentid)
        /* 공통 정보 조회 */
        let url_areaCode = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(contentid)
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
        return (
            <span>hello</span>
        )
    }
}

export default Detail