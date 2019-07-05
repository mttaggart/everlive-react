import React from "react";
import HeroCard from "./HeroCard";

const style = {
    background: "navy",
    color: "white",
    fontFamily: "sans-serif"
}

const HeroList = ({heroes}) => {
    const heroCards = heroes.map((h,idx) => (
        <HeroCard hero={h} key={idx} />
    ));
    return (
        <div style={style}>
            {heroCards}
        </div>
    )
}

export default HeroList;