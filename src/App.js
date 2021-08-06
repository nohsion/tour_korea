import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"


function App() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} />
            <Route path="/travel/:contentid" component={Detail} />
        </HashRouter>
    )
}

export default App;
