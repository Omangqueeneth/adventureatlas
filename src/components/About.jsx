import React from 'react'
import Tourism from './Tourism'
import FirstFooter from './FirstFooter'
import Counter from './Counter'

function About() {
  return (
    <>
        <div>
        <div className="flex gap-3">
        <div className="flex flex-col ml-40 py-10">
            <div className="flex">
            <div className="w-[580px]">
                <p>Located in the middle of Lagos, this conservation center is 
                    home to abundant plants and wildlife and plays a vital role 
                    in preserving the region’s ecosystem. Sign up for a guided 
                    tour with transportation included, or you can just as easily 
                    hail a rideshare and make your own way there. Take a stroll 
                    through the swamp boardwalk and spot rare birds, monkeys, 
                    snakes, and crocodiles. The park is also home to the longest 
                    canopy walkway in Africa, offering 360-degree views from above 
                    the treetops. If you’re afraid of heights, fret not—crossing 
                    this suspended walkway is optional.
                </p>
            </div>
            </div>
            <div className="flex p-5 gap-1">
            <h1><i class="ri-bookmark-3-fill text-yellow-400"></i><span className="font-bold">50,000</span> per audit</h1>
            </div>
                <div className="gap-5">
                <div className="">
                <select className="w-[580px] border-none" name="" id="">
                    <option value=""  className="font-bold">Whats Included</option>
                    <option value=""><li>A giude</li></option>
                    <option value=""><li>A fully air contion vehicle</li></option>
                    <option value=""><li>A bottle Water</li></option>
                    <option value=""><li>Hotel pick u and drop off</li></option>
                </select>
            </div>
            <div className="py-5"> 
                <select className="w-[580px] border-none active:border-none" name="" id="">
                    <option className="font-bold" value="">Do's And Donts</option>
                    <option className="font-bold" value=""><li>Do's</li></option>
                    <option value=""><li>A fully air contion vehicle</li></option>
                    <option value=""><li>A bottle Water</li></option>
                    <option value=""><li>Hotel pick u and drop off</li></option>
                    <option className="font-bold" value=""><li>Dont's</li></option>
                    <option value=""><li>A fully air contion vehicle</li></option>
                    <option value=""><li>A bottle Water</li></option>
                    <option value=""><li>Hotel pick up and drop off</li></option>
                </select>
                <div className="py-5">
                <select className="w-[580px] border-none active:border-none" name="" id="">
                    <option value="" className="font-bold">Cancellation policy</option>
                </select>
                </div>
            </div>
                </div>
                <div className="">
                <h1 className="font-bold">You may also like</h1>
            </div>
            </div>
            <div className="p-10">
                <div className="">
                <Counter />
                </div>
            </div>
        </div>
           
            
        </div>
    </>
  )
}

export default About