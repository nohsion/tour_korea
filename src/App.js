import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"
import Search from "./routes/Search";


function App() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} />
            <Route path="/travel/:contentid" component={Detail} />
            <Route path="/keyword/:keyword" component={Search} />
        </HashRouter>
    )
}

export default App;
