import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const Banner = ({ data }) => {
  return (
    <div className=" flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* First col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-7xl font-bold"
            >
              {" "}
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
          </div>
          {/* Second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={data.image}
              className="scale-110 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"
              alt=""
            />
          </div>
          {/* Third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p
              data-aos="zoom-out"
              className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            >
              {data.title2}
            </p>
            <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <Link to="/shop">
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Shop Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
