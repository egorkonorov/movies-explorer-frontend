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
                    card_alt={"Карты, деньги, два ствола"}
                    card_name={"Карты, деньги, два ствола"}
                    card_duration={"1ч 17м"}
                >
            
                </MoviesCard>
                <MoviesCard 
                    card_src={pic2}
                    card_alt={"Большой куш"}
                    card_name={"Большой куш"}
                    card_duration={"1ч 17м"}
                >
            
                </MoviesCard>
                <MoviesCard 
                    card_src={pic3}
                    card_alt={"Грязь"}
                    card_name={"Грязь"}
                    card_duration={"1ч 17м"}
                >
            
                </MoviesCard>
            </div>

        </>
    
    
    );
};

export default MoviesCardList;