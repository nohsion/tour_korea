import React from "react";
import axios from "axios";

class Detail extends React.Component {


    // getLocation = async () => {
    //     /* 지역 코드 조회 */
    //     let url_areaCode = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode' /*URL*/
    //     let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
    //     queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('17')
    //     queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1')
    //     queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
    //     queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
    //     queryParams += '&_type=json'
    //
    //     const {data: {response: {body: {items: {item}}}}} = await axios.get(url_areaCode + queryParams)
    //     this.setState({locations: item})
    // }
    componentDidMount() {
        const {location, history} = this.props
        if (location.state === undefined) {
            history.push("/")
        }
    }

    render() {
        return (
            <span>hello</span>
        )
    }
}

export default Detail