import ProductCard from "./ProductCard"
import { productlist } from "./productlist"
import Heading from "../Shared/Heading"

const FeaturedProducts = () => {
  // Take only the first 4 products (or however many you want to display)
  const featuredProducts = productlist.slice(0, 8)

  return (
    <div className="min-h-[550px]">
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts

