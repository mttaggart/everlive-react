import React from "react";
import HeroCard from "./HeroCard";

const style = {
    color: "white",
    fontFamily: "sans-serif"
}

const HeroList = ({heroes}) => {
    let heroComponents = [];
    for(let i=0; i<heroes.length; i++) {
        heroComponents.push(
            <HeroCard hero={heroes[i]} key={i} />
        );
    }
    return (
        <div style={style}>
            {heroComponents}
        </div>
    )
}

export default HeroList;