import React from "react";
import HeroCard from "./HeroCard";

const HeroList = ({heroes}) => {
    const heroCards = heroes.map((h,idx) => (
        <HeroCard hero={h} key={idx} />
    ));
    return (
        <div>
            {heroCards}
        </div>
    )
}

export default HeroList;