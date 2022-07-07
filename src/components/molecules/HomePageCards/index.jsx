import React from "react";
import database from '../../../../database.json';
import MainCard from "../MainCard";

import './style.scss';

const HomePageCards = () => {
    return (       
            <ul className="homePageCards">
            {database.homePageCards.map((card) => {
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