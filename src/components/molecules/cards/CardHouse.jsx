import { ImageSlide } from "../sampleslide/ImageSlide";

export function CardHouse({ img, title, artiste, time, cost }) {
    return (
        <div className='group'>
            <ImageSlide images={img} />
            <div className="flex flex-col text-gray-600 mt-1.5">
                <div className="flex justify-between">
                    <h1 className="line-clamp-1 text-gray-700 font-medium">
                        {title}
                    </h1>

                    <div className="flex items-center min-w-max text-gray-600 text-base">
                        <span className="flex items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            4.x
                        </span>
                    </div>
                </div>
                {artiste ? (
                    <span className="line-clamp-1 font-light text-sm">
                        {artiste}
                    </span>
                ) : null
                }
                <div>
                    <span className="line-clamp-1 font-light">{time}</span>
                </div>
                <p className="text-gray-600 font-light mt-1.5 underline">
                    <span className="text-gray-700 font-medium">{cost}</span>  total before taxes
                </p>
            </div>
        </div>
    )
}
