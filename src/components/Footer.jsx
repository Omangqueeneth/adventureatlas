
function Footer() {
  return (
    <>
        <div className="flex flex-col gap-5">
        <button className="flex p-3 gap-3 items-center font-bold text-black justify-center border border-black rounded-3xl">
            <i className="ri-facebook-circle-line text-2xl"></i>
            Continue with facebook
            </button>
        <button className="flex p-3 gap-3 items-center font-bold text-black justify-center border border-black rounded-3xl">
            <i className="ri-google-line text-2xl rounded-full"></i>
            Continue with facebook
            </button>
            <div className=" flex item-center justify-center">
            <p className="text-gray-500">Dont have any account? <span className="text-primary font-bold cursor-pointer">Sign Up</span></p>
            </div>
        </div>
    </>
  )
}

export default Footer