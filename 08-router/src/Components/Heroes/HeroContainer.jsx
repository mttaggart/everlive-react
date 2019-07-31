import React from "react";
import HeroList from "./HeroList";
import HeroForm from "./HeroForm";
import heroes from "../../lib/heroes";

const HeroContainer = ({heroes, loading, fetchHeroes, postHero}) => {

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <HeroList heroes={heroes} />
            <HeroForm submitHandler={postHero}/>
        </div>
    )
}

export default HeroContainer;