import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Heart, ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';

const ProductCard = ({ 
  id,
  name,
  category,
  price,
  image,
  description,
  features = [],
  isNew = false,
  isBestSeller = false,
  discount,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <motion.div 
        className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-card overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
          {isNew && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-500 text-white">
              New
            </span>
          )}
          {isBestSeller && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-gray-900">
              Best Seller
            </span>
          )}
          {discount && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          className={`absolute top-4 right-4 z-10 p-2 rounded-full ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} bg-white/80 backdrop-blur-sm shadow-sm transition-colors`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Product Image */}
        <div className="relative pt-[100%] bg-gray-50 dark:bg-gray-700/30 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Quick View Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/90 text-gray-900 hover:bg-white"
                  onClick={() => setIsQuickViewOpen(true)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Quick View
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{category}</span>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
                {name}
              </h3>
            </div>
            <div className="text-right">
              {discount ? (
                <>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {formatPrice(price * (1 - discount / 100))}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    {formatPrice(price)}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {formatPrice(price)}
                </span>
              )}
            </div>
          </div>
          
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {description}
          </p>
          
          <div className="mt-4 flex items-center justify-between">
            <Button 
              size="sm" 
              className="group flex-1 flex items-center justify-center gap-2"
              onClick={handleAddToCart}
              disabled={isAddedToCart}
            >
              {isAddedToCart ? (
                <>
                  <Check className="w-4 h-4" />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickViewOpen(false)}
            />
            
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div 
                className="relative w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  onClick={() => setIsQuickViewOpen(false)}
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Product Gallery */}
                <div className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-700/50 p-8 flex items-center justify-center">
                  <div className="relative w-full h-80 md:h-full">
                    <img 
                      src={image} 
                      alt={name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {category}
                      </span>
                      <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                        {name}
                      </h2>
                      
                      <div className="mt-3 flex items-center">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'} dark:text-yellow-500`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                            (24 reviews)
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        {discount ? (
                          <div className="flex items-baseline">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                              {formatPrice(price * (1 - discount / 100))}
                            </span>
                            <span className="ml-2 text-lg text-gray-500 line-through">
                              {formatPrice(price)}
                            </span>
                            <span className="ml-2 text-sm font-medium text-red-600 dark:text-red-400">
                              Save {discount}%
                            </span>
                          </div>
                        ) : (
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {formatPrice(price)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Description</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {description} Our high-performance industrial valves are designed to meet the most demanding 
                        applications with precision engineering and durable materials for long-lasting performance.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Features</h3>
                      <ul className="mt-2 space-y-2">
                        {features.length > 0 ? (
                          features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                          ))
                        ) : (
                          <>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">High-quality materials</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">Corrosion resistant</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">Long service life</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">Easy maintenance</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Quantity
                          </label>
                          <select
                            id="quantity"
                            name="quantity"
                            className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-1">
                          <label htmlFor="size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Size
                          </label>
                          <select
                            id="size"
                            name="size"
                            className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                          >
                            <option>Select size</option>
                            <option>1/2"</option>
                            <option>3/4"</option>
                            <option>1"</option>
                            <option>1.5"</option>
                            <option>2"</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button 
                          size="lg" 
                          className="flex-1 group flex items-center justify-center gap-2"
                          onClick={handleAddToCart}
                          disabled={isAddedToCart}
                        >
                          {isAddedToCart ? (
                            <>
                              <Check className="w-5 h-5" />
                              Added to Cart
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              Add to Cart
                            </>
                          )}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="flex-1 group flex items-center justify-center gap-2 border-gray-300 dark:border-gray-600 dark:text-gray-200"
                        >
                          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                          {isLiked ? 'Saved' : 'Wishlist'}
                        </Button>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <button 
                          type="button" 
                          className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          View full specifications
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

// Default props
ProductCard.defaultProps = {
  id: 1,
  name: 'Industrial Ball Valve',
  category: 'Valves',
  price: 12500,
  image: 'https://images.unsplash.com/photo-1602147531033-9b8d7c9e1e9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  description: 'High-performance industrial ball valve with durable construction for reliable flow control in demanding applications.',
  features: [
    'Full port design for maximum flow',
    'Stainless steel construction',
    'PTFE seats for tight shut-off',
    '2000 PSI working pressure',
    'Fire-safe design'
  ],
  isNew: true,
  isBestSeller: true,
  discount: 15,
};

export default ProductCard;
