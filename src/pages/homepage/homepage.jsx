import React from "react";
import "./homepage.styles.scss";
import Header from "../../component/header/header.component";

const HomePage = () => {

    return (
        <>
            <Header/>
            <div className="homepage">
                <div className="homepage-title-text" >
                    <div className="homepage-title">
                        <h2>ETILEN</h2>
                        <p>Hemijsko Čišćenje</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage;
