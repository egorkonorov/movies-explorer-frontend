import React from "react";
import menuIco from "./../../images/menu-ico.svg";
import { Link, withRouter, NavLink} from 'react-router-dom';
import profileIco from "./../../images/profile-ico.svg";
import closeIco from "./../../images/ico-right.svg";

function Navigation(){

    return (
        <>   
            <div className="navigation__overlay"></div>
            <img className="navigation__menu-ico" src={menuIco} alt="Иконка меню"></img>
            <img scr={closeIco} className="navigation__close-button" alt="Иконка закрытия"></img>
            <div className="navigation__menu">
                <div className="navigation__links">
                    <NavLink className="navigation__link" to="/">Главная</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/movies" className="navigation__link">Фильмы</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/saved-movies" className="navigation__link">Сохраненные фильмы</NavLink>
                </div>
                <Link to="/profile" className="navigation__account-base">
                    <img className="navigation__account-ico" src={profileIco} alt="Иконка профиля"></img>
                    <p className="navigation__account-button" to="/profile">Аккаунт</p>
                </Link>
            </div>
        </>
    
    
    );
};

export default Navigation;