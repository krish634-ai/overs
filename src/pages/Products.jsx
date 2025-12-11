import { Link } from 'react-router-dom';
import ProductsGrid from '../sections/Products/Grid.jsx'

export default function Products() {
  return (
    <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600">
          Products Overview
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          A comprehensive portfolio designed around industrial use-cases and features. Explore our core categories below.
        </p>
      </div>
      
      <ProductsGrid />
      
      <section className="mt-16 text-center">
        <Link 
          to="/downloads" 
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
        >
          Download Brochures
        </Link>
      </section>
    </main>
  )
}