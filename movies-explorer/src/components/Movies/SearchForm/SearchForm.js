import React, { useState }  from "react";
import searchPic from "./../../../images/find-button.svg"

function SearchForm({handleSearch}){

    const [searchedMovie, setsearchedMovie] = useState('')

    function handleChangeMovie(e) {
        setsearchedMovie(e.target.value);
      }

      function handleSubmit(e){
        e.preventDefault()
        handleSearch(searchedMovie)
        
    }   
    return (
        <>
            <div className="searchForm">
            <form className="searchForm__form" onSubmit={handleSubmit}>
                <div className="searchForm__base">
                    <input 
                        className="searchForm__input"
                        id="film-input"
                        type="text"
                        minLength="1"
                        maxLength="500"
                        placeholder="Фильм"
                        required
                        onChange={handleChangeMovie}
                    ></input>       
                     <button className="searchForm__button-pic" type="submit"></button>  
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