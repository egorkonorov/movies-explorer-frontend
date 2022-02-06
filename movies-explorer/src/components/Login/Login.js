import React from "react";
import headerLogo from "./../../images/logo.svg";
import { Link, withRouter} from 'react-router-dom';

function Login(){

    return (
        <>
            <div className="page_black">
                <div className="login">
                    <Link  to="/" className="login__link"> <img src={headerLogo} alt="Логотип" className="register__logo"></img></Link>
                    <p className="login__heading">Рады видеть!</p>
                    <form className="login__form">
                        <p className="login__input-heding">Email</p>
                        <input
                            className="login__input"
                            id="email-input"
                            type="email"
                            minLength="2"
                            maxLength="30"
                            name="password"
                            required
                            placeholder="pochta@yandex.ru"
                            >
                        </input>
                        <p className="login__input-heding">Пароль</p>
                        <input
                            className="login__input"
                            id="password-input"
                            type="password"
                            minLength="8"
                            name="password"
                            placeholder="example1122"
                            required
                            >
                        </input>
                        <button className="login__button" type="submit">Войти</button>
                        <p className="login__subtitle">Еще не зарегестрированы?&nbsp;
                    <Link className="login__link" to="/sign-in">
                            Регистрация
                        </Link>
                    </p>
                    </form> 
                </div>
            </div>
        </>
    
    
    );
};

export default Login;