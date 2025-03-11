import ProductCard from "./ProductCard"
import { productlist } from "./productlist"

const FeaturedProducts = () => {
  // Take only the first 4 products (or however many you want to display)
  const featuredProducts = productlist.slice(0, 8)

  return (
    <div className="container lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default FeaturedProducts 