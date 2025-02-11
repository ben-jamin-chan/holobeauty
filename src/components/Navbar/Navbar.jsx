import React, { useState } from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";
import Badge from "../Badge/Badge";
import { useCart } from "../../Context/CartContext";
import Searchbar from "../Search/Searchbar";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cart } = useCart()
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              Hơ Lơ Beauty{" "}
              <span className="text-xl sm:text-1xl italic px-1 text-gray-500/70">
                by-Linh
              </span>
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((item) => (
                  <Link
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    key={item.id}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            className="text-gray-500 dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 w-full rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
              <ul className="flex flex-col items-center gap-4 p-4">
                {MenuLinks.map((item) => (
                  <Link
                    className="block px-4 py-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    key={item.id}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <li className="relative cursor-pointer group">
                  <a
                  href="#"
                  className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    QuickLinks
                    <FaCaretDown />
                  </a>
                <div className="mt-2 rounded-md bg-white dark:bg-gray-900 p-2 dark:text-white">
                <ul className="space-y-2">
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                      className="text-gray-500 dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 w-full rounded-md font-semibold"
                      href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
                </div>
                </li>
              </ul>
            </div>
          )}

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            
            {/* FIXME: Search Bar section  */}
            <Searchbar />

            {/* Sign-up-button section */}
            {/* <Button
              text="Sign Up"
              bgColor="bg-primary"
              textColor="text-white"
              onClick={handleOrderPopup}
            />
            <Button
              text="Login"
              bgColor="bg-primary"
              textColor="text-white"
              onClick={handleOrderPopup}
            /> */}

            {/* Hamburger Menu Button for mobile */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Cart-button section */}
            <Link to="/cart">
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                {cartItemCount}
              </div>
            </button>
            </Link>

            {/* Dark Mode section  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4">
//             <a
//               href="#"
//               className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
//             >
//             Hơ Lơ Beauty <span className="text-xl sm:text-1xl italic px-1 text-black">by-Linh</span>
//             </a>
//             {/* Menu Items */}
//             <div className="hidden lg:block">
//               <ul className="flex items-center gap-4">
//                 {MenuLinks.map((data, index) => (
//                   <li key={index}>
//                     <a
//                       href={data.link}
//                       className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                     >
//                       {" "}
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//                 {/* Dropdown */}
//                 <li className="relative cursor-pointer group">
//                   <a
//                     href="#"
//                     className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
//                   >
//                     Quick Links
//                     <span>
//                       <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                     </span>
//                   </a>
//                   {/* Dropdown Links */}
//                   <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
//                     <ul className="space-y-2">
//                       {DropdownLinks.map((data, index) => (
//                         <li>
//                           <a
//                             className="text-gray-500 dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 w-full rounded-md font-semibold"
//                             href={data.link}
//                           >
//                             {data.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Navbar Right section */}
//           <div className="flex justify-between items-center gap-4">
//             {/* Search Bar section  */}
//             <div className="relative group hidden sm:block">
//               <input type="text" placeholder="Search" className="search-bar" />
//               <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
//             </div>

//             {/* Order-button section */}
//             <button className="relative p-3" onClick={handleOrderPopup}>
//               <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 8
//               </div>
//             </button>
//             {/* Dark Mode section  */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };