import React from "react";
import MenuBar from "./MenuBar";
import MainPage from './pages/MainPage';

import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <header>
                <MenuBar/>
            </header>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;
