import { useEffect, useState } from 'react'

const slides = [
  { id: 1, image: 'https://as2.ae/wp-content/uploads/2024/10/Gadgets-Examples.webp', caption: 'Pure Sound Sale' },
  { id: 2, image: 'https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg', caption: 'Smartphones Prices Slashed' },
  { id: 3, image: 'https://cdn.pixabay.com/photo/2019/10/21/11/35/camera-4565859_1280.jpg' },
]

export default function Slider() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-8">
        <div className="overflow-hidden rounded-xl shadow-soft">
          <img src={slides[index].image} alt={slides[index].caption} className="w-full h-64 md:h-80 object-cover transition duration-500" />
        </div>
      </div>
    </section>
  )
}
