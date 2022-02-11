import React from "react";
import Header from "./../Header/Header";
import { Link, withRouter} from 'react-router-dom';
import headerLogo from "./../../images/logo.svg";
import profileIco from "./../../images/profile-ico.svg";
import Navigation from "./../Navigation/Navigation"
function Profile(){

    return (
        <>
            <div className="page_black">
                <Header>
                    <Link  to="/" className="header__link"><img src={headerLogo} alt="Логотип" className="header__logo"></img></Link>
                    <div className="header__films-base">
                        <Link  to="/movies"  className="header__films">Фильмы</Link>
                        <Link  to="/saved-movies" className="header__saved-films">Сохраненные фильмы</Link>
                    </div>
                    <Link to="/profile" className="header__account-base">
                        <img className="header__account-ico" src={profileIco} alt="Иконка профиля"></img>
                        <p className="header__account-button" to="/profile">Аккаунт</p>
                    </Link>
                    <Navigation></Navigation>
                </Header>
                <div className="profile">
                    <p className="profile__heading">Привет, Виталий!</p>
                    <form className="profile__form">
                        <div className="profile__inputs-base">
                            <div className="profile__input-base">
                                <p className="profile__input-naming">Имя</p>   
                                <input
                                className="profile__input"
                                id="name-input"
                                type="text"
                                minLength="2"
                                maxLength="30"
                                name="name"
                                required
                                placeholder="Виталий"
                            >
                            </input>
                            </div>
                            <div className="profile__inputs-line"></div>
                            <div className="profile__input-base">
                                <p className="profile__input-naming">Email</p>
                                <input
                                className="profile__input"
                                id="email-input"
                                type="email"
                                minLength="2"
                                maxLength="100"
                                name="email"
                                required
                                placeholder="pochta@yandex.ru"
                                >
                            </input>
                            </div>
                        </div>
                        <div className="profile__buttons">
                            <button className="profile__button-edit" type="submit">Редактировать</button>
                            <button className="profile__button-exit" type="button">Выйти из аккаунта</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    
    
    );
};

export default Profile;