import React, {useEffect} from "react";
import "./homepage.styles.scss";
import Header from "../../component/header/header.component";
import Icon1 from "../../assets/icon1v2.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import AdvantagesImg from "../../assets/contact.jpg";
import Footer from "../../component/footer/footer.component";


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
                <div className="homepage-our-services">
                    <div className="our-service-title">
                        <h2>Naše usluge</h2>
                    </div>
                    <div className="our-services">
                        <div className="two-services">
                            <div className="service">
                                <div className="service-title">
                                    <h2><span>#01 /</span> Hemijsko čišćenje</h2>
                                </div>
                                <div className="service-body">
                                    <p>Možete poveriti Vaše omiljene stvari Etilen perionici jer tretiramo osetljivu
                                        tkaninu koja se ne sme prati u vodi sa najboljim sredstvima kako se ne bi
                                        uništila i
                                        vraćamo joj sjaj i svežinu. Pored odeće nudimo i usluge pranja venčanica, odela,
                                        kože, satena, svile…</p>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <h2><span>#02 /</span> Pranje i peglanje</h2>
                                </div>
                                <div className="service-body">
                                    <p>Pranje i peglanje košulja nekada ume da bude prava gnjavaža. Zato mi pružamo
                                        vrhunsku
                                        uslugu pranja i peglanja košulja kako bi ste uvek mogli da izgledate uredno.
                                        Takođe
                                        pored košulja nudeimo pranje i peglenje bilo kog veša.</p>
                                </div>
                            </div>
                        </div>
                        <div className="two-services">
                            <div className="service">
                                <div className="service-title ">
                                    <h2><span>#03 /</span> Bojenje kože</h2>
                                </div>
                                <div className="service-body">
                                    <p>Bojenje kože, uz usluge pranja ili hemijskog čišćenja imamo mogućnost,
                                        tehnologiju i znanje da najsavremenijim metodama i najboljim sredstvima vršimo
                                        usluge bojenja kože. Tako vašoj odeći produžujemo vek trajanja,
                                        postojeću boju osvežavamo i dajemo joj novi život.</p>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <h2><span>#04 /</span> Čišćenje cipela</h2>
                                </div>
                                <div className="service-body">
                                    <p>Etilen u ponudi ima i mogućnost krojačkih prepravki. Svojim savetima i
                                        dugogodišnjim iskustvom možemo Vam pomoći i dati savet u vezi svih vrsta
                                        krojačkih
                                        prepravki, krojačkih dorada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-advantages">
                    <div className="advantages-img">
                        <img src={AdvantagesImg} alt=""/>
                    </div>
                    <div className="advantages-title-text">
                        <div className="adventages-title">
                            <p>Profesionalizam i kvalitet</p>
                            <h2>Najbolje hemijsko čišćenje u Nišu</h2>
                        </div>
                        <div className="adventages-text">
                            <p>Zadovoljstvo nam je da Vam pomognemo i pružimo rešenje za svaki Vaš zahtev. Naš stručan
                                tim teži ka stalnom usavršavanju naših usluga i to nas dovodi do sjajnih rezultata.</p>
                            <div className="adventages">
                                <div className="adventages-left">
                                    <h4><span> > </span>Garantujemo kvalitet</h4>
                                    <h4><span> > </span>Najviši standardi usluga</h4>
                                    <h4><span> > </span>Najkvalitetnija oprema</h4>
                                </div>
                                <div className="adventages-right">
                                    <h4><span> > </span>Napredna tehnologija</h4>
                                    <h4><span> > </span>Pristupačne cene</h4>
                                    <h4><span> > </span>Štitimo životnu sredinu</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}


export default HomePage;
