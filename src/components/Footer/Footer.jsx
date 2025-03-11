import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ImportantLinks = [
  {
    title: "Shipping & Return, Refund Policy",
    link: "/shipping-policy",
  },
  {
    title: "Terms and Conditions (T&C)",
    link: "/terms-conditions",
  },
  {
    title: "FAQ (Frequently Asked Questions)",
    link: "/faq",
  },
  {
    title: "Contact Us Page",
    link: "/contact",
  },
  {
    title:"Payment Information",
    link: "/payment-info"
  },
];

const QuickLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <Link to={"/"}
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              Hơ Lơ Beauty <span className="text-xl sm:text-1xl italic px-1 text-gray-500/70">by-Linh</span>
            </Link>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              at obcaecati harum qui dolorem illum quaerat, unde labore beatae
              tenetur!
            </p>
            {/* <p className="text-gray-500 mt-4">Made with ❤️ by Ben</p> */}
            <a
              href="https://www.instagram.com/holo_beauty/"
              target="_blank"
              className="inline-block bg-primary hover:bg-red-600 text-white py-2 px-8 mt-4 text-sm rounded-full"
            >
              Connect with us on Instagram!
            </a>
          </div>
          {/* Important links */}
          <div className="col-span-2 grid grid-cols2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3 mt-4">
                {ImportantLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick links */}
            <div className="py-8 ml-14 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3 mt-4">
                {QuickLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Wilayah Persekutuan, Kuala Lumpur</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+6011 - 6980 9879</p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-6">
                    <a href="https://www.instagram.com/holo_beauty/" target="_blank">
                        <FaInstagram className="text-3xl hover:text-primary duration-300" />
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl hover:text-primary duration-300" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
