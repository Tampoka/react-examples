import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import App from "./../App";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/home";
import Services from "./pages/services";
import Contacts from "./pages/contacts";

export const Path = {
    app: '/',
    sidebar: '/sidebar',
    home: '/home',
    services: '/services',
    contacts: '/contacts',
};

const routes = (
    <Switch>
        <Route exact path={Path.app} component={App} />
        <Route exact path={Path.sidebar} component={Sidebar} />
        <Route exact path={Path.home} component={Home} />
        <Route exact path={Path.services} component={Services} />
        <Route exact path={Path.contacts} component={Contacts} />
    </Switch>
);

export default routes;