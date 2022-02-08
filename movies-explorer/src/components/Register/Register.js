import React from "react";
import headerLogo from "./../../images/logo.svg";
import { Link, withRouter} from 'react-router-dom';

function Register(){

    return (
        <>
            <div className="page_black">
                <div className="register">
                    <Link  to="/" className="register__link"> <img src={headerLogo} alt="Логотип" className="register__logo"></img></Link>
                    <p className="register__heading">Добро пожаловать!</p>
                    <form className="register__form">
                        <p className="register__input-heding">Имя</p>
                        <input
                            className="register__input"
                            id="name-input"
                            type="text"
                            minLength="2"
                            maxLength="30"
                            name="name"
                            required
                            placeholder="Виталий"
                            >
                        </input>
                        <p className="register__input-heding">Email</p>
                        <input
                            className="register__input"
                            id="email-input"
                            type="email"
                            minLength="2"
                            maxLength="30"
                            name="password"
                            required
                            placeholder="pochta@yandex.ru"
                            >
                        </input>
                        <p className="register__input-heding">Пароль</p>
                        <input
                            className="register__input"
                            id="password-input"
                            type="password"
                            minLength="8"
                            name="password"
                            placeholder="example1122"
                            required
                            >
                        </input>
                        <span className="register__span">Что-то пошло не так...</span>
                        <button className="register__button" type="submit">Зарегестрироваться</button>
                        <p className="register__subtitle">Уже зарегестрированы?&nbsp;
                    <Link className="register__link" to="/login">
                            Войти
                        </Link>
                    </p>
                    </form> 
                </div>
            </div>
        </>
    
    
    );
};

export default Register;