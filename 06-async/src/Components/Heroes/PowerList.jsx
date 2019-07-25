import React, {createRef, useState, useEffect} from "react";
import PowerListItem from "./PowerListItem";
import "./PowerList.css";

const PowerList = ({powers}) => {
    const [toggled, toggle] = useState(false);
    const listRef = createRef();

    useEffect(() => {
        const list = listRef.current;
        if(toggled) {
            list.classList.add("toggled");
        } else {
            list.classList.remove("toggled");
        }
    });

    const powerLis = powers.map((p,i) => (
        <PowerListItem key={i} power={powers[i]} />
    ));

    return (
        <div>
            <h4
                className="power-list-heading"
                onClick={() => {toggle(!toggled)}}
            >
                Powers
            </h4>
            <ul 
                ref={listRef}
                className="power-list"
            >
                {powerLis}
            </ul>
        </div>
    );
}

export default PowerList;