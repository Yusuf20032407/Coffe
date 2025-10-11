import React, { useState } from 'react';
import logo from '../assets/StarBucks.svg';
import { Link, useNavigate } from 'react-router-dom';
import Button from './button';
import { motion } from 'framer-motion';
import { Coffee, X } from 'lucide-react';
import { useAuth } from './Authcontext';
import { Button as AntButton } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

const Navbar = ({ onToggleTheme, isDark }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const navItems = [
        { name: "Home", path: "/home" },
        { name: "Menu", path: "/menu" },
        { name: "Revards", path: "/Revards" },
        { name: "Contact", path: "/contact" },
    ];

    const handleLogout = () => {
        logout();
        navigate("/register", { replace: true });
    };

    return (
        <motion.div
            className="container mx-auto px-6 py-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
            }}
        >
            <div className="flex items-center justify-between">
                <Link to="/home">
                    <img src={logo} alt="logo" className="max-w-[140px]" />
                </Link>

                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-10">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={index}
                                className="text-[#D9D9D9] hover:text-[#298C54] montserrent font-medium text-[18px]"
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.5 }
                                    }
                                }}
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <AntButton
                        type="text"
                        shape="circle"
                        size="large"
                        onClick={onToggleTheme}
                        icon={isDark ? <SunOutlined /> : <MoonOutlined />}
                    />

                    <Button onClick={handleLogout} variant="secondary">Logout</Button>
                    <Link to="/register">
                        <Button variant="ghost">Register</Button>
                    </Link>
                </div>

                <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
                    <Coffee size={32} />
                </button>
            </div>

            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-[#1d2320] w-[280px] h-full p-6 flex flex-col justify-between"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="flex items-center justify-between">
                            <img src={logo} alt="logo" className="h-10" />
                            <button onClick={() => setIsOpen(false)} className="text-white">
                                <X size={28} />
                            </button>
                        </div>

                        <nav className="mt-10 flex-1">
                            <ul className="flex flex-col gap-6">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-white hover:text-[#298C54] text-lg montserrent"
                                    >
                                        <Link to={item.path} onClick={() => setIsOpen(false)}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex flex-col gap-4">
                            <AntButton
                                type="text"
                                shape="circle"
                                onClick={onToggleTheme}
                                style={{
                                    width: window.innerWidth < 640 ? 35 : 50,
                                    height: window.innerWidth < 640 ? 35 : 50,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    isDark ? (
                                        <SunOutlined
                                            style={{
                                                fontSize: window.innerWidth < 640 ? 22 : 28,
                                                color: "orange",
                                            }}
                                        />
                                    ) : (
                                        <MoonOutlined
                                            style={{
                                                fontSize: window.innerWidth < 640 ? 22 : 28,
                                                color: "skyblue",
                                            }}
                                        />
                                    )
                                }
                            />
                            <Button onClick={handleLogout} variant="secondary">Logout</Button>
                            <Link to="/register">
                                <Button variant="ghost">Register</Button>
                            </Link>
                        </div>
                    </motion.div>

                    <div className="flex-1" onClick={() => setIsOpen(false)} />
                    <button>sfsf</button>
                </motion.div>

            )}
        </motion.div>
    );
};

export default Navbar;
