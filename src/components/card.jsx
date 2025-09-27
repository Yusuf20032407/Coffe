import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import foto from '../assets/Scoffe.png'
import Tilt from 'react-parallax-tilt';
import yure from '../assets/211.svg'
import raketa from '../assets/Group20.svg'
import pull from '../assets/Group21.svg'

const cards = [
    {
        img: yure,
        title: "Tasty",
        desc: "We have the most delicious coffee",
    },
    {
        img: raketa,
        title: "Fast",
        desc: "Our cafe will serve you quickly",
    },
    {
        img: pull,
        title: "Affordable",
        desc: "Enjoy coffee at the best price",
    },
];
const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    }),
};

const Card = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-[150px] items-center">
                <div className="flex-1">
                    <div className="overflow-hidden">
                        <motion.h1
                            className="text-white hover:shadow-[0_30px_70px_rgba(41,140,84,0.5)] rounded-xl p-4 sm:p-6 md:p-10 max-w-fit font-extrabold montserrent text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight tracking-tight transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: -60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            New Cafe by{" "}
                            <span className="text-[#298C54] montserrent font-extrabold">
                                StarBucks
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-[#D9D9D9] font-normal text-base sm:text-lg md:text-xl leading-relaxed pt-6 pl-2 sm:pl-4 md:pl-10 montserrent"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        >
                            Have time to buy the most harmonious drinks in the <br />
                            new Starbucks coffee and don't forget about the discount!
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap pt-6 pl-2 sm:pl-4 md:pl-8 gap-4 sm:gap-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link to="/">
                                    <Button variant="secondary">Select a coffee</Button>
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link to="/">
                                    <Button variant="ghost">More</Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="flex gap-6 sm:gap-8 md:gap-[46px] pl-2 sm:pl-4 md:pl-8 pt-8 sm:pt-10">
                        {[
                            { num: "9k+", label: "Premium Users" },
                            { num: "2k+", label: "Happy Customers" },
                            { num: "28k+", label: "Awards Winning" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col p-4 rounded-xl cursor-pointer bg-transparent"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 30px rgba(41, 140, 84, 0.4)",
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <p className="text-white font-normal text-3xl sm:text-4xl md:text-[62px] montserrent leading-tight tracking-tight">
                                    {item.num}{" "}
                                    <span className="text-[#298C54] font-bold"></span>
                                </p>
                                <p className="text-[#D9D9D9] font-normal text-sm sm:text-base md:text-xl leading-snug montserrent">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: [10, -20, 10] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-fit flex-1"
                >
                    <img src={foto} alt="Floating rasm" className=" sm:w-64 md:w-80 lg:w-[600px]" />
                </motion.div>
            </div>
            <div className="w-full mt-16 sm:mt-20 md:mt-[101px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-[64px] bg-[#1d2320] rounded-[24px] sm:rounded-[36px] md:rounded-[46px] p-6 sm:p-8 md:p-10 overflow-hidden">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        className="relative w-full h-[260px] sm:h-[280px] md:h-[296px] p-4 cursor-pointer rounded-2xl bg-white shadow-lg flex flex-col items-center justify-center"
                        variants={cardVariants}
                        initial="hidden"
                        animate="show"
                        custom={i}
                        whileHover={{
                            scale: 1.1,
                            rotateX: 10,
                            rotateY: -10,
                            boxShadow: "0px 0px 40px rgba(5,140,84,0.8)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-transparent"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(41,140,84,0.7), rgba(220,220,255,0.3), rgba(49,140,84,0.7))",
                                backgroundSize: "300% 300%",
                            }}
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <motion.img
                            src={card.img}
                            alt={card.title}
                            className="mx-auto w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mb-4 relative z-10"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{ rotate: 12, scale: 1.2 }}
                        />
                        <motion.p
                            className="montserrent font-semibold text-lg sm:text-xl md:text-[28px] text-gray-800 relative z-10"
                            whileHover={{ color: "#298C54", scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {card.title}
                        </motion.p>
                        <motion.p
                            className="montserrent font-normal text-sm sm:text-base md:text-[18px] text-gray-600 text-center relative z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {card.desc}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Card
