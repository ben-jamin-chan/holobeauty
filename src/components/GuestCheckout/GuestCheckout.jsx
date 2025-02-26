import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';

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
      // Generate order ID
      const orderId = `ORDER-${Date.now()}`;
      
      // Save order to Firebase
      const orderRef = await addDoc(collection(db, 'orders'), {
        orderId,
        guestInfo,
        items: cartItems,
        totalAmount,
        status: 'pending',
        paymentStatus: 'unpaid',
        createdAt: serverTimestamp(),
      });

      // Show confirmation
      onCheckoutComplete({
        orderId,
        orderRef: orderRef.id,
        guestInfo,
        totalAmount,
      });
      
    } catch (error) {
      console.error('Error processing checkout:', error);
      alert('There was an error processing your order. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Guest Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md"
            value={guestInfo.name}
            onChange={(e) => setGuestInfo({...guestInfo, name: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full p-2 border rounded-md"
            value={guestInfo.email}
            onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            className="mt-1 w-full p-2 border rounded-md"
            value={guestInfo.phone}
            onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
          <textarea
            className="mt-1 w-full p-2 border rounded-md"
            value={guestInfo.address}
            onChange={(e) => setGuestInfo({...guestInfo, address: e.target.value})}
            required
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Complete Order
        </button>
      </form>
    </div>
  );
};

export default GuestCheckout; 