import React, {useEffect} from "react";
import "./homepage.styles.scss";
import Header from "../../component/header/header.component";
import Icon1 from "../../assets/icon1v2.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";


const HomePage = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])

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
                        <h2>Naše Dodatne Prednosti</h2>
                    </div>
                    <div className="services-cards">
                        <div className="service-card">
                            <div className="card-img">
                                <img src={Icon1} alt=""/>
                            </div>
                            <div className="card-title">
                                <h2>ČIŠĆENJE I PEGLANJE</h2>
                            </div>
                            <div className="card-body">
                                <p>Stručan pristup i analiza o tretiranju svakog odevnog predmeta odlikuje našu
                                    profesionalnost.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-img">
                                <img src={Icon2} alt=""/>
                            </div>
                            <div className="card-title">
                                <h2>EKSPRESNO I KVALITETNO</h2>
                            </div>
                            <div className="card-body">
                                <p>Svaki artikal je najboljom metodom i na najbrži mogući način spremna za ponovnu
                                    upotrebu.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-img">
                                <img src={Icon3} alt=""/>
                            </div>
                            <div className="card-title">
                                <h2>DOSTAVA NA ADRESU</h2>
                            </div>
                            <div className="card-body">
                                <p>Poštujemo Vaše vreme i u najkraćem roku Vam možemo dostaviti Vašu čistu tkaninu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage;
