import { useCart } from "../../Context/CartContext";
// import { data } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Proptypes from 'prop-types'

// Logic of the products behind and to be added to cart etc.
const ProductCard = ({ product, onAddToCart  }) => {
  const { addToCart } = useCart();

  ProductCard.propTypes = {
    product: Proptypes.string.isRequired,
  }

  ProductCard.propTypes = {
    onAddToCart: Proptypes.string.isRequired,
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={product.aosDelay}
      className="group"
      key={product.id}
    >
      <Link to={`/product/${product.id}`} className="relative block">
        <img
          src={product.img}
          className="h-[180px] w-[260px] object-cover rounded-md"
          alt={product.title}
        />
        {/* Hover button */}
        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
          <button
            className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 w-full items-center justify-center flex gap-2"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation when clicking the button
              addToCart(product);
              onAddToCart();
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="leading-7">
        <p className="text-normal text-gray-500 dark:text-gray-100">{product.brand}</p>
        <Link to={`/product/${product.id}`}>
        <h2 className="font-medium hover:text-primary">{product.title}</h2>
        </Link>
        <div className="border border-solid"></div>
        <h2 className="font-normal text-base text-[1rem] mt-1">RM {product.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;

