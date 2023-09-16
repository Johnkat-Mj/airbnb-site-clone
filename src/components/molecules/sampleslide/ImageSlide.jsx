import { ScrollableSlide } from "./ScrollableSlide";

export function ImageSlide({ images }) {
  return (
    <>
      <ScrollableSlide size={images.length}>
        {images.map(imag => (
          <div key={imag.id} className="min-w-full bg-gray-100 aspect-[20/19] rounded-lg">
            <img src={imag.src} width={2250} height={1300} className="w-full h-full object-cover rounded-lg" alt="house image" />
          </div>))
        }
      </ScrollableSlide>
    </>
  )
}
