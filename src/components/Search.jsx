import React from 'react'

function Search() {
  return (
    <>
        <div className="flex justify-center shadow-3xl items-center p-10">
            <div className=" border-2 shadow-lg border-gray-200 flex gap-12 p-5 rounded-2xl">
            <div className="flex flex-col gap-3">
                <p className="font-bold">Destination </p>
            <div className="flex gap-2">
            <i class="ri-home-gear-line"></i>
            e.g Lagos
            </div>
            </div>
            <div className="border border-gray-500"></div>
            <div className="flex flex-col gap-3">
                <p className="font-bold">Check-In </p>
            <div className="flex gap-2">
            <i class="ri-calendar-schedule-line"></i>
            Today
            </div>
            </div>
            <div className="border border-gray-500"></div>
            <div className="flex flex-col gap-3">
                <p className="font-bold">Check Out</p>
            <div className="flex gap-2">
            <i class="ri-calendar-schedule-line"></i>
            Add Date
            </div>
            </div>
            <div className="border border-gray-500"></div>
            <div className="flex flex-col gap-3">
                <p className="font-bold">Guests</p> 
            <div className="flex gap-2">
            <i class="ri-group-line"></i>
            Add Guests
            </div>
            </div>
            <div className="flex">
               <button className="px-5 bg-primary text-white rounded-md ">Search</button>
            </div>
            </div>
            
        </div>
        <div className="font-bold px-36">
                <p>Top recommendations in Lagos</p>
              </div>
    </>
  )
}

export default Search