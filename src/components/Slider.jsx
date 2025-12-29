import { useEffect, useState } from 'react'

const slides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1518441902117-8ce3f0d7b4b2?q=80&w=1200', caption: 'Pure Sound Sale' },
  { id: 2, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200', caption: 'Smartphones Prices Slashed' },
  { id: 3, image: 'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200', caption: 'Smartwatch & iPad Deals' },
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
