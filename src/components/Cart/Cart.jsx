import React, { useState } from 'react'
import { useCart } from '../../Context/CartContext'
import GuestCheckout from '../GuestCheckout/GuestCheckout'
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation'

const Cart = () => {
  const { cart, total, removeFromCart, updateQuantity, isLoading, clearCart } = useCart()
  const [checkoutStep, setCheckoutStep] = useState('cart') // 'cart', 'checkout', 'confirmation'
  const [orderDetails, setOrderDetails] = useState(null)

  if (isLoading) {
      return <div>Loading cart...</div>
  }

  const handleCheckoutClick = () => {
    setCheckoutStep('checkout')
  }

  const handleCheckoutComplete = async (details) => {
    setOrderDetails(details)
    setCheckoutStep('confirmation')
    await clearCart() // Clear the cart after successful checkout
  }

  if (checkoutStep === 'checkout') {
    return <GuestCheckout cartItems={cart} totalAmount={total} onCheckoutComplete={handleCheckoutComplete} />
  }

  if (checkoutStep === 'confirmation') {
    return <OrderConfirmation orderDetails={orderDetails} />
  }

    // Need to check if const products object names are matching with the below .map from Products.jsx

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-4">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">RM{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="border rounded p-1"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold">Total:</span>
                <span className="font-bold">RM {total.toFixed(2)}</span>
              </div>
              <button 
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleCheckoutClick}
              >
                Checkout
              </button>
            </>
          )}
        </div>
      );
    };

export default Cart
