const PaymentInfo = () => {
  return (
    <div className="container py-16 px-4 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-8">Payment Information</h1>

      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accepted Payment Methods</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Credit Cards (Visa, Mastercard)</li>
          <li>Online Banking</li>
          <li>E-wallets (Touch 'n Go, GrabPay, Boost)</li>
          <li>Bank Transfer</li>
        </ul>
      </section> */}

      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
        <p className="mb-4">
          All payments are processed through secure payment gateways. We use industry-standard encryption to protect your payment information.
        </p>
      </section> */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Payment Process</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Select your items and proceed to checkout</li>
          <li>Make the transfer/payment to the bank account</li>
          <li>Send and/or notify the completed payment to +6011 - 6980 9879 via WhatsApp</li>
          <li>Receive order confirmation via email</li>
        </ol>
      </section>
    </div>
  );
};

export default PaymentInfo; 