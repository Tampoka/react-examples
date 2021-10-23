import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import App from "./../App";
import Sidebar from "./Components/Sidebar";

export const Path = {
    app: '/',
    sidebar: '/sidebar',
};

const routes = (
    <Switch>
        <Route exact path={Path.app} component={App} />
        <Route exact path={Path.sidebar} component={Sidebar} />
        <Redirect to={Path.app} />
    </Switch>
);

export default routes;