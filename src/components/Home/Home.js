import React from "react";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import "./Intro/SMButton.css";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Intro/>
        </div>
    );
};

export default Home;