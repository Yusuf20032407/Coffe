import logo from '../assets/StarBucks.svg';
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.svg'



const Footer = () => {

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-[200px]">
                    <div className="flex flex-col items-start gap-[100px]">
                        <img className="w-[160px] md:w-[200px]" src={logo} alt="logo" />
                        <p className="text-[#35C66B] font-medium text-lg md:text-xl">
                            +998955595444
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-left">
                        <ul>
                            <li className="text-[#BBB3B3] font-medium text-lg pb-2">
                                <Link to="/">Main</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Buy</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">More</Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="text-[#BBB3B3] font-medium text-lg pb-2">
                                <Link to="/">We make</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Process</Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="text-[#BBB3B3] font-medium text-lg pb-2">
                                <Link to="/">Products</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Cappuccino</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Fast</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Fast</Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="text-[#BBB3B3] font-medium text-lg pb-2">
                                <Link to="/">Events</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Drinks</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Eat</Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="text-[#BBB3B3] font-medium text-lg pb-2">
                                <Link to="/">Contacts</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="https://instagram.com">Instagram</Link>
                            </li>
                            <li className="text-[#BBB3B36E] hover:text-white transition">
                                <Link to="/">Number</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-[50px]">

                        <Link to="https://instagram.com">
                            <img className="w-8" src={instagram} alt="instagram" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
