import React from 'react';
import axios from "axios";
import Content from "./Content";
import "./App.css"

class App extends React.Component {
    state = {
        contents: []
    }

    getLocation = async () => {
        let url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /*Service Key*/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('17') /**/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1') /**/
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC') /**/
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest') /**/
        queryParams += '&_type=json'

        const {data: {response: {body: {items: {item}}}}} = await axios.get(url + queryParams)
        let locations = []
        for (let i = 0; i < item.length; i++) {
            locations.push(item[i].name)
        }
        console.log(locations)

        // locations[0]: 서울, numOfRows: 15개,
        const {data: {response: {body: {items}}}} = await axios.get(
            `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=${process.env.REACT_APP_API_KEY}&numOfRows=15&keyword=${locations[0]}&arrange=P&MobileOS=ETC&MobileApp=AppTest&_type=json`)
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
