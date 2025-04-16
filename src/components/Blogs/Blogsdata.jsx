import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.1.jpg"
import Img2 from "../../assets/blogs/blog-1.2.jpg"
import Img3 from "../../assets/blogs/blog-1.3.jpg"
import { Link } from "react-router-dom";

export const BlogData = [
    {
        id: 1,
        title: "How to choose the perfect skincare routine",
        content: "To choose the perfect skincare routine, identify your skin type (oily, dry, combination, sensitive) and specific concerns (acne, aging, pigmentation). Start with a basic routine: a gentle cleanser, moisturizer, and sunscreen. Add targeted treatments like serums or exfoliants based on your needs. Stick to products that suit your skin, and gradually introduce new ones to avoid irritation. Consistency is key!",
        published: "March 9, 2025 by Linh",
        image: Img1,
        readtime: "5 min read",
        aosDelay: "0",
    },
    {
        id: 2,
        title: "Mastering your skincare routine",
        content: "Mastering your skincare routine involves understanding your skin's needs and selecting the right products for your type and concerns. Build a consistent regimen with essential steps: cleanse, treat (serums, toners), moisturize, and protect (sunscreen). Pay attention to how your skin reacts and adjust products accordingly. Patience and consistency are crucial for long-term results.",
        published: "March 9, 2025 by Linh",
        image: Img2,
        readtime: "7 min read",
        aosDelay: "200",
    },
    {
        id: 3,
        title: "How to choose your skincare products",
        content: "To choose skincare products, first determine your skin type and concerns. Look for ingredients that address those needs, like hyaluronic acid for hydration or salicylic acid for acne. Choose products with gentle formulas, avoid harsh chemicals, and patch test new items. Prioritize quality over quantity for a simple, effective routine.",
        published: "March 9, 2025 by Linh",
        image: Img3,
        readtime: "6 min read",
        aosDelay: "400",
    },
]

const Blogsdata = () => {
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
            {BlogData.map((data) => (
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="bg-white dark:bg-gray-900"
                key={data.title} 
                >
                  <Link to={`/blog/${data.id}`}>
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
                        <p className="text-sm line-clamp-3 text-gray-600 dark:text-gray-400">{data.content}</p>
                    </div>
                </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogsdata;
