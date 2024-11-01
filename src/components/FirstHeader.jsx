import { useState } from "react"
import image from "../assets/1.jpg"
import flag from "../assets/2.jpeg"
import Modal from "./Modal"
import Search from "./Search"
function FirstHeader() {
    const [open, setOpen] = useState(false)
  return (
    <>
        <div className="flex gap-60 justify-center items-center font-bold">
        <div className="flex items-center justify-center gap-2">
            <img src={image} alt="header-image" className="h-12 w-12 rounded-full" />
            <div className="">
            <p>ADVENTURE <br /> ATLAS</p>
        </div>
        </div>
        
            <div className="flex gap-10">
            <div className="flex items-center justify-center gap-1">
            Currency: Naira 
            <img src={flag} alt="" className="h-2 w-3 rounded-sm"/>
            <select name="" id=""></select>
        </div>
        <div className="">
            <p>Bookings</p>
            </div>
            </div>
            
            <div className="flex  gap-3">
                <button onClick={() => setOpen(true)}>Login</button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="flex items-center justify-center">
                        <p>Login or Sign up</p>
                    </div>
                    <div className="">
                        <p>Check Out more easily and access your tickets to any <br /> device with your GetYourguide account.</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 p-5">
                        <button className="px-8 border border-gray-500 rounded-2xl"><i class="ri-google-fill"></i></button>
                        <button className="px-8 border border-gray-500 rounded-2xl"><i class="ri-apple-fill"></i></button>
                        <button className="px-8 border border-gray-500 text-primary rounded-2xl"><i class="ri-facebook-circle-fill"></i></button>
                    </div>
                    <div className="flex items-center p-3 rounded-md justify-center border border-black">
                        <input className="w-full focus:outline-none" type="email" name="" id="" placeholder="Email Address" />
                    </div>
                    <div className="flex mt-5 items-center p-2 rounded-2xl justify-center border border-black">
                        <button>Continue with email</button>
                    </div>
                </Modal>
                <button className="bg-primary text-white p-2 rounded-2xl hover:bg-transparent hover:border-primary hover:border hover:text-primary" onClick={() => setOpen(true)}>
                    Sign Up
                </button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="flex items-center justify-center">
                        <p>Login or Sign up</p>
                    </div>
                    <div className="">
                        <p>Check Out more easily and access your tickets to any <br /> device with your GetYourguide account.</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 p-5">
                        <button className="px-8 border border-gray-500 rounded-2xl"><i class="ri-google-fill"></i></button>
                        <button className="px-8 border border-gray-500 rounded-2xl"><i class="ri-apple-fill"></i></button>
                        <button className="px-8 border border-gray-500 text-primary rounded-2xl"><i class="ri-facebook-circle-fill"></i></button>
                    </div>
                    <div className="flex items-center p-3 rounded-md justify-center border border-black">
                        <input className="w-full focus:outline-none" type="email" name="" id="" placeholder="Email Address" />
                    </div>
                    <div className="flex mt-5 items-center p-2 rounded-2xl justify-center border border-black">
                        <button>Continue with email</button>
                    </div>
                </Modal>
                
            </div>
            
        </div>
    </>
  )
}

export default FirstHeader