import React from "react";

const TermsConditions = () => {
  return (
    <div className="container py-16 px-4" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>
        <p className="mb-4">
          By accessing and placing an order with Hơ Lơ Beauty, you confirm that you agree to and are bound by the terms described here.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Product Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All product descriptions are accurate to the best of our knowledge</li>
          <li>Colors may vary slightly due to monitor settings</li>
          <li>We reserve the right to modify product availability</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Pricing and Payment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All prices are in Malaysian Ringgit (MYR)</li>
          <li>Prices may change without prior notice</li>
          <li>Secure payment processing through trusted partners</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect and use your personal data.
        </p>
      </section>
    </div>
  );
};

export default TermsConditions; 