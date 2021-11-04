import React from "react";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import "./Intro/SMButton.css";

const Home = (props) => {
    return (
        <div>
            <Hero/>
            <Intro conference={props.conference}/>
        </div>
    );
};

export default Home;