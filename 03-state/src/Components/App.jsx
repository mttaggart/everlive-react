import React from "react";
import Header from "./Layout/Header";
import HeroContainer from "./Heroes/HeroContainer";

const App = () => (
    <div>
        <Header>
            <h1>The Paragon Group</h1>
            <h2>The heroes you're looking for</h2>
        </Header>
        <HeroContainer />
    </div>
);

export default App;