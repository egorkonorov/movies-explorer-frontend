import React from "react";


function MoviesCard({card_src, card_alt, card_name, card_duration, card_savedClass}){

    return (
        <>
            <div className="moviesCard">
                <button className={card_savedClass} alt='Иконка сохранения'></button>
                <img className="moviesCard__pic" src={card_src} alt={card_alt}></img>
                <div className="moviesCard__base">
                    <p className="moviesCard__name">{card_name}</p>
                    <p className="moviesCard__duration">{card_duration}</p>
                </div>
            </div>

        </>
    
    
    );
};

export default MoviesCard;