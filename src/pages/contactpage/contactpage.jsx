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
                    <div className="contact-maps">
                        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.2769276564472!2d21.911692315769983!3d43.32939388132602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0b6ef9cfd252c26!2sHemijsko%20%C4%8Di%C5%A1%C4%87enje%20Slavica%20Etilen!5e0!3m2!1ssr!2srs!4v1660066228964!5m2!1ssr!2srs"
    referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )


}


export default Contactpage;


