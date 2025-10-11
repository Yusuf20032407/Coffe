import React from "react";
import Card from "../components/card";
import Mainqismi from "../components/main-qismi";
import Sectioncard from "../components/section-card";
import Footermain from "../components/footer-main";
import EventsSection from "../components/grid-card";
import UpButton from "../components/UpButton";
import Location from "../components/location";

const Home = () => {
    return (
        <div>
            <Card />
            <Mainqismi />
            <Sectioncard />
            <EventsSection />
            <Footermain />
            <Location />
            <UpButton />
        </div>
    );
};

export default Home;
