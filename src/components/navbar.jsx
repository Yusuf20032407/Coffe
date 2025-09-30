import React, { useState } from 'react';
import logo from '../assets/StarBucks.svg';
import { Link } from 'react-router-dom';
import Button from './button';
import { motion } from 'framer-motion';
import { Coffee, X } from 'lucide-react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [<Link to='/'>Home</Link>, <Link to='/Menu'>Menu</Link>, 'Shop', 'Contact'];

    return (
        <motion.div
            className="container mx-auto px-6 py-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
            }}
        >
            <div className="flex items-center justify-between">
                <motion.div
                    className="transition-transform duration-300 hover:scale-105 max-w-fit"
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                >
                    <Link to="/">
                        <img src={logo} alt="logo" className=" sm:text-lg md:text-lg" />
                    </Link>
                </motion.div>
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-10">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={index}
                                className="text-[#D9D9D9] hover:text-[#298C54] transition-colors montserrent font-medium text-[18px]"
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <Link to="/">{item}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <motion.div
                    className="hidden md:flex items-center gap-4"
                    variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
                    }}
                >
                    <Button variant="secondary"><Link to='/'>Sign Up</Link></Button>
                    <Link to='Register'>
                        <Button variant="ghost"><Link to='/Register'>Register</Link></Button>
                    </Link>
                </motion.div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-white"
                >
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
                                        <Link to="/" onClick={() => setIsOpen(false)}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex flex-col gap-4">
                            <Button variant="secondary"><Link to='/'>Sign Up</Link></Button>
                            <Button variant="ghost"><Link to='/'>Register</Link></Button>
                        </div>
                    </motion.div>
                    <div
                        className="flex-1"
                        onClick={() => setIsOpen(false)}
                    />
                </motion.div>
            )}
        </motion.div>
    );
}

export default Navbar;
