import React from 'react'
import Card from '../components/card'
import Mainqismi from '../components/main-qismi'
import Sectioncard from '../components/section-card'
import Footermain from '../components/footer-main'
import EventsSection from '../components/grid-card'
import UpButton from '../components/UpButton'


const Home = () => {
    return (
        <div>
            <Card />
            <Mainqismi />
            <Sectioncard />
            <EventsSection />
            <Footermain />
            <UpButton/>
        </div>
    )
}

export default Home
