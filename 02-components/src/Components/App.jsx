import React from "react";
import HeroList from "../Components/Heroes/HeroList";
import heroes from "../heroes";

const App = () => (
    <div>
        <header>
            <h1>The Paragon Group</h1>
            <h2>The heroes you're looking for</h2>
        </header>
        <HeroList heroes={heroes}/>
    </div>
)

export default App;