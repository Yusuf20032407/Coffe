import React from "react";
import { motion } from "framer-motion";
import instagram from "../assets/instagram.svg";
import telefon from "../assets/telefon.svg";
import foto1 from "../assets/Group53.svg";
import { Link } from "react-router-dom";

const Footermain = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-[400px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={fadeUp}
                >
                    <h1 className="text-white font-extrabold text-[40px] sm:text-[60px] lg:text-[80px] leading-[109%] tracking-[-3%] montserrent">
                        Our <br />
                        <span className="text-[#2C9B5A]">Contacts</span>
                    </h1>
                    <p className="text-[#D9D9D9] font-normal text-base sm:text-lg lg:text-xl leading-[163%] tracking-[-2%] montserrent pt-6">
                        Have time to buy the most harmonious <br className="hidden md:block" />
                        drinks in the new Starbucks coffee and <br className="hidden md:block" />
                        don't forget about the discount!
                    </p>
                    <div className="pt-10 space-y-6">
                        <Link to='https://instagram.com'>
                            <motion.div
                                className="flex items-center pb-10 gap-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={instagram} alt="Instagram" className="w-8 h-8 sm:w-10 sm:h-10" />
                                <p className="text-white montserrent font-medium text-lg sm:text-2xl lg:text-[32px] leading-[132%]">
                                    @Ylatipov007
                                </p>
                            </motion.div>
                        </Link>
                        <Link to='/'>
                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={telefon} alt="Phone" className="w-8 h-8 sm:w-10 sm:h-10" />
                                <p className="text-white montserrent font-medium text-lg sm:text-2xl lg:text-[32px] leading-[132%]">
                                    +998 95 559 54 44
                                </p>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={foto1}
                        alt="Contact Illustration"
                        className="max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Footermain;
