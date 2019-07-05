import React from "react";
import Header from "./Layout/Header";
import HeroList from "./Heroes/HeroList";
import heroes from "../lib/heroes";

const App = () => (
    <div>
        <Header>
            <h1>The Paragon Group</h1>
            <h2>The heroes you're looking for</h2>
        </Header>
        <HeroList heroes={heroes}/>
    </div>
);

export default App;