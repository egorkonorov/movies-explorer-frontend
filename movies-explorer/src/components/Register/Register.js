import React, {useState, useEffect} from "react";
import headerLogo from "./../../images/logo.svg";
import { Link, withRouter} from 'react-router-dom';

function Register({handleRegister}){

    let name = ('')
    let email = ('')
    let password = ('')
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [nameLength, setNameLength] = useState(0)
    const [emailLength, setEmailLength] = useState(0)
    const [passwordLength, setPasswordLength] = useState(0)
    let isALLValid = false
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [registerButtonClassName, setRegisterButtonClassName] = useState('register__button_inactive')
    const [registerNameSpanClass, setRegisterNameSpanClass] = useState('register-name__span_inactive')
    const [registerEmailSpanClass, setRegisterEmailSpanClass] = useState('register-name__span_inactive')
    const [registerPasswordSpanClass, setRegisterPasswordSpanClass] = useState('register-name__span_inactive')
    let isValidName = true
    let isValidPassword = true
    let isValidEmail = true

    
    function handleChangeEmail(e) {
        email = (e.target.value)
        setEmailLength(email.length)
        setEmailValue(email)
        isValidEmail = ((/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(email))
        setRegisterEmailSpanClass(`${isValidEmail ? 'register-email__span_inactive' : 'register-email__span_active'}`)
        isALLValid = (isValidEmail && isValidPassword && isValidName && nameLength > 0 && emailLength > 0 && passwordLength > 0)
        setRegisterButtonClassName(`${isALLValid ? 'register__button_active' : 'register__button_inactive'}`)
        setButtonEnabled(!isALLValid)
      }

    function handleChangePassword(e) {
        password = (e.target.value)
        setPasswordLength(password.length)
        setPasswordValue(password)
        isValidPassword = ((/^[a-zA-Z0-9]+$/gi).test(password) && password.length > 7)
        setRegisterPasswordSpanClass(`${isValidPassword ? 'register-password__span_inactive' : 'register-password__span_active'}`)
        isALLValid = (isValidEmail && isValidPassword && isValidName && nameLength > 0 && emailLength > 0 && passwordLength > 0)
        setRegisterButtonClassName(`${isALLValid ? 'register__button_active' : 'register__button_inactive'}`)
        setButtonEnabled(!isALLValid)
      }

      function handleChangeName(e) {
        name = (e.target.value)
        setNameLength(name.length)
        setNameValue(name)
        isValidName = ((/^[а-яА-ЯёЁa-zA-Z0-9/-]+$/gi).test(name) && name.length > 1 && name.length <30)
        setRegisterNameSpanClass(`${isValidName ? 'register-name__span_inactive' : 'register-name__span_active'}`)
        isALLValid = (isValidEmail && isValidPassword && isValidName && nameLength > 0 && emailLength > 0 && passwordLength > 0)
        setRegisterButtonClassName(`${isALLValid ? 'register__button_active' : 'register__button_inactive'}`)
        setButtonEnabled(!isALLValid)
      }  

     function handleSubmit(e){
        e.preventDefault()
        handleRegister(passwordValue, emailValue, nameValue)
    } 
    


    return (
        <>
            <div className="page_black">
                <div className="register">
                    <Link  to="/" className="register__link"> <img src={headerLogo} alt="Логотип" className="register__logo"></img></Link>
                    <p className="register__heading">Добро пожаловать!</p>
                    <form className="register__form" onSubmit={handleSubmit} novalidate>
                        <p className="register__input-heding">Имя</p>
                        <input
                            className="register__input"
                            id="name-input"
                            type="text"
                            minLength="2"
                            maxLength="30"
                            name="name"
                            placeholder="Виталий"
                            onChange={handleChangeName}
                            >
                        </input>
                        <span className={registerNameSpanClass}>от 2-х до 30-ти символов латинские, русские буквы и дефис</span>
                        <p className="register__input-heding">Email</p>
                        <input
                            className="register__input"
                            id="email-input"
                            type="email"
                            minLength="2"
                            maxLength="30"
                            name="password"
                            placeholder="pochta@yandex.ru"
                            onChange={handleChangeEmail}
                            >
                        </input>
                        <span className={registerEmailSpanClass}>Некорректный email</span>
                        <p className="register__input-heding">Пароль</p>
                        <input
                            className="register__input"
                            id="password-input"
                            type="password"
                            minLength="8"
                            name="password"
                            placeholder="example1122"
                            onChange={handleChangePassword}
                            >
                        </input>
                        <span className={registerPasswordSpanClass}>Пароль должен состоять из латинских букв или цифр и быть не меньше 8 символов</span>
                        <button className={registerButtonClassName} type="submit" disabled={buttonEnabled}>Зарегестрироваться</button>
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