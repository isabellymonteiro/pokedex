import React from "react";
import homePageCardsData from '@staticData/homePageCardsData.json';
import MainCard from "@molecules/MainCard";

import './style.scss';

const HomePageCards = () => {
    return ( 
        <>
            
            <ul className="homePageCards">
            {homePageCardsData.homePageCards.map((card) => {
                return (
                <MainCard key={card.id}
                title={card.title}
                backgroundStyle={card.backgroundStyle}
                linkTo={card.linkTo}
                /> 
                )                
            })}
            </ul>

            
        </>      
    )
    
    
} 

export default HomePageCards