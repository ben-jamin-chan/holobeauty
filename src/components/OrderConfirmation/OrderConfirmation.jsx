const OrderConfirmation = ({ orderDetails }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-600">Order Confirmed!</h2>
        <p className="text-gray-600">Thank you for your purchase</p>
      </div>

      <div className="space-y-4">
        <div className="border-b pb-4">
          <p className="font-bold">Order ID:</p>
          <p className="font-mono">{orderDetails.orderId}</p>
        </div>

        <div className="border-b pb-4">
          <p className="font-bold">Total Amount:</p>
          <p className="text-xl">RM {orderDetails.totalAmount.toFixed(2)}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-bold mb-2">Payment Instructions:</p>
          <div className="space-y-2">
            <p>Please transfer the total amount to:</p>
            <div className="font-mono bg-white p-3 rounded border">
              <p>Bank: MAYBANK</p>
              <p>Account Number: 1234567890</p>
              <p>Account Name: YOUR SHOP NAME</p>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-6">
          <p>Please send your payment proof to:</p>
          <p>WhatsApp: +60 11-6980-9879</p>
          <p>Email: khanhlinh14498@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 