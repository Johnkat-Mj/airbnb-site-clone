import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";


const Dots = ({ size, activeIndex }) => {

    const elements = []

    for (let index = 0; index < size; index++) {
        elements.push(<span key={index} className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-100/60"} `}></span>)
    }
    return <div className="absolute justify-center flex inset-x-0 px-4 bottom-4 gap-3">
        {elements}
    </div>
}

export function ScrollableSlide({ size, children }) {
    const [scrollLeft, setscrollLeft] = useState(0)
    const [scrollWidth, setscrollWidth] = useState(0)
    const [offsetWidth, setoffsetWidth] = useState(0)

    const [isFav, setIsFav] = useState(false)

    const boxScrollable = useRef(null)

    const scrollEvent = useCallback(() => {
        setscrollLeft(() => boxScrollable.current.scrollLeft)
        setscrollWidth(() => boxScrollable.current.scrollWidth)
        setoffsetWidth(() => boxScrollable.current.offsetWidth)
    },[]);

    const handleScrollLeft = () => {
        boxScrollable.current.scrollLeft -= boxScrollable.current.clientWidth;
        console.log(boxScrollable.current.scrollLeft)
    };
    const handleScrollRight = () => {
        boxScrollable.current.scrollLeft += boxScrollable.current.clientWidth;
    };

    useEffect(() => {
        setscrollLeft(() => boxScrollable.current.scrollLeft)
        setscrollWidth(() => boxScrollable.current.scrollWidth)
        setoffsetWidth(() => boxScrollable.current.offsetWidth)
    }, [scrollEvent]);

    return (
        <div className="w-full flex items-center relative overflow-hidden rounded-lg aspect-[20/19] bg-gray-100">
            <div onScroll={e => {
                e.preventDefault()
                scrollEvent()
            }} ref={boxScrollable} className="scrollablebox w-full relative flex items-center overflow-hidden text-gray-700 overflow-x-auto">
                {children}
            </div>
            <div className="absolute inset-0 flex justify-between items-center px-2 invisible scale-150 opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 duration-300 ease-linear origin-center">
                <button onClick={e => {
                    e.preventDefault()
                    handleScrollLeft()
                }} className={`rounded-full p-2 outline-none bg-white  duration-300 ease-linear active:scale-90 
                ${scrollLeft <= 0 ? " invisible scale-0 origin-right opacity-0" : " visible scale-100 opacity-100"}`}>
                    <LucideChevronLeft size={15} />
                </button>

                <button onClick={e => {
                    e.preventDefault()
                    handleScrollRight()
                }} className={`rounded-full p-2 outline-none bg-white  duration-300 ease-linear active:scale-90 
                ${scrollLeft >= scrollWidth - offsetWidth - 1 ? " invisible scale-0 origin-left opacity-0" : " visible scale-100 opacity-100"}`}>
                    <LucideChevronRight size={15} />
                </button>
            </div>

            <Dots size={size} activeIndex={0} />

            <div className="absolute top-2 right-2">
                <button aria-label="add to fav" className="outline-none p-2 rounded-full bg-gray-800/40" onClick={
                    () => {
                        setIsFav(isFav => !isFav)
                    }
                }>
                    {!isFav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className=" fill-white" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="fill-white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                    )

                    }
                </button>
            </div>
        </div>
    )
}
