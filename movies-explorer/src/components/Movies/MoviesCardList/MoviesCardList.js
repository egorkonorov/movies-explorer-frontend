import React, { useState, useEffect} from "react";
import MoviesCard from "./../MoviesCard/MoviesCard"


function MoviesCardList({movies, emptyCardsClass, preloaderNumber, responseError}){


    return (
        <>
            <div className="moviesCardList">
            <p className={emptyCardsClass}>Ничего не найдено</p>
            <p className={responseError}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> 
            {movies.slice(0, preloaderNumber).map((movie) => {
          return (
            <MoviesCard
            card_src={` https://api.nomoreparties.co/${movie.image.url}`}
            card_alt={movie.nameRU}
            card_name={movie.nameRU}
            card_duration={movie.duration}
            card_savedClass={"moviesCard__pic-unsaved"}
            />
          );
        })}
            </div>

        </>
    
    
    );
};

export default MoviesCardList;