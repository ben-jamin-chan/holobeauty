const OrderConfirmation = ({ orderDetails }) => {
  return (
    <div className="max-w-md mx-auto p-6 dark:bg-gray-900 rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-600">Order Confirmed!</h2>
        <p className="text-gray-600 dark:text-gray-200">Thank you for your purchase</p>
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

        <div className=" p-4 rounded-lg">
          <p className="font-bold mb-2">Payment Instructions:</p>
          <div className="space-y-2">
            <p>Please transfer the total amount to:</p>
            <div className="font-mono p-3 rounded border">
              <p>Bank: Standard Chartered</p>
              <p>Account Number: 312194160295</p>
              <p>Account Name: Bui Khanh Linh</p>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-6 dark:text-gray-100 font-semibold">
          <p>Please send your payment receipt to:</p>
          <p>WhatsApp: +60 11-6980-9879</p>
          <p>Email: khanhlinh14498@gmail.com</p>
        </div>
        <p>Please notify us so that we may ship out your order as soon as possible!</p>
        <p>Thank you for shopping with Hơ Lơ Beauty. ❤️</p>
      </div>
    </div>
  );
};

export default OrderConfirmation; 