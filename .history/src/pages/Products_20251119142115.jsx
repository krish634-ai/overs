import ProductsGrid from '../sections/Products/Grid.jsx'

export default function Products() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Products Overview</h1>
      <p className="mt-4 text-white/80">A comprehensive portfolio designed around industrial use-cases and features. Explore core categories below.</p>
      <ProductsGrid />
      <section className="mt-12 text-center">
        <Link to="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Brochures</Link>
      </section>
    </main>
  )
}