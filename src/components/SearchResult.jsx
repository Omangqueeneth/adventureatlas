import React from 'react'
import FirstHeader from './FirstHeader'
import Search from './Search'
import Tour from './Tour'
import Tourism from './Tourism'
import FirstFooter from './FirstFooter'

function SearchResult() {
  return (
    <>
        <div className="">
            <FirstHeader />
            <Search />
            <div className=" flex flex-col px-36">
                <div className="font-bold">Search Results: Lagos</div>
                <div className="flex gap-8 p-5">
                    <select className="border text-gray-500 border-gray-500" name="" id="">
                        <option value="">Sort</option>
                    </select>
                    <select className="border border-gray-500" name="" id="">
                        <option value="">Price</option>
                    </select>
                    <select className="border border-gray-500" name="" id="">
                        <option value="">Rating</option>
                    </select>
                    <select className="border border-gray-500" name="" id="">
                        <option value="">Time</option>
                    </select>
                </div>
            </div>
            <Tour />
            <Tourism />
            <div className="flex items-center justify-center">
            <button className="bg-primary text-white p-2 px-5 mt-5 rounded-md">Load More</button>
            </div>
            <FirstFooter />
        </div>
    </>
  )
}

export default SearchResult