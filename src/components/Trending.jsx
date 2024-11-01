import Tour from "./Tour"

function Trending() {
  return (
    <>
    <div className="px-20">
        <div className="flex  px-20 justify-between items-center pt-5">
        <div>
        <h1 className="font-bold">Trending in Lagos</h1>
        </div>
        <div>
            <p className="text-primary font-bold cursor-pointer">View More</p>
        </div>
        </div>
         <div>
         <Tour />
         </div>
    </div>
    </>
  )
}

export default Trending