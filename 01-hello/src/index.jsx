import {render} from "react-dom";
import React from "react";

const Footer = () => (
    <footer>
        <p>This page created by React</p>
    </footer>
);

const Notification = (props) => (
    <div className="alert">
        {props.children}
    </div>
); 

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, React!</h1>
                <Notification>
                    <p>This is important!</p>
                </Notification>
                <Footer />
            </div>
        )
    }
}

render(<App/>,document.getElementById("app"));