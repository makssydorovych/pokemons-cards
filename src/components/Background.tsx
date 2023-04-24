import React from 'react';
import pokeball1 from "../assets/assets/pokeball.png";
import pokeball2 from "../assets/assets/pokeball2.png";
import balbasaur from "../assets/assets/balbasaur.png";
import pikachy from "../assets/assets/pikachu.png";
import charlizard from "../assets/assets/charlizard.png";
const Background = () => {
    return (
        <div className="background">
            <img src={pokeball1} alt="pokeball" className="pokeball pokeball1"/>
            <img src={charlizard} alt="three pokeball" className="pokeball pokeball2"/>
            <img src={balbasaur} alt="pokeball" className="pokeball pokeball3"/>
            <img src={pikachy} alt="three pokeball" className="pokeball pokeball4"/>
            <img src={balbasaur} alt="pokeball" className="pokeball pokeball5"/>
            <img src={pokeball2} alt="three pokeball" className="pokeball pokeball6"/>
        </div>
    );
};

export default Background;