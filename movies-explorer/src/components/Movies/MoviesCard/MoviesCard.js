import React from "react";


function MoviesCard({card_src, card_alt, card_name, card_duration}){

    return (
        <>
            <div className="moviesCard">
                <div className="moviesCard__save-button">Сохранить</div>
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