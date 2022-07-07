import React from "react";
import homePageCardsData from '@staticData/homePageCardsData.json';
import MainCard from "../MainCard";

import './style.scss';

const HomePageCards = () => {
    return (       
            <ul className="homePageCards">
            {homePageCardsData.homePageCards.map((card) => {
                return (
                <MainCard key={card.id}
                title={card.title}
                backgroundStyle={card.backgroundStyle}
                />
                )                
            })}
            </ul>

    )
    
    
} 

export default HomePageCards