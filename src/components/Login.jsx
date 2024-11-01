import Break from "./Break"
import Buttontitle from "./Buttontitle"


function Login() {
  return (
    <>
        <div className=" flex flex-col p-3 gap-5">
            <h1 className="font-bold text-2xl">Welcome Back</h1>
            <form action="" className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold">Email
              <input type="email" className="w-full border border-gray-500 p-2 rounded-xl focus:outline-none" placeholder="Enter your email" />
              </label>
              <label htmlFor="password" className="font-bold">Password
              <input type="password" className="w-full border border-gray-500 p-2 rounded-xl focus:outline-none" placeholder="Enter your password" />
              </label>
            </form>
            <div className="flex ml-auto">
              <p>Forgot Password ?</p>
            </div>
            <Buttontitle title="Login"/>
            <Break />
        </div>
    </>
  )
}

export default Login