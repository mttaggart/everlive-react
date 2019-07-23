import React from "react";
import HeroList from "./HeroList";
import HeroForm from "./HeroForm";
import heroes from "../../lib/heroes";

class HeroContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes
        }
    }

    addHero(hero) {
        this.setState({
            heroes: this.state.heroes.concat([hero])
        });
    }

    render() {
        return (
            <div>
                <HeroList heroes={this.state.heroes} />
                <HeroForm submitHandler={this.addHero.bind(this)}/>
            </div>
            
        )
    }

}

export default HeroContainer;