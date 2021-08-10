import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"
import Search from "./routes/Search";

import Navbar from "./Navbar";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Route path="/" exact={true} component={Home} />
            <Route path="/travel/:contentid" component={Detail} />
            <Route path="/keyword/:keyword" component={Search} />
        </HashRouter>
    
    ) 
}

export default App;
