import React, {useEffect, useState} from "react";
import "./header.styles.scss";
import {Link, NavLink} from "react-router-dom";

const Header = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowScroll(window.scrollY >= 100);
        })
    }, []);


    return (
        <nav className={showScroll ? "nav-black" : "nav-none"}>
            <Link className='logo' to='/'>
                <p className="logo-txt">ETILEN</p>
            </Link>
            <input type="checkbox" id="ham-menu"/>
            <label htmlFor="ham-menu">
                <div className="hide-des">
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                    <span className="menu-line"/>
                </div>

            </label>
            <div className="full-page-green"/>
            <div className="ham-menu">
                <ul className="centre-text bold-text options">
                    <li><NavLink activeClassName="selected" className='option' to='/'>Početna</NavLink></li>
                    <li><NavLink activeClassName="selected" className='option' to='/contact'>Kontakt</NavLink></li>
                </ul>
            </div>
        </nav>
        // <>
        //     <div className={showScroll ? "nav-black" : "nav-none"}>
        //         <div className="logo">
        //             <h2>ETILEN</h2>
        //         </div>
        //         <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox"/>
        //         <label htmlFor="page-nav-toggle">
        //             <svg className="icon--menu-toggle" viewBox="0 0 60 30">
        //                 <g className="icon-group">
        //                     <g className="icon--menu">
        //                         <path d="M 6 0 L 54 0"/>
        //                         <path d="M 6 15 L 54 15"/>
        //                         <path d="M 6 30 L 54 30"/>
        //                     </g>
        //                     <g className="icon--close">
        //                         <path d="M 15 0 L 45 30"/>
        //                         <path d="M 15 30 L 45 0"/>
        //                     </g>
        //                 </g>
        //             </svg>
        //         </label>
        //         <nav className="main-navigation">
        //             <ul>
        //                 <li><NavLink activeClassName="selected" className='option' to='/'>Početna</NavLink></li>
        //                 <li><NavLink activeClassName="selected" className='option' to='/contact'>Kontakt</NavLink></li>
        //             </ul>
        //         </nav>
        //     </div>
        // </>
    )

}


export default Header;
