import React from "react";
import Header from "./../Header/Header";
import SearchForm from "./../Movies/SearchForm/SearchForm";
import MoviesCardList from "./../Movies/MoviesCardList/MoviesCardList";
import Preloader from "./../Movies/Preloader/Preloader"
import Navigation from "./../Navigation/Navigation"
import Footer from "./../Footer/Footer";
import { Link, withRouter} from 'react-router-dom';
import headerLogo from "./../../images/logo.svg";
import profileIco from "./../../images/profile-ico.svg";
function Movies(){

    return (
        <>
        <div className="page_black">
            <Header>
                <Link  to="/" className="header__link"><img src={headerLogo} alt="Логотип" className="header__logo"></img></Link>
                <div className="header__films-base">
                    <Link to="/movies" className="header__films">Фильмы</Link>
                    <Link to="/saved-movies" className="header__saved-films">Сохраненные фильмы</Link>
                </div>
                <Link to="/profile" className="header__account-base">
                    <img className="header__account-ico" src={profileIco} alt="Иконка профиля"></img>
                    <p className="header__account-button" to="/profile">Аккаунт</p>
                </Link>
                <Navigation></Navigation>
            </Header>

            <SearchForm>

            </SearchForm>

            <MoviesCardList>

            </MoviesCardList>

            <Preloader>

            </Preloader>

            <Footer>
                
            </Footer>

            </div>
        </>
    
    
    );
};

export default Movies;
