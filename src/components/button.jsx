import React from 'react'

const Button = ({ variant, haveicon, children, classname }) => {
    const variants = {
        secondary: "w-[180px] text-white montserrent font-[450] cursor-pointer text-lg leading-[146%] tracking-[-2%] h-[48px] bg-[#32B765] rounded-[82px]",
        ghost: "w-[100px] text-white h-[50px] opacity-100 cursor-pointer rounded-[82.83px] left-[479.74px] top-[519px] bg-[#121517] montserrent font-weigh-400",
        outline: "w-[333px] h-[74px] opacity-100 cursor-pointer rounded-[82.83px] left-[130px] top-[519px] bg-[#2A9457]",
        default: "w-[186px] h-[55px] opacity-100 rounded-[59.72px] left-[170px] top-[2907.11px] bg-[#237249] text-white font-[639] text-[17.3px] leading-[146%] tracking-[-2%] montserrent",
        more: " w-[168px] h-[75px] opacity-100 rounded-[82.83px] left-[793px] top-[3482.11px] bg-[#2FAA60] text-white font-semibold text-2xl leading-[146%] tracking-[-3%] montserrent"
    }
    return (
        <div>
            <button className={`${variants[variant]}`}>{children}</button>
        </div>
    )
}

export default Button
