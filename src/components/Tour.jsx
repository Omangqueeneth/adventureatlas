import { houses } from './Houses'

function Tour() {
    
  return (
    <>
        <div className="">
            <div className="flex gap-4 items-center justify-center p-5">
            {houses.map(item =>( 
                <div className="flex-colo">
                    <div className="w-62 h-[260px] border border-gray-600 rounded-md">
                    <img src={item.image} alt="" className="w-full h-[120px] object-cover rounded-t-md"/>
                   <div className="p-2 gap-2">
                   <p className="text-uppercase">{item.activity}</p>
                    <h1 className="font-bold">{item.caption}</h1>
                    <p className="">
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    {item.stars}
                    </p>
                    
                    <p className="">{item.price}</p>
                   </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </>
  )
}

export default Tour