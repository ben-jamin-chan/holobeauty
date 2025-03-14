import { useParams } from "react-router-dom";
import { productlist } from "./productlist"
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productlist.find((p) => p.id === parseInt(id));
  const [notification, setNotification] = useState('')

  const handleAddToCart = () => {
    setNotification(`${product.title} is successfully added!`)
    addToCart(product)

    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  return (
    <div>
      {notification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-7 rounded-md shadow-lg z-50 text-xl transition duration-500 ease-in-out">
          {notification}
        </div>
      )}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">{product.brand}</p>
          <div className="border-t border-b py-4">
            <p className="text-2xl font-semibold">RM {product.price}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <p className="">{product.description}</p>
            <p className="text-gray-600 dark:text-gray-300">
              Category: {product.category}
            </p>
            {/* Add more product details as needed */}
          </div>
          <button
            onClick={() => handleAddToCart()}
            className="bg-primary text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity w-full md:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails; 