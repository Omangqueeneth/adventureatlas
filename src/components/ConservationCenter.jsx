import FirstHeader from './FirstHeader'
import image from "../assets/3.jpg"
import girl from "../assets/girl.jpg"
import papa from "../assets/papa.jpg"
import About from './About'
import Tourism from './Tourism'
import FirstFooter from './FirstFooter'
import Activities from './Activities'

function ConservationCenter() {
  return (
    <>
        <div className="">
            <FirstHeader />
            <div className="px-40 p-10">
            <div className="flex flex-col gap-3">
            <div className="text-gray-500">
                <p className="font-semibold">Home - Lekki Conservation Center (LCC)</p>
            </div>
            <div className="">
                <h1 className="font-bold text-3xl">Lekki Conservation Center (LCC)</h1>
            </div>
            </div>
                <div className="flex gap-5">
                <div className=" border rounded-md">
                <img src={image} alt="" className="w-[580px] h-[280px] object-cover rounded-md"/>
                </div>
                    <div className="flex flex-col gap-5 rounded-md">
                        <img src={girl} alt="" className="w-[460px] h-[130px] object-cover rounded-md"/>
                        <img src={papa} alt="" className="w-[460px] h-[130px] object-cover rounded-md" />
                    </div>

                </div>
            </div>
            <Activities />
            <Tourism />
            <FirstFooter />
        </div>
    </>
  )
}

export default ConservationCenter