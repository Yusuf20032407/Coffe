import React from "react";
import Card from "../components/card";
import Mainqismi from "../components/main-qismi";
import Sectioncard from "../components/section-card";
import Footermain from "../components/footer-main";
import EventsSection from "../components/grid-card";
import UpButton from "../components/UpButton";
import Location from "../components/Location";

const Home = () => {
    return (
        <div>
            <Card />
            <Mainqismi />
            <Sectioncard />
            <EventsSection />
            <div className="w-100% h-[500px] mb-52 mt-30">
                <h1 className="text-2xl montserrent text-white font-bold text-center mt-5">
                    Welcome to Uzbekistan Map
                </h1>
                <Location />
            </div>

            <Footermain />
            <UpButton />
        </div>
    );
};

export default Home;
