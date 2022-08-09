import React, {useEffect} from "react";
import "./contactpage.styles.scss";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CallImg from "../../assets/call-icon.png";
import LocationImg from "../../assets/location-icon.png";


const Contactpage = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])


    return (
        <>
            <Header/>
            <div className="contactpage">
                <div className="contact-img">
                </div>
                <div className="contact-info">
                    <div className="contact-title">
                        <h2>Kontakt</h2>
                    </div>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <img src={CallImg} alt=""/>
                            </div>
                            <div className="card-title-body">
                                <div className="contact-card-title">
                                    <h2>Pozovite nas</h2>
                                </div>
                                <div className="contact-card-body">
                                    <p><span>Telefon:</span> 061/195-8414</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <img src={LocationImg} alt=""/>
                            </div>
                            <div className="card-title-body">
                                <div className="contact-card-title">
                                    <h2>Lokacija</h2>
                                </div>
                                <div className="contact-card-body">
                                    <p><span>Adresa:</span> Knjaževačka 25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )


}


export default Contactpage;


