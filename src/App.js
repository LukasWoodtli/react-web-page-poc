import React from "react";
import MenuBar from "./layout/MenuBar";

import Footer from "./layout/Footer";
import {PageContent} from "./layout/PageContent";


function Spacer() {
    return (<div style={{flex: "1 0 auto"}}/>);
}


function App() {
    return (
        <div className="App"
             style={{
                 display: "flex",
                 flexDirection: "column",
                 minHeight: "100vh"
             }}>

            <MenuBar/>

            <PageContent/>

            <Spacer/>

            <Footer style={{display: "flex"}}/>
        </div>
    );
}

export default App;
