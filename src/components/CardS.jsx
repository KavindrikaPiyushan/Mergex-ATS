import React from 'react'

export default function CardS(props) {
  return (
    <div>
      <div className='card_s w-[160px] h-[160px] 2xl:w-[260px] 2xl:h-[260px] bg-[linear-gradient(to_bottom,_#2b2b2b_0%,_rgba(43,_43,_43,_0)_100%)] rounded-[30px] flex justify-center items-center'>
    <div className="txt mx-[auto] my-[0] text-center">
        <p className='text-[#ffffff] text-[1rem] -translate-y-[-0.4rem]  translate-x-0'>{props.name}</p>
        <h1 className='text-[#ea7122] text-[5rem] ml-[0.8rem] -translate-y-[0.8rem] -translate-x-[0.8rem]'>{props.val}</h1>
    </div>
   </div>
    </div>
  )
}
