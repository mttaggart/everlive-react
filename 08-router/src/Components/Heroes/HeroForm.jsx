import React from "react";
import "./HeroForm.css";

class HeroForm extends React.Component {
    constructor(props) {
        super(props);
        this.defaultHero = {
            name: "",
            secretIdentity: "",
            powers: [],
            status: "",
            team: ""
        }
        this.state = {
            errors: [],
            hero: this.defaultHero
        }
    }

    changeHandler(e) {
        const newHero = this.state.hero;
        const val = e.target.value;
        switch(e.target.id) {
            case "hero-name":
                newHero.name = val;
                break;
            case "hero-id":
                    newHero.secretIdentity = val;
                break;
            case "hero-powers":
                    newHero.powers = val.split(",");
                break;
            case "hero-status":
                    newHero.status = val;
                break;
            case "hero-team":
                    newHero.team = val;
                break;
            default:
                break;
        }
        this.setState({hero: newHero});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHandler(this.state.hero);
        // Reset state to default
        this.setState({hero: this.defaultHero});
    }

    render() {
        const changeHandler = this.changeHandler.bind(this);

        return (
            <div className="hero-form">
                <h3 className="hero-form-title">New Hero</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Hero Name</label>
                    <input 
                        type="text" 
                        id="hero-name" 
                        onChange={changeHandler}
                        value={this.state.hero.name}
                    />
                    <label>Secret Identity</label>
                    <input 
                        type="text" 
                        id="hero-id" 
                        onChange={changeHandler}
                        value={this.state.hero.secretIdentity}
                    />
                    <label>Powers</label>
                    <input 
                        type="text" 
                        id="hero-powers" 
                        onChange={changeHandler}
                        value={this.state.hero.powers.join(",")}
                    />
                    <label>Status</label>
                    <input 
                        type="text" 
                        id="hero-status" 
                        onChange={changeHandler}
                        value={this.state.hero.status}
                    />
                    <label>Team</label>
                    <input 
                        type="text" 
                        id="hero-team" 
                        onChange={changeHandler}
                        value={this.state.hero.team}
                    />
                    <button type="submit">Add Hero</button>
                </form>
            </div>
        )
    }
}

export default HeroForm;