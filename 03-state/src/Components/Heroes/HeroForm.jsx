import React from "react";

class HeroForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            hero: {
                name: "",
                secretIdentity: "",
                powers: [],
                status: "",
                team: ""
            }
        }
    }

    changeHandler(e) {
        console.log(e);
        // TODO: Implement a change handler for form data
    }

    render() {

        return (
            <div>
                <h3>New Hero</h3>
                <form onSubmit={this.props.submitHandler}>
                    <label>Hero Name</label>
                    <input type="text" id="hero-name" />
                    <label>Secret Identity</label>
                    <input type="text" id="hero-id" />
                    <label>Powers</label>
                    <textarea id="hero-powers"></textarea>
                    <label>Status</label>
                    <input type="text" id="hero-status" />
                    <label>Team</label>
                    <input type="text" id="hero-team" />
                    <button type="submit">Add Hero</button>
                </form>
            </div>
        )
    }
}

export default HeroForm;