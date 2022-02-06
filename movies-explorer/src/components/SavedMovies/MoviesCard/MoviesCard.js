import React from "react";
import deleteIco from "./../../../images/delete-icon.svg";

function MoviesCard({card_src, card_alt, card_name, card_duration}){

    return (
        <>
            <div className="moviesCard">
            <button className="moviesCard__delete-button"><img src={deleteIco} className="moviesCard__delete-ico" alt="Иконка удаления"></img></button>
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