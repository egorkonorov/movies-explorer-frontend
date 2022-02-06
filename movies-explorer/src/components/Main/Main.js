import React from "react";
import { Link, withRouter} from 'react-router-dom';
import Header from "./../Header/Header";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./../Footer/Footer";
import headerLogo from "./../../images/logo.svg";
function Main(){

    return (
        <>
        <div className="page">
            <Header>
            <Link  to="/" className="header__link"> <img src={headerLogo} alt="Логотип" className="header__logo"></img></Link>
            <div className="header__userBase">
                <p><Link className="header__link" to="/register">Регистрация</Link></p>
                <button className="header__button" ><Link className="header__buttonLink" to="/login">Войти</Link></button>
            </div>
            </Header>

            <Promo>

            </Promo>

            <NavTab>

            </NavTab>

            <AboutProject id="aboutProject">
                
            </AboutProject>

            <Techs id="techs">

            </Techs>

            <AboutMe id="aboutMe">

            </AboutMe>

            <Portfolio>
                
            </Portfolio>

            <Footer>

            </Footer>

        </div>
        </>
    
    
    );
};

export default Main;
