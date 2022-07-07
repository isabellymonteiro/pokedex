import React from "react";
import staticData from '@staticData.json';
import MainCard from "../MainCard";

import './style.scss';

const HomePageCards = () => {
    return (       
            <ul className="homePageCards">
            {staticData.homePageCards.map((card) => {
                return (
                <MainCard key={card.id}
                title={card.title}
                backgroundStyle={card.backgroundStyle}
                pokeball={card.pokeball}
                />
                )                
            })}
            </ul>

    )
    
    
} 

export default HomePageCards