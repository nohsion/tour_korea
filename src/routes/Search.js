import React from 'react';
import axios from "axios";
import Content from "../components/Home/Content";
import "./Home.css"


class Search extends React.Component {
    state = {
        isLoading: true,
        cityname: "",
        keyword: "",
        areaCode: "",
        contents: []
    }

    getInfos = async () => {
        const {location: {state}} = this.props
        this.setState({cityname: state.selectcity})
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

        if (state.city === 0) {
            queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_API_KEY /* Service Key */
            queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent(state.keyword)
            queryParams += '&' + encodeURIComponent('listYN') + '=' + encodeURIComponent('Y')
            queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('18')
            queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P') /* 대표이미지가 반드시 있는 조회순 정렬 */
            queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC')
            queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest')
            queryParams += '&_type=json'
        }

        const {data: {response: {body: {items: { item }}}}} = await axios.get(url_searchKeyword + queryParams)
        this.setState({contents: item})
        if (!Array.isArray(item) && item) {
            console.log("data는 있는데 배열은 아니네요")
            let new_contents = []
            new_contents.push(item)
            this.setState({contents: [...new_contents]})
        }
        this.setState({isLoading: false})
    }

    componentDidMount() {
        const {location} = this.props
        if (location.state === undefined) {
            window.location.replace("/")
        }
        this.getInfos()
    }

    render() {
        const {isLoading, cityname, keyword, areaCode, contents} = this.state
        console.log(cityname, keyword, areaCode)
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <>
                        <h2>{cityname}: <strong>{keyword}</strong>에 관한 검색결과입니다</h2>
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
                )}

            </section>
        )
    }
}

export default Search;