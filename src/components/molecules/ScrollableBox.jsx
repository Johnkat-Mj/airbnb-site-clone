import { useEffect, useRef, useState, useCallback } from "react";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";


export function ScrollableBox({ children }) {
    const [scrollLeft, setscrollLeft] = useState(0)
    const [scrollWidth, setscrollWidth] = useState(0)
    const [offsetWidth, setoffsetWidth] = useState(0)

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
        <div className="w-full flex items-center relative overflow-hidden flex-1 pt-3.5">
            <div onScroll={e => {
                e.preventDefault()
                scrollEvent()
            }} ref={boxScrollable} className="scrollablebox relative flex items-center gap-5 md:gap-7 overflow-hidden text-gray-700 overflow-x-auto">
                {children}
            </div>

            <div className={`absolute inset-y-0 flex items-center w-9 p-2 bg-gradient-to-br from-white left-0 duration-300 ease-linear ${scrollLeft <= 0 ? " invisible scale-0 origin-center opacity-0" : " visible scale-100 opacity-100"}`}>
                <button onClick={e => {
                    e.preventDefault()
                    handleScrollLeft()
                }} className="rounded-full p-2 border-2 border-gray-200 outline-none bg-white">
                    <LucideChevronLeft size={15}/>
                </button>
            </div>

            <div className={`absolute inset-y-0 flex items-center w-9 p-2 bg-gradient-to-tl from-white right-0 duration-300 ease-linear ${scrollLeft >= scrollWidth - offsetWidth -1 ? " invisible scale-0 origin-center opacity-0" : " visible scale-100 opacity-100"}`}>
                <button onClick={e => {
                    e.preventDefault()
                    handleScrollRight()
                }} className="absolute top-1/2 -translate-y-1/2 right-0 rounded-full p-2 border-2 border-gray-200 outline-none bg-white">
                    <LucideChevronRight size={15}/>
                </button>
            </div>
        </div>
    )
}
