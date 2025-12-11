import Hero from '../sections/Home/Hero.jsx'
import Categories from '../sections/Home/Categories.jsx'
import Why from '../sections/Home/Why.jsx'
import Industries from '../sections/Home/Industries.jsx'
import CTA from '../sections/Home/CTA.jsx'

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Why />
      <Industries />
      <CTA />
    </div>
  )
}