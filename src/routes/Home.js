import React from 'react';
import axios from "axios";
import Content from "../components/Content";
import "./Home.css"

class Home extends React.Component {
    state = {
        locations: [],
        contents: []
    }

    getLocation = async () => {
        /* 지역 코드 조회 */
        let url_areaCode = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('17')
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1')
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams += '&_type=json'

        const {data: {response: {body: {items: {item}}}}} = await axios.get(url_areaCode + queryParams)
        this.setState({locations: item})

        /* 키워드 조회 */
        let url_searchKeyword = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword'
        let queryParams2 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams2 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams2 += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent('서울')
        queryParams2 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams2 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams2 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams2 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('12') /* 관광타입: 관광지 */
        queryParams2 += '&_type=json'


        const {data: {response: {body: {items}}}} = await axios.get(url_searchKeyword + queryParams2)
        this.setState({contents: items.item})
    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        const {locations, contents} = this.state
        console.log(locations)
        console.log(contents)
        return (
            <section className="container">
                <div>
                    {contents.map(content => (
                        <Content
                            key={content.contentid}
                            tel={content.tel}
                            firstimage={content.firstimage}
                            firstimage2={content.firstimage2}
                            mapx={content.mapx}
                            contentid={content.contentid}
                            contenttypeid={content.contenttypeid}
                            title={content.title}
                            addr1={content.addr1}
                            mapy={content.mapy}
                        />
                    ))}
                </div>
            </section>
        )
    }
}

export default Home;
