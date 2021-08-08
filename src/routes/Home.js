import React from 'react';
import axios from "axios";
import Content from "../components/Content";
import "./Home.css"
import { Input, Space } from 'antd';


const { Search } = Input;
const onSearch = value => {
    console.log(value);
}

class Home extends React.Component {
    state = {
        locations: [],
        contents: [], // 관광지
        foods: [], // 식당
        hotels: [], // 호텔
        shoppings: [], // 쇼핑
        festivals: [] // 축제
    }

    getContents = async () => {
        /* 지역 코드 조회 */
        let url_areaCode = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('17')
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1')
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams += '&_type=json'

        const { data: { response: { body: { items: { item } } } } } = await axios.get(url_areaCode + queryParams)
        this.setState({ locations: item })


        /* 지역 기반 조회 (관광지) */
        let url_searchKeyword = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'
        let queryParams2 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams2 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams2 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams2 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('12') /* 관광타입: 관광지 */
        queryParams2 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams2 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams2 += '&_type=json'

        const { data: { response: { body: { items } } } } = await axios.get(url_searchKeyword + queryParams2)
        this.setState({ contents: items.item })


        /* 지역 기반 조회 (식당) */
        let url_searchFood = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'
        let queryParams3 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams3 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams3 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams3 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('39') /* 관광타입: 식당 */
        queryParams3 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams3 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams3 += '&_type=json'

        const { data: { response: { body } } } = await axios.get(url_searchFood + queryParams3)
        this.setState({ foods: body.items.item })


        /* 지역 기반 조회 (호텔) */
        let url_searchHotel = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'
        let queryParams4 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams4 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams4 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams4 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('32') /* 관광타입: 호텔 */
        queryParams4 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams4 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams4 += '&_type=json'

        const { data: { response } } = await axios.get(url_searchHotel + queryParams4)
        this.setState({ hotels: response.body.items.item })


        /* 지역 기반 조회 (쇼핑) */
        let url_searchShopping = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'
        let queryParams5 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams5 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams5 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams5 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('38') /* 관광타입: 쇼핑 */
        queryParams5 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams5 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams5 += '&_type=json'

        const data = await axios.get(url_searchShopping + queryParams5)
        this.setState({ shoppings: data.data.response.body.items.item })


        /* 지역 기반 조회 (축제) */
        let url_searchFestival = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'
        let queryParams6 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams6 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams6 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams6 += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('15') /* 관광타입: 축제 */
        queryParams6 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams6 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams6 += '&_type=json'

        const festival = await axios.get(url_searchFestival + queryParams6)
        this.setState({ festivals: festival.data.response.body.items.item })
    }

    componentDidMount() {
        this.getContents()
    }

    render() {
        const { contents, foods, hotels, shoppings, festivals } = this.state
        return (
            <section className="container">
                <Space direction="vertical">
                    <Search placeholder="Input Search Keyword" onSearch={onSearch} enterButton />
                </Space>
                <div className="tourspot">
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
                </div>
                <div className="food">
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
                <div className="hotel">
                    <h2>호텔</h2>
                    {hotels.map(content => (
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
                <div className="shopping">
                    <h2>쇼핑</h2>
                    {shoppings.map(content => (
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
                <div className="festivals">
                    <h2>축제</h2>
                    {festivals.map(content => (
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
