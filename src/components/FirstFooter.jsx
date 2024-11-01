import image from "../assets/1.jpg"
function FirstFooter() {
  return (
    <>
        <div className="flex flex-col justify-center bg-primary items-center text-white hover:border-primary hover:border mt-10 p-5 pb-10">
            <div className="flex p-5 gap-12">
            <div className="flex  gap-2">
            <img src={image} alt="header-image" className="h-12 w-12 rounded-full" />
            <div className="font-bold">
            <p>ADVENTURE <br /> ATLAS</p>
            <div className="flex gap-3">
        <i class="ri-twitter-x-line"></i>
        <i class="ri-instagram-line"></i>
        <i class="ri-linkedin-box-fill"></i>
        </div>
        </div>
        </div>
        
        <div className="flex  gap-10">
        <div className="flex flex-col gap-1">
            <h1 className="font-bold">Our Services</h1>
            <p>Private Policy</p>
            <p>Cookies Performance</p>
        </div>
        </div>
        <div className="flex  gap-10">
        <div className="flex flex-col gap-1">
            <h1 className="font-bold">About Us</h1>
            <p>Private Policy</p>
            <p>Cookies Performance</p>
        </div>
        </div>
        <div className="flex  gap-10">
        <div className="flex flex-col gap-1">
            <h1 className="font-bold">Contact Us</h1>
            <p>Althub50@gmail.com</p>
            <p>+23481435089959</p>
        </div>
        </div>
        <div className="flex  gap-10">
        <div className="flex flex-col  gap-1">
            <h1 className="font-bold">NewsLettr</h1>
            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. Sapiente,<br /> debitis?</p>
            <div className="">
            <button className="flex border p-3 border-white bg-transparent gap-2 rounded-md"><i className="ri-mail-line text-md"></i>Email Address</button>
            </div>
            <div className="">
            <button className="flex p-3 px-10 bg-white text-primary gap-2 rounded-md">Subscribe</button>
            </div>
        </div>
        </div>

            </div>
           <div className="flex flex-col items-center justify-center p-5 w-full">
                <div className="border-b gap-12 border-white w-[1000px]"></div>
           </div>
           <div className="flex justify-between items-center gap-[560px] pt-10">
                    <div>
                        <p>(c) 2024 AdventureAtlas</p>  
                    </div>
                    <div className="flex gap-10">
                        <p>Privacy & Policy </p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
        </div>
        
    </>
  )
}

export default FirstFooter