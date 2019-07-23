import React from "react";
import PowerListItem from "./PowerListItem";

const PowerList = ({powers}) => {
    let powerLis = [];
    for (let i=0; i<powers.length; i++) {
        powerLis.push(
            <PowerListItem key={i} power={powers[i]} />
        );
    };
    return (
        <div>
            <h4>Powers</h4>
            <ul>
                {powerLis}
            </ul>
        </div>
    );
}

export default PowerList;