import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

   const handleDecrement = () =>(
        setCount(count - 1)
    )

   const handleIncrement = () =>(
        setCount(count + 1)
    )

  return (
   <>
        <div className="">
            <div className="p-5">
                <h1 className="font-bold text-2xl">Book a Spot</h1>
            </div>
            <div className="flex gap-3 items-center justify-center">
                <div>
                    <h1 className="font-bold">Date</h1>
                    <div className="">
                        <input className="border border-gray-500 rounded-2xl p-1" type="date" name="" id="" />
                    </div>
                    
                </div>
            <div className="">
                <h1 className="font-bold">Guests</h1>
            <div className="flex border items-center justify-center gap-3 border-gray-500 py-1 p-5 rounded-2xl">
                <button className="text-xl" onClick={handleDecrement}>-</button>
                <p className="font-bold">{count}</p>
                <button className="text-xl" onClick={handleIncrement}>+</button>
            </div>
            </div>
            </div>
            <div className="flex items-center justify-center p-5">
                <button className="bg-primary text-white px-24 p-2 rounded-2xl font-bold">Book Now</button>
            </div>
        </div>
   </>
  )
}

export default Counter