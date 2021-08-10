import React from 'react';
import axios from "axios";
import Content from "../components/Home/Content";


class Search extends React.Component {
    state = {
        city: "",
        keyword: "",
        areaCode: "",
        contents: []
    }

    getInfos = async () => {
        const {location: {state}} = this.props
        this.setState({city: state.selectCity})
        this.setState({keyword: state.keyword})
        this.setState({areaCode: state.city})

        /* 지역 코드 조회 */
        let url_searchKeyword = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword' /*URL*/
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
        queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent(state.keyword)
        queryParams += '&' + encodeURIComponent('listYN') + '=' + encodeURIComponent('Y')
        queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent(state.city)
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('18')
        queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
        queryParams += '&_type=json'

        const {data: {response: {body: {items}}}} = await axios.get(url_searchKeyword + queryParams)
        console.log(items)
        this.setState({contents: items.item})
    }

    componentDidMount() {
        const {location} = this.props
        if (location.state === undefined) {
            window.location.replace("/")
        }
        this.getInfos()
    }

    render() {
        const {city, keyword, contents} = this.state
        console.log(city, keyword)
        return (
            <>
                <h2>{city}: <strong>{keyword}</strong>에 관한 검색결과입니다</h2>
                {contents && contents.map(content => (
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
            </>
        )
    }
}

export default Search