import React from "react";
import {Route} from 'react-router-dom';
import MenuBar from "./MenuBar";
import MainPage from './pages/MainPage';

import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <header>
                <MenuBar/>
            </header>
            <Route path='/index'>
                <MainPage/>
            </Route>
            <Route path='/hello'>
                <h1>Hello</h1>
            </Route>
            <Footer/>
        </div>
    );
}

export default App;
