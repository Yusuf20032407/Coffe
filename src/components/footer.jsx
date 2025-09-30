import React from 'react'
import logo from '../assets/StarBucks.svg';
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.svg'
import strelka from '../assets/corner-left-up.svg'


const Footer = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-black h-[333px]'>
                <div className='flex'>
                    <div className='flex flex-col gap-[200px] pt-[40px] pl-[110px]'>
                        <img className='w-[200px]' src={logo} alt="" />
                        <p className='text-[#35C66B] montserrent font-medium text-[20px] leading-[100%] tracking-[0%]'>+998955595444</p>
                    </div>
                    <nav>
                        <ul className='pl-[107px] pt-[50px]'>
                            <li className='text-[#BBB3B3] montserrent font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Main</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent pt-[8px] pb-[8px] font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Buy</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>More</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className='pl-[82px] pt-[50px]'>
                            <li className='text-[#BBB3B3] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>We make</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Process</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className='pl-[82px] pt-[50px]'>
                            <li className='text-[#BBB3B3] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Products</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Cappuccino</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Fast</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Fast</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className='pl-[82px] pt-[50px]'>
                            <li className='text-[#BBB3B3] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Events</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Drinks</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Eat</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className='pl-[82px] pt-[50px]'>
                            <li className='text-[#BBB3B3] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Contacs</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent pb-2 font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='https://Instagram.com'>Instagram</Link>
                            </li>
                            <li className='text-[#BBB3B36E] montserrent font-normal text-xl leading-[100%] tracking-[-1%]'>
                                <Link to='/'>Number</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex flex-col ml-30 items-center pt-14 gap-[100px]'>
                        <div className='w-[80px] h-[80px] border-[#24764B] pl-5 border rounded-[30px]'>
                            <Link to='/'>
                                <img className='pt-5' src={strelka} alt="" />
                            </Link>
                        </div>
                        <Link to='https://Instagram.com'>
                            <img src={instagram} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
