import Slider from "react-slick";
import Image1 from "../../assets/hero/clinique.png";
import Image2 from "../../assets/hero/tf-lipstick.png";
import Image3 from "../../assets/hero/estee_lauder_advanced_night_repair_serum_4-piece_skincare_gift_set_1_2.webp";
import Button from "../Shared/Button";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { productlist } from "../Products/productlist";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Clinique",
    title: "Moisture Surge",
    title2: "Moisturizer",
    // description: "Beats solo wireless headphones Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Tom Ford",
    title: "Lipstick",
    title2: "Matte",
    // description: "Beats solo wireless headphones Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam.",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Estee Lauder",
    title: "Luxury On your Face",
    title2: "Skin Care",
    // description: "Beats solo wireless headphones Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Autoplay's setting
    autoplay: true,
    autoPlaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 
                    data-aos="zoom-out" 
                    data-aos-duration="500" 
                    data-aos-delay="true" 
                    className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1 
                    data-aos="zoom-out" 
                    data-aos-duration="500" 
                    data-aos-delay="true" 
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1 
                    data-aos="zoom-out" 
                    data-aos-duration="500" 
                    data-aos-delay="true" 
                    className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                    data-aos="fade-up" 
                    data-aos-offset="0"
                    data-aos-duration="500" 
                    data-aos-delay="300"
                    >
                      {/* TODO: */}
                      <Link to="/shop">
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary" 
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                      </Link>
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div
                    data-aos="zoom-in" 
                    data-aos-once="true"
                    className="relative z-10" 
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative " // z-40
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Before putting everything into the carousel section
// <div className="w-full">
//             <h3>1</h3>
//           </div>
//           <div className="w-full">
//             <h3>2</h3>
//           </div>
//           <div className="w-full">
//             <h3>3</h3>
//           </div>
//           <div className="w-full">
//             <h3>4</h3>
//           </div>
//           <div className="w-full">
//             <h3>5</h3>
//           </div>
//           <div className="w-full">
//             <h3>6</h3>
//           </div>
