import React from "react";
import HeroList from "./HeroList";
import HeroForm from "./HeroForm";
import heroes from "../../lib/heroes";

class HeroContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            loading: true
        }
    }

    loadHeroes() {
        setTimeout(() => {
            this.setState({heroes, loading: false})
        }, 1000);
    }

    componentDidMount() {
        if(this.state.heroes.length === 0) {
            this.loadHeroes();
        }
    }

    addHero(hero) {
        this.setState({
            heroes: this.state.heroes.concat([hero])
        });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <HeroList heroes={this.state.heroes} />
                <HeroForm submitHandler={this.addHero.bind(this)}/>
            </div>
        )
    }

}

export default HeroContainer;