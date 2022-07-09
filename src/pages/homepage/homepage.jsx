import React from "react";
import "./homepage.styles.scss";
import Header from "../../component/header/header.component";

const HomePage = () => {

    return (
        <>
            <Header/>
            <div className="homepage">
                <div className="homepage-title-text">
                    <div className="homepage-title">
                        <h2>ETILEN</h2>
                        <p>Hemijsko Čišćenje</p>
                    </div>
                </div>
                <div className="homepage-about">
                    <div className="about-text">
                        <div className="title">
                            <div className="accent"/>
                            <h2>ETILEN PERIONICA VEŠA</h2>
                            <div className="accent"/>
                        </div>
                        <p>Od kada smo otvorili 2005 godine, izgradili smo poverenje kod ogromnog broja lojalnih
                            korisnika kako fizičkih, tako i pravnih lica koji su prihvatili naš koncept i filozofiju.
                            Srećni smo što možemo biti na usluzi mnogim malim i velikim firmama u našem Nišu. SPA i
                            fitness centri, ketering firme, restorani, hoteli, apartmani, maloprodajni objekti,
                            ambulante neki su
                            od naših korporativnih klijenata. Sa našim dugogodišnjim iskustvom mi smo savršeni izbor za
                            brigu o vašim delikatnim tkaninama i potrebama hemijskog čišćenja.</p>
                    </div>
                </div>
                <div className="homepage-services">
                    <div className="services-title">

                    </div>
                    <div className="services-text">

                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage;
