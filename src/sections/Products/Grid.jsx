import { Link } from 'react-router-dom';
import { productCategories } from '../../data/products';
import { motion } from 'framer-motion';

export default function ProductsGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="mt-12">
      <motion.div 
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {productCategories.map((category) => (
          <motion.div 
            key={category.id}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <Link to={`/products/${category.id}`} className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-0 left-0 right-0 p-4 text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.products.slice(0, 3).map((product) => (
                    <span 
                      key={product.id}
                      className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {product.name.split(' ')[0]}
                    </span>
                  ))}
                  {category.products.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                      +{category.products.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}