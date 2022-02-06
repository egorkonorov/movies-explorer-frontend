import React from "react";
import searchPic from "./../../../images/find-button.svg"

function SearchForm(){

    return (
        <>
            <div className="searchForm">
            <form className="searchForm__form">
                <div className="searchForm__base">
                    <input 
                        className="searchForm__input"
                        id="film-input"
                        type="text"
                        minLength="2"
                        maxLength="500"
                        placeholder="Фильм"
                        required
                    ></input>       
                     <img className="searchForm__button-pic" src={searchPic} alt="Иконка отправки формы"></img>  
                </div>
                <div className="searchForm__checkbox-base">
                <input type="checkbox" className="searchForm__checkbox" id="checkbox" />
                <label for="checkbox" className="searchForm__switch">Короткометражки</label>
                </div>
                <div className="searchForm__line"></div>
            </form>
            </div>
        </>
    
    
    );
};

export default SearchForm;