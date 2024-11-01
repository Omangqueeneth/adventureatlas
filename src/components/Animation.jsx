import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Animation() {
    const [typeEffect] = useTypewriter({
        words: ['TOUR', 'ACTIVITY', 'ATTRACTION', 'RESTURANT'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 40
    })
  return (
    <>
        <div className="flex items-center justify-center p-5">
            <h1 className="font-black text-3xl">
                Find the perfect 
                <span className="m-2 text-orange-500 font-bold">{typeEffect}</span>
                for you
            </h1>
        </div>
    </>
  )
}

export default Animation