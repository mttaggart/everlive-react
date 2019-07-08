import React from "react";
import HeroCard from "./HeroCard";

const style = {
    background: "navy",
    color: "white",
    fontFamily: "sans-serif"
}

const HeroList = ({heroes}) => {
    let heroComponents = [];
    for(const i=0; i<heroes.length; i++) {
        heroComponents.push(
            <HeroCard hero={heroes[i]} key={i} />
        );
    }
    return (
        <div style={style}>
            {heroCards}
        </div>
    )
}

export default HeroList;