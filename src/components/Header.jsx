import image from "../assets/1.jpg"

function Header() {
  return (
    <>
    <div className="flex gap-12 sm:w-full items-center justify-center">
    <div className="">
        <img src={image} alt="header-image" className="h-12 w-12 rounded-full" />
    </div>
    <div className="">
        <p className="text-2xl hover:text-primary hover:border-b-4 border-primary text-gray-500">Log In</p>
    </div>
    <div className="">
        <p className="text-2xl hover:text-primary hover:border-b-4 border-primary text-gray-500">Sign Up</p>
    </div>
    </div>
    </>
  )
}

export default Header