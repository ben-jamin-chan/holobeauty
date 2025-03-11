import React from "react";

const FAQ = () => {
  return (
    <div className="container py-16 px-4" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">How long does shipping take?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Standard shipping within Malaysia takes 3-5 business days. International shipping may take 7-14 business days.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We accept credit cards, debit cards, online banking, and e-wallets including Touch 'n Go, GrabPay, and Boost.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">How can I track my order?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Once your order is shipped, you'll receive a tracking number via email to monitor your delivery status.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">What is your return policy?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We offer a 14-day return window for unused items in their original packaging. Please refer to our Return Policy for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 