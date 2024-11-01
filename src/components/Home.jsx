import Buttontitle from "./Buttontitle"

const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center gap-3 h-screen">
        <Buttontitle title="Log In" />
        <button className="bg-secondary text-white rounded-2xl p-5 w-full">
            Sign Up
        </button>
        </div>
    </>
  )
}

export default Home