import React, {useCallback, useState, useEffect} from "react";
import headerLogo from "./../../images/logo.svg";
import { Link, withRouter} from 'react-router-dom';

function Login(){

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [loginEmailSpanClass, setLoginEmailSpanClass] = useState('login-email__span_inactive')
    const [loginPaswordSpanClass, setLoginPasswordSpanClass] = useState('login-password__span_inactive')
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [loginButtonClassName, setLoginButtonClassName] = useState('login__button_inactive')
    const [buttonEnabled, setIsButtonEnabled] = useState(true)

    function handleChangeEmail(e) {
        setEmailValue(e.target.value)
        resetEmail()
      } 

      function handleChangePassword(e) {
        setPasswordValue(e.target.value)
        resetPassword()
      }   

      const resetEmail= useCallback(
        () => {
            setIsValidEmail((/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(emailValue))
            setLoginEmailSpanClass(`${isValidEmail? 'login-email__span_inactive': 'login-email__span_active'}`)
        },
        [emailValue, isValidEmail]
      );

      const resetPassword= useCallback(
        () => {
            setIsValidPassword(passwordValue.length > 0)
            setLoginPasswordSpanClass(`${isValidPassword? 'login-password__span_inactive': 'login-password__span_active'}`)
        },
        [passwordValue, isValidPassword]
      );

      useEffect(() => {
        setLoginButtonClassName(`${isValidPassword  && isValidEmail ? 'login__button_active' : 'login__button_inactive'}`)
        setIsButtonEnabled(`${isValidPassword  && isValidEmail ? false : true}`)
     }, [isValidEmail, isValidPassword]);
   

    return (
        <>
            <div className="page_black">
                <div className="login">
                    <Link  to="/" className="login__link"> <img src={headerLogo} alt="Логотип" className="register__logo"></img></Link>
                    <p className="login__heading">Рады видеть!</p>
                    <form className="login__form" noValidate>
                        <p className="login__input-heding">Email</p>
                        <input
                            className="login__input"
                            id="email-input"
                            type="email"
                            name="password"
                            required
                            placeholder="pochta@yandex.ru"
                            onChange={handleChangeEmail}
                            >
                        </input>
                        <span className={loginEmailSpanClass}>Некорректный email</span>
                        <p className="login__input-heding">Пароль</p>
                        <input
                            className="login__input"
                            id="password-input"
                            type="password"
                            name="password"
                            placeholder="example1122"
                            required
                            onChange={handleChangePassword}
                            >
                        </input>
                        <span className={loginPaswordSpanClass}>Заполните это поле</span>
                        <button className={loginButtonClassName} type="submit" disabled={buttonEnabled}>Войти</button>
                        <p className="login__subtitle">Еще не зарегестрированы?&nbsp;
                    <Link className="login__link" to="/register">
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