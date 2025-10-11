import React from "react";
import coffe from "../assets/usama.svg";
import Button from "./button";
import coffe1 from "../assets/usama2.svg";
import coffe2 from "../assets/usama3.svg";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const contentStyle = {
    background: "transparent",
};

const Sectioncard = () => {
    const products = [
        { img: coffe, title: "Fast", price: "7,45$", size: "330 ml" },
        { img: coffe1, title: "Fast", price: "7,45$", size: "330 ml" },
        { img: coffe, title: "Fast", price: "7,45$", size: "330 ml" },
        { img: coffe2, title: "Cappuccino", price: "7,45$", size: "330 ml" },
        { img: coffe1, title: "Fast", price: "7,45$", size: "330 ml" },
        { img: coffe1, title: "Fast", price: "7,45$", size: "330 ml" },
        { img: coffe1, title: "Fast", price: "7,45$", size: "330 ml" },
        { img: coffe1, title: "Fast", price: "7,45$", size: "330 ml" },
        { img: coffe2, title: "Cappuccino", price: "7,45$", size: "330 ml" },
    ];

    const [columns, setColumns] = React.useState(3);

    React.useEffect(() => {
        const getColumns = () => {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 640) return 2;
            return 1;
        };

        setColumns(getColumns());
        const handleResize = () => setColumns(getColumns());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="container mx-auto px-4 mt-[63px]">
            <motion.div
                className="flex flex-col pl-[50px] lg:pl-[150px] lg:flex-row items-start lg:items-center gap-6 lg:gap-[72px] mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-white montserrent font-extrabold text-[40px] sm:text-[60px] lg:text-[80px] leading-tight tracking-[-3%]"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    New Our <br />
                    <span className="text-[#2EA65E]">Products</span>
                </motion.h1>
                <motion.p
                    className="text-[#D9D9D9] font-normal text-base sm:text-lg lg:text-xl leading-[163%] tracking-[-2%] montserrent"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Have time to buy the most harmonious drinks{" "}
                    <br className="hidden lg:block" />
                    in the new Starbucks coffee and don't forget{" "}
                    <br className="hidden lg:block" />
                    about the discount! Starbucks coffee and{" "}
                    <br className="hidden lg:block" />
                    don't forget about the discount!
                </motion.p>
            </motion.div>
            <div className="max-w-[1200px] mx-auto mt-10">
                <Carousel arrows infinite slidesToScroll={1} dots>
                    {Array.from({ length: Math.ceil(products.length / columns) }).map(
                        (_, slideIndex) => (
                            <div key={slideIndex}>
                                <div
                                    className={`grid gap-6 justify-center ${columns === 3
                                        ? "grid-cols-3"
                                        : columns === 2
                                            ? "grid-cols-2"
                                            : "grid-cols-1"
                                        }`}
                                >
                                    {products
                                        .slice(
                                            slideIndex * columns,
                                            slideIndex * columns + columns
                                        )
                                        .map((item, i) => (
                                            <motion.div
                                                key={i}
                                                style={contentStyle}
                                                className="w-full max-w-[277px] h-[613px] rounded-[20px] mt-[20px] border-2 border-white mx-auto flex flex-col shadow-lg shadow-black/30 overflow-hidden"
                                                initial={{ opacity: 0, y: 100 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
                                                }}
                                            >
                                                <motion.img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full rounded-t-[20px]"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <div className="flex-1 flex flex-col justify-between p-4">
                                                    <div>
                                                        <p className="text-white text-center montserrent font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[163%] tracking-[-2%]">
                                                            {item.title}
                                                        </p>
                                                        <p className="text-[#D9D9D9] montserrent font-normal text-[16px] sm:text-[18px] lg:text-[20.13px] leading-[163%] tracking-[-2%] text-center mt-2">
                                                            Our cafe will serve <br /> you quickly
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col items-center mt-4">
                                                        <div className="flex items-center gap-4 sm:gap-[35px] justify-center">
                                                            <p className="font-medium text-[24px] sm:text-[28px] lg:text-[32px] montserrent text-white">
                                                                {item.price}
                                                            </p>
                                                            <p className="text-[#D9D9D9] font-normal text-[16px] sm:text-[18px] lg:text-[20.13px] montserrent">
                                                                {item.size}
                                                            </p>
                                                        </div>
                                                        <motion.div
                                                            className="mt-4"
                                                            whileHover={{
                                                                scale: 1.1,
                                                                rotate: [-2, 2, -2, 0],
                                                            }}
                                                            transition={{ type: "spring", stiffness: 300 }}
                                                        >
                                                            <Link to='/'>
                                                                <Button variant="default">Buy Product</Button>
                                                            </Link>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        )
                    )}
                </Carousel>
            </div>
        </div>
    );
};

export default Sectioncard;
