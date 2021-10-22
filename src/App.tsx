import React from 'react';
import './App.css';
import {AutoComplete} from "./AutoComplete/AutoCompleteData";
import {autoCompleteData} from "./AutoComplete/data";
import {Stopwatch} from "./Stopwatch/Stopwatch";
import Sidebar from "./Sidebar_Navigation/Components/Sidebar";
import Services from "./Sidebar_Navigation/pages/services";
import {Route, RouteComponentProps, Router, Switch} from "react-router-dom";
import Home from "./Sidebar_Navigation/pages/home";
import Contacts from "./Sidebar_Navigation/pages/contacts";


function App(props:RouteComponentProps<{}>) {
    return (
        <div className="App">
            {/*<AutoComplete data={autoCompleteData}/>*/}
            {/*<Stopwatch/>*/}

            <>
                <Router>
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contacts} />
                    </Switch>
                </Router>
            </>
        </div>
    );
}

export default App;
