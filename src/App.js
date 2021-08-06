import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"


function App() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} />
            {/* TODO: path 설정하기 - contenttypeid에 맞는 이름을 가져오고 싶음. Content.js 딕셔너리 참고 */}
            <Route path="/:contentType[contenttypeid.toString()]/:contentid" component={Detail} />
        </HashRouter>
    )
}

export default App;
