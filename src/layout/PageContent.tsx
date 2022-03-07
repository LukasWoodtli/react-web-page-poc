import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DummyPage from "../pages/DummyPage";
import React from "react";

export function PageContent() {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/page/:content' element={<DummyPage/>}/>
        </Routes>
    );
}

