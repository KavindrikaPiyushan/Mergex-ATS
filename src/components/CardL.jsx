import React from 'react'

export default function cardL(props) {
  return (
    <div>
      <div className='card_L w-[200px] h-[200px] 2xl:w-[300px] 2xl:h-[300px] bg-[linear-gradient(to_bottom,_#2b2b2b_0%,_rgba(43,_43,_43,_0)_100%)] rounded-[30px] flex justify-center items-center'>
    <div className="txt mx-[auto] my-[0] text-center">
        <p className='text-[rgb(255,255,255)] text-[1.4rem] -translate-y-[0.8rem]'>{props.name}</p>
        <h1 className='text-[#ea7122] text-[5rem] ml-[0.8rem] -translate-y-4 -translate-x-[0.7rem]'>{props.val}</h1>
    </div>
   </div>
    </div>
  )
}
