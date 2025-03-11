import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="container py-16 px-4" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-8">Shipping & Return, Refund Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Standard shipping within Malaysia takes 3-5 business days</li>
          <li>Free shipping for orders above RM150</li>
          <li>Standard shipping fee: RM10 for West Malaysia, RM15 for East Malaysia</li>
          <li>Express shipping options available at checkout</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>14-day return window from the date of delivery</li>
          <li>Items must be unused and in original packaging</li>
          <li>Contact our customer service team to initiate a return</li>
          <li>Return shipping costs are borne by the customer</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Refunds will be processed within 7-14 business days</li>
          <li>Original payment method will be used for refund</li>
          <li>Full refund for damaged or incorrect items</li>
          <li>Store credit option available for returns</li>
        </ul>
      </section>
    </div>
  );
};

export default ShippingPolicy; 