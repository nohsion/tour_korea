import React from 'react';
import axios from "axios";
import Content from "../components/Content";
import "./Home.css"

class Home extends React.Component {
    state = {
        locations: [],
        contents: [], // 관광지
        foods: [] // 식당
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


        /* 지역 기반 조회 (관광지)*/
        let url_searchKeyword = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'
        let queryParams2 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams2 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams2 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams2 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('12') /* 관광타입: 관광지 */
        queryParams2 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams2 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams2 += '&_type=json'

        const {data: {response: {body: {items}}}} = await axios.get(url_searchKeyword + queryParams2)
        this.setState({contents: items.item})


        /* 지역 기반 조회 (식당)*/
        let url_searchFood = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'
        let queryParams3 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams3 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams3 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams3 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('39') /* 관광타입: 식당 */
        queryParams3 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams3 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams3 += '&_type=json'

        const {data: {response: {body}}} = await axios.get(url_searchFood + queryParams3)
        this.setState({foods: body.items.item})
    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        const {contents, foods} = this.state
        return (
            <section className="container">
                <div>
                    <h2>관광지</h2>
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
                    <h2>식당</h2>
                    {foods.map(content => (
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
