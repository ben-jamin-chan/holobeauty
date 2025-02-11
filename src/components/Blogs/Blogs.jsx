import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.1.jpg"
import Img2 from "../../assets/blogs/blog-1.2.jpg"
import Img3 from "../../assets/blogs/blog-1.3.jpg"

const BlogData = [
    {
        title: "How to choose the perfect skincare routine",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat porro dolorem mollitia itaque autem maxime accusantium facere cumque excepturi!",
        published: "Jan 20, 2024 by Dilshad",
        image: Img1,
        aosDelay: "0",
    },
    {
        title: "Mastering your skincare routine",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat porro dolorem mollitia itaque autem maxime accusantium facere cumque excepturi!",
        published: "Jan 20, 2024 by Satya",
        image: Img2,
        aosDelay: "200",
    },
    {
        title: "How to choose your skincare products",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat porro dolorem mollitia itaque autem maxime accusantium facere cumque excepturi!",
        published: "Jan 20, 2024 by Sabir",
        image: Img3,
        aosDelay: "400",
    },
]

const Blogs = () => {
  return (
    <div className="py-12">
      <div className="container">
        {/* Header section */}
        <Heading 
        title="Recent News" 
        subtitle={"Explore Our Blogs"} 
        />
        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {/* Blog card */}
            {BlogData.map((data, index) => (
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="bg-white dark:bg-gray-900"
                key={data.title} 
                >
                    {/* Image section */}
                    <div className="overflow-hidden rounded-2xl mb-2">
                    <img 
                    src={data.image} 
                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                    alt="" 
                    />
                    </div>
                    {/* Content section */}
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500">{data.published}</p>
                        <p className="font-bold line-clamp-1">{data.title}</p>
                        <p className="text-sm line-clamp-3 text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
