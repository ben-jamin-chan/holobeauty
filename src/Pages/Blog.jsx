import Blogsdata from '../components/Blogs/Blogsdata'

const Blog = () => {
  return (
    <div>
        <Blogsdata />
    </div>
  )
}

export default Blog

// import React, { useState } from 'react';
// import { Heart, ShoppingCart, Star } from 'lucide-react';
// import Blogs from '../components/Blogs/Blogs';
// import Img1 from "../assets/About/IMG_2541.jpg";

// const Blog = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     {
//       id: 1,
//       name: "Luxury Face Cream",
//       brand: "Beauty Co",
//       price: 49.99,
//       rating: 4.5,
//       category: "Skincare",
//       image: Img1,
//       tags: ["New", "Exclusive"]
//     },
//     // More products would go here
//   ];

//   const [filters, setFilters] = useState({
//     category: 'all',
//     priceRange: 'all',
//     brand: 'all'
//   });

//   return (
//     <div className="flex min-h-screen bg-white">
//       {/* Sidebar Filters */}
//       <div className="hidden md:block w-64 p-6 border-r">
//         <h2 className="text-lg font-semibold mb-4">Filter By</h2>
        
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Category</h3>
//           <div className="space-y-2">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Skincare
//             </label>
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Makeup
//             </label>
//             {/* More categories */}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Price Range</h3>
//           <div className="space-y-2">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Under $25
//             </label>
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               $25 - $50
//             </label>
//             {/* More price ranges */}
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="flex-1 p-6">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map(product => (
//             <div key={product.id} className="group relative">
//               {/* Product Image */}
//               <div className="aspect-square mb-2 bg-gray-100 relative">
//                 <img 
//                   src={Img1}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Quick add overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <button className="w-full bg-black text-white py-2 px-4 text-sm flex items-center justify-center gap-2">
//                     <ShoppingCart className="w-4 h-4" />
//                     Quick Add
//                   </button>
//                 </div>
//                 {/* Wishlist button */}
//                 <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm">
//                   <Heart className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* Product Info */}
//               <div className="space-y-1">
//                 <p className="text-sm text-gray-500">{product.brand}</p>
//                 <h3 className="font-medium">{product.name}</h3>
//                 <div className="flex items-center gap-1">
//                   <Star className="w-4 h-4 fill-current text-yellow-400" />
//                   <span className="text-sm">{product.rating}</span>
//                 </div>
//                 <p className="font-semibold">${product.price}</p>
//               </div>

//               {/* Tags */}
//               {product.tags && product.tags.length > 0 && (
//                 <div className="absolute top-2 left-2 flex gap-1">
//                   {product.tags.map(tag => (
//                     <span key={tag} className="bg-black text-white text-xs px-2 py-1">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       <Blogs />
//       </div>
//     </div>
//   );
// };

// export default Blog;
