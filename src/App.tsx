import React from "react";
import "./App.css";
import Sidebar from "./Sidebar_Navigation/Components/Sidebar";
import routes, {Path} from "./Sidebar_Navigation/routes";
import {Redirect} from "react-router-dom";


function App() {
    return (
        <div className="App">
            {/*<AutoComplete data={autoCompleteData}/>*/}
            {/*<Stopwatch/>*/}
            <Sidebar/>
            < div className="content">
                {routes}
            </div>
            <Redirect to={Path.app} />
        </div>

    );
}

export default App;
