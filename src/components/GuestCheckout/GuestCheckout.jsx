import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase/config';

const GuestCheckout = ({ cartItems, totalAmount, onCheckoutComplete }) => {
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Generate order ID with timestamp and random string
      const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      // Prepare order data with detailed information
      const orderData = {
        orderId,
        guestInfo,
        items: cartItems.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          img: item.img
        })),
        totalAmount,
        status: 'pending',
        paymentStatus: 'unpaid',
        createdAt: serverTimestamp(),
        orderNotes: '', // Optional field for customer notes
        shippingMethod: 'standard', // You can add shipping options later
      };

      // Save order to Firebase
      const orderRef = await addDoc(collection(db, 'orders'), orderData);

      // Show confirmation
      onCheckoutComplete({
        orderId,
        orderRef: orderRef.id,
        guestInfo,
        totalAmount,
        items: cartItems
      });
      
    } catch (error) {
      console.error('Error processing checkout:', error);
      alert('There was an error processing your order. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Guest Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">Full Name</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md dark:text-black"
            value={guestInfo.name}
            onChange={(e) => setGuestInfo({...guestInfo, name: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
          <input
            type="email"
            className="mt-1 w-full p-2 border rounded-md dark:text-black"
            value={guestInfo.email}
            onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">Phone Number</label>
          <input
            type="tel"
            className="mt-1 w-full p-2 border rounded-md dark:text-black"
            value={guestInfo.phone}
            onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">Delivery Address</label>
          <textarea
            className="mt-1 w-full p-2 border rounded-md dark:text-black"
            value={guestInfo.address}
            onChange={(e) => setGuestInfo({...guestInfo, address: e.target.value})}
            required
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-red-600"
        >
          Complete Order
        </button>
      </form>
    </div>
  );
};

export default GuestCheckout; 