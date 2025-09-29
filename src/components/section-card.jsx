import React from 'react'
import coffe from '../assets/usama.svg'
import Button from './button'
import coffe1 from '../assets/usama2.svg'
import coffe2 from '../assets/usama3.svg'
import { Carousel } from 'antd';
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
    return (
        <div className='container mx-auto pl-30'>
            <div className='flex items-center gap-[72px]'>
                <h1 className='text-white montserrent font-extrabold text-[80px] leading-[109.00000000000001%] tracking-[-3%]'>New Our <br />
                    <span className='text-[#2EA65E] montserrent font-extrabold text-[80px] leading-[109.00000000000001%] tracking-[-3%]'>Products</span></h1>
                <p className='text-[#D9D9D9] font-normal text-xl leading-[163%] tracking-[-2%] montserrent'>Have time to buy the most harmonious drinks <br /> in the new Starbucks coffee and don't forget <br /> about the discount!  Starbucks coffee and <br /> don't forget about the discount!</p>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <Carousel
                    arrows
                    infinite
                    slidesToScroll={1}
                    dots={true}
                    autoplay={false}
                >
                    {/* har bir slide ichida 3 ta karta chiqadi */}
                    {Array.from({ length: Math.ceil(products.length / 3) }).map(
                        (_, slideIndex) => (
                            <div key={slideIndex}>
                                <div className="flex justify-between gap-6">
                                    {products
                                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                                        .map((item, i) => (
                                            <div
                                                key={i}
                                                style={contentStyle}
                                                className="w-[277px] h-[613px] rounded-[20px] mt-[54px] border-2 border-white"
                                            >
                                                <img src={item.img} alt={item.title} />
                                                <div>
                                                    <p className="text-white text-center montserrent font-medium text-[32px] leading-[163%] tracking-[-2%]">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-[#D9D9D9] montserrent font-normal text-[20.13px] leading-[163%] tracking-[-2%] text-center">
                                                        Our cafe will serve <br /> you quickly
                                                    </p>
                                                    <div className="flex items-center gap-[35px] justify-center pt-[7px]">
                                                        <p className="font-medium text-[32px] montserrent text-white">
                                                            {item.price}
                                                        </p>
                                                        <p className="text-[#D9D9D9] font-normal text-[20.13px] montserrent">
                                                            {item.size}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center mt-[20px]">
                                                        <Button variant="default">Buy Product</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )
                    )}
                </Carousel>
            </div>
        </div>
    )
}





export default Sectioncard
