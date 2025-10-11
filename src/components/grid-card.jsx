import React from "react";
import { motion } from "framer-motion";
import Button from "./button";

const EventsSection = () => {
    const cardAnimation = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div className="container mx-auto px-4">
            <motion.div
                className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[72px] mt-12 mb-12 lg:pl-[150px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={cardAnimation}
            >
                <p className="text-[#D9D9D9] montserrent font-normal text-base sm:text-lg lg:text-xl leading-[163%] tracking-[-2%]">
                    Only in 2021 we have made more than 100,000 <br className="hidden md:block" />
                    orders for you, your loved ones, all of you, and in <br className="hidden md:block" />
                    2022 we are ready to destroy the market
                </p>
                <h1 className="text-white font-extrabold text-[40px] sm:text-[60px] lg:text-[80px] leading-[109%] tracking-[-3%] montserrent">
                    Our New <br />
                    <span className="text-[#35C56B]">Events</span>
                </h1>
            </motion.div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {[
                    { img: "/src/assets/alex1.webp", text: "TWO COFFEE FOR 1 PRICE" },
                    { img: "/src/assets/Rectangle9.webp", text: "KITCHEN TOUR" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-[615px] h-[260px] rounded-[30px] bg-cover bg-center flex flex-col justify-start"
                        style={{ backgroundImage: `url(${item.img})` }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        variants={cardAnimation}
                    >
                        <div className="pt-10 pl-6">
                            <p className="text-white pb-6 montserrent font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[109%]">
                                {item.text}
                            </p>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button variant="more">More</Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
                {[
                    { img: "/src/assets/Rectangle10.webp", text: "FREE COFFEE FOR 3 COFFEE" },
                    { img: "/src/assets/Rectangle11.webp", text: "OUR INSTAGRAM" },
                    { img: "/src/assets/Rectangle12.webp", text: "WHERE ARE YOU CHOOSE US?" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-[402px] h-[260px] rounded-[30px] bg-cover bg-center flex flex-col justify-start"
                        style={{ backgroundImage: `url(${item.img})` }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        variants={cardAnimation}
                    >
                        <div className="pt-10 pl-6">
                            <p className="text-white pb-6 montserrent font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[109%]">
                                {item.text}
                            </p>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button variant="more">More</Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EventsSection;
