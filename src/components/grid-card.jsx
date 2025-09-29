import React from 'react'
import Button from './button'

const Gridcard = () => {
    return (
        <div className='container mx-auto '>
            <div className='flex items-center pl-[443px] gap-[72px] mt-[123px] mb-[108px]'>
                <p className='text-[#D9D9D9] montserrent  font-normal text-xl leading-[163%] tracking-[-2%]'>Only in 2021 we have made more than 100,000 <br /> orders for you, your loved ones, all of you, and in <br /> 2022 we are ready to destroy the market  </p>
                <h1 className='text-white font-extrabold text-[80px] leading-[109.00000000000001%] tracking-[-3%] montserrent '>Our New <br /> <span className='text-[#35C56B] font-extrabold text-[80px] leading-[109.00000000000001%] montserrent tracking-[-3%]'>Events</span></h1>
            </div>
            <div className='flex items-center justify-center gap-[40px]'>
                <div>
                    <div className='w-[615px] h-[260px] rounded-[30px]'
                        style={{ backgroundImage: "url('/src/assets/alex1.png')" }}>
                        <div className='pt-[50px] pl-[40px]'>
                            <p className='text-white pb-[30px] montserrent font-medium text-[32px] leading-[109.00000000000001%] tracking-[0%]'>TWO COFFEE <br /> FOR 1 PRICE</p>
                            <Button variant='more'>More</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[615px] h-[260px] rounded-[30px]'
                        style={{ backgroundImage: "url('/src/assets/Rectangle9.png')" }}>
                        <div className='pt-[50px] pl-[40px]'>
                            <p className='text-white pb-[30px] montserrent font-medium text-[32px] leading-[109.00000000000001%] tracking-[0%]'>KITCHEN <br /> TOUR</p>
                            <Button variant='more'>More</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-[35px] mt-[30px]'>
                <div style={{ backgroundImage: "url('/src/assets/Rectangle10.png')" }} className='w-[402px] pt-[50px] pl-[40px] h-[260px] rounded-[30px]'>
                    <p className='font-medium pb-[30px] text-[32px] leading-[109.00000000000001%] tracking-[0%] montserrent text-white'>FREE COFFEE FOR 3 COFFEE</p>
                    <Button variant='more'>More</Button>
                </div>
                <div style={{ backgroundImage: "url('/src/assets/Rectangle11.png')" }} className='w-[402px] pt-[50px] pl-[40px] h-[260px] rounded-[30px]'>
                    <p className='font-medium pb-[65px] text-[32px] leading-[109.00000000000001%] tracking-[0%] montserrent text-white'>OUR INSTAGRAM</p>
                    <Button variant='more'>More</Button>
                </div>
                <div style={{ backgroundImage: "url('/src/assets/Rectangle12.png')" }} className='w-[402px] pt-[50px] pl-[40px] h-[260px] rounded-[30px]'>
                    <p className='font-medium pb-[30px] text-[32px] leading-[109.00000000000001%] tracking-[0%] montserrent text-white' >WHERE ARE YOU CHOOSE US?</p>
                    <Button variant='more'>More</Button>
                </div>
            </div>
        </div>
    )
}

export default Gridcard
