import React from 'react';
import axios from "axios";
import Content from "./Content";
import "./App.css"

class App extends React.Component {
    state = {
        contents: []
    }

    getLocation = async () => {
        /* 지역 코드 조회 */
        let url_areaCode = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /*Service Key*/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('17') /**/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1') /**/
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC') /**/
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest') /**/
        queryParams += '&_type=json'

        const {data: {response: {body: {items: {item}}}}} = await axios.get(url_areaCode + queryParams)
        let locations = []
        for (let i = 0; i < item.length; i++) {
            locations.push(item[i].name)
        }
        console.log(locations)

        /* 키워드 조회 */
        let url_searchKeyword = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword'
        let queryParams2 = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /*Service Key*/
        queryParams2 += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15')
        queryParams2 += '&' + encodeURIComponent('keyword') + '=' + locations[0]
        queryParams2 += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P')
        queryParams2 += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC') /**/
        queryParams2 += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest') /**/
        queryParams2 += '&_type=json'

        // locations[0]: 서울, numOfRows: 15개,
        const {data: {response: {body: {items}}}} = await axios.get(url_searchKeyword + queryParams2)
        console.log(items.item)
        this.setState({contents: items.item})
    }

    componentDidMount() {
        this.getLocation()
    }


    render() {
        const {contents} = this.state
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

export default App;
