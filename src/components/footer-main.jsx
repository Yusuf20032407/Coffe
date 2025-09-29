import { Instagram } from 'lucide-react'
import React from 'react'
import instagram from '../assets/instagram.svg'
import telefom from '../assets/telefon.svg'
import foto1 from '../assets/Group53.svg'

const Footermain = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center gap-[350px] items-center'>
                <div>
                    <h1 className='text-white font-extrabold text-[80px] leading-[109.00000000000001%] tracking-[-3%] montserrent'>Our <br />
                        <span className='text-[#2C9B5A] font-extrabold text-[80px] leading-[109.00000000000001%] tracking-[-3%] montserrent'>Contacts</span></h1>
                    <p className='text-[#D9D9D9] font-normal text-xl leading-[163%] tracking-[-2%] montserrent pt-[32px]'>Have time to buy the most harmonious <br /> drinks in the new Starbucks coffee and <br /> don't forget about the discount!</p>
                    <div className='pt-[60px]'>
                        <div className='flex items-center pb-[39px] gap-[14px]'>
                            <img src={instagram} alt="" />
                            <p className='text-white montserrent font-medium text-[32px] leading-[132%] tracking-[0%]'>@Ylatipov007</p>
                        </div>
                        <div className='flex items-center gap-[14px]'>
                            <img src={telefom} alt="" />
                            <p className='text-white montserrent font-medium text-[32px] leading-[132%] tracking-[0%]'>+998955595444</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={foto1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footermain
