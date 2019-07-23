import React from "react";
import PowerList from "./PowerList";
import "./HeroCard.css";

const HeroCard = ({hero}) => (
    <div className="hero-card">
        <h3 className="hero-title">{hero.name}</h3>
        <div className="hero-details">
            <p><em>{hero.secretIdentity}</em></p>
            <PowerList powers={hero.powers} />
        </div>
    </div>
);

export default HeroCard;