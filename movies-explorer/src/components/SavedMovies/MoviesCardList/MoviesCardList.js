import React from "react";
import MoviesCard from "./../MoviesCard/MoviesCard"
import pic1 from "./../../../images/pic1.jpg"
import pic2 from "./../../../images/pic2.jpg"
import pic3 from "./../../../images/pic3.jpg"

function MoviesCardList(){

    return (
        <>
            <div className="moviesCardList">
                <MoviesCard 
                    card_src={pic1}
                    card_alt={"33 слова о дизайне"}
                    card_name={"33 слова о дизайне"}
                    card_duration={"1ч 17м"}
                >
            
                </MoviesCard>
                <MoviesCard 
                    card_src={pic2}
                    card_alt={"Киноальманах «100 лет дизайна»"}
                    card_name={"Киноальманах «100 лет дизайна»"}
                    card_duration={"1ч 17м"}
                >
            
                </MoviesCard>
                <MoviesCard 
                    card_src={pic3}
                    card_alt={"В погоне за Бенкси"}
                    card_name={"В погоне за Бенкси"}
                    card_duration={"1ч 17м"}
                >
            
                </MoviesCard>
            </div>

        </>
    
    
    );
};

export default MoviesCardList;