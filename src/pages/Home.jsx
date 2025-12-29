import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Promos from '../components/Promos'
import ProductSection from '../components/ProductSection'
import Brands from '../components/Brands'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Promos />
      <ProductSection title="Deal of the Week" filterTag="apple" />
      <ProductSection title="Top Selling Products" filterTag="smartphones" />
      <ProductSection title="Trending Products" filterTag="laptops" />
      <ProductSection title="Featured Products" filterTag="accessories" />
      <ProductSection title="Watches Big Deal" filterTag="watches" />
      <Slider />
      <ProductSection title="Recommended For You" filterTag="recommended" />
      <ProductSection title="Popular Products" filterTag="popular" />
      <ProductSection title="Recently Viewed Products" filterTag="recent" />
      <Brands />
      <Newsletter />
    </>
  )
}
