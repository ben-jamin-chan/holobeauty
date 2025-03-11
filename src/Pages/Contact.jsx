import React from "react";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-primary text-xl" />
              <p>+6011 - 6980 9879</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-xl" />
              {/* <p>contact@holobeauty.com</p> */}
              <p>khanhlinh14498@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-primary text-xl" />
              <p>Wilayah Persekutuan, Kuala Lumpur</p>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md dark:bg-gray-800"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md dark:bg-gray-800"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full p-2 border rounded-md dark:bg-gray-800"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 