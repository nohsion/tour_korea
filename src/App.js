import React from 'react';
import axios from "axios";
import Content from "./Content";

class App extends React.Component {
    state = {
        contents: []
    }

    getLocation = async () => {
        const {data: {response: {body: {items: {item}}}}} = await axios.get(
            `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?ServiceKey=${process.env.REACT_APP_API_KEY}&numOfRows=17&MobileOS=ETC&MobileApp=AppTest&_type=json`)

        let locations = []
        for (let i = 0; i < item.length; i++) {
            locations.push(item[i].name)
        }
        console.log(locations)

        // locations[0]: 서울
        const {data: {response: {body: {items}}}} = await axios.get(
            `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=${process.env.REACT_APP_API_KEY}&keyword=${locations[0]}&arrange=P&MobileOS=ETC&MobileApp=AppTest&_type=json`)
        console.log(items.item)
        this.setState({contents: items.item})
    }

    componentDidMount() {
        this.getLocation()
    }


    render() {
        const {contents} = this.state
        return (
            <>
                <div>{contents.map(content => (
                    <Content
                        key={content.contentid}
                        tel={content.tel}
                        firstimage={content.firstimage}
                        mapx={content.mapx}
                        contentid={content.contentid}
                        contenttypeid={content.contenttypeid}
                        title={content.title}
                        addr1={content.addr1}
                        mapy={content.mapy}
                    />
                ))}</div>
            </>
        )
    }
}

export default App;
