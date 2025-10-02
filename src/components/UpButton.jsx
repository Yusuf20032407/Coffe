import React, { useEffect, useState } from 'react'
import strelka from '../assets/corner-left-up.svg'

const UpButton = () => {

    const scrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const [scrolll, setScroll] = useState(0);




    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setScroll(true)
                console.log("Chiqdim");

            } else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)

    }, [])
    return (
        <div>
            {
                scrolll ? (
                    <div onClick={scrollToUp} className="w-[70px] fixed top-[80%] right-4 h-[70px] flex items-center cursor-pointer  justify-center border border-[#24764B] rounded-2xl">
                        <img className="w-6" src={strelka} alt="arrow" />
                    </div>
                ) : ""
            }
        </div>
    )
}

export default UpButton
