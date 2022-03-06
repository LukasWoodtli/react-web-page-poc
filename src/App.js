import React from "react";
import { Route } from 'react-router-dom';
import MenuBar from "./MenuBar";
import MainPage from './pages/MainPage';

import Footer from "./Footer";
import DummyPage from "./pages/DummyPage";

function App() {
    return (
        <div className="App"
             style={{display: "flex",
                     flexDirection: "column",
                     minHeight: "100vh"}}>
            <header>
                <MenuBar/>
            </header>
            <Route path='/'  exact>
                <MainPage/>
            </Route>
            <Route path='/page/:content'>
                <DummyPage/>
            </Route>
            <Footer/>
        </div>
    );
}

export default App;
