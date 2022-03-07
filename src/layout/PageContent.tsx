import {Route, Switch} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DummyPage from "../pages/DummyPage";
import React from "react";

export function PageContent() {
    return (
        <Switch>
            <Route path='/' exact>
                <MainPage/>
            </Route>
            <Route path='/page/:content'>
                <DummyPage/>
            </Route>
        </Switch>
    );
}

