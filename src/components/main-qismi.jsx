import React from 'react'
import cardfoto from '../assets/Group97.svg'
import bgimg from '../assets/Group31.png'
import icon from '../assets/Polygon1.svg'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Mainqismi = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center md:gap-[120px] lg:gap-[180px] xl:gap-[189px]">
                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                >
                    <img
                        src={cardfoto}
                        alt="cardfoto"
                        className="max-w-[548px] w-full object-contain rounded-xl"
                    />
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 mt-10 md:mt-0 max-w-[457px]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div>
                        <motion.p
                            className="text-white pb-8 font-extrabold text-[40px] md:text-[60px] lg:text-[80px] leading-[110%] montserrent tracking-[-2%]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            We make{" "}
                            <span className="text-[#2FA85F] font-extrabold">
                                delicious
                            </span>
                        </motion.p>
                        <motion.p
                            className="text-[#D9D9D9] pb-8 font-normal text-base md:text-lg lg:text-xl leading-[160%] montserrent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Only in 2021 we have made more than 100,000 orders for you,
                            your loved ones, all of you, and in 2022 we are ready to
                            destroy the market.
                        </motion.p>
                    </div>
                    <motion.div
                        className="bg-center w-full h-[200px] md:h-[275px] relative bg-cover rounded-2xl overflow-hidden"
                        style={{ backgroundImage: `url(${bgimg})` }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.3, ease: "easeOut", delay: 0.8 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <motion.div
                            className="absolute mt-[110px] left-1/2 transform -translate-x-1/2 w-[240px] md:w-[326px] h-[60px] md:h-[70px] bg-[#2A9256] rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 25px rgba(47,168,95,0.7)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="https://youtu.be/C9UMVmi8DLI">
                                <button className="flex items-center gap-2 text-white font-semibold text-lg md:text-2xl">
                                    <motion.img
                                        src={icon}
                                        alt="icon"
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    Cooking Process
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Mainqismi
