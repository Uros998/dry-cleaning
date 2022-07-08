import React from "react";
import "./homepage.styles.scss";
import Header from "../../component/header/header.component";
import BackgroundImg from "../../assets/homepage-background.jpg";
import BackgroundImgV2 from "../../assets/homepage-background-v2.jpg";

const HomePage = () => {


    const style = {
        backgroundImage: `url(${BackgroundImgV2})`,
    }


    return (
        <>
            <Header/>
            <div className="homepage">
                <div className="homepage-title-text" style={style}>
                    <div className="homepage-title">
                        <h2>Hemijsko Čišćenje</h2>
                    </div>
                    <div className="homepage-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum iusto labore
                            mollitia nostrum numquam quae sint temporibus. Dicta, praesentium.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage;
