import ownerImg from "../assets/About/IMG_2541.jpg";

const About = () => {
  return (
    <div data-aos="fade-up">
      {/* Image Section */}
      <div className="flex justify-center items-center mx-auto p-5">
        <img
          src={ownerImg}
          className="w-[300px] rounded-xl border-2 border-gray-300 shadow-lg mx-auto mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
          alt="Owner"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-4xl mx-auto p-3">
        {/* Title and Subtitle */}
        <div className="space-y-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Us</h1>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
            <span className="text-primary font-semibold tracking-widest sm:text-1xl">
              Hơ Lơ Beauty
            </span>{" "}
            was founded by Linh in 2018 to bring beauty to everyone.
          </h2>
        </div>

        {/* About Description */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-400">
            Hơ Lơ Beauty was founded with a vision to make beauty accessible to everyone in Vietnam. Our founder, Linh, envisioned a space where everyone, regardless of their background, could feel confident and radiant. Since 2018, we have been committed to delivering high-quality beauty services that empower individuals and enhance their natural features.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-4 dark:text-gray-400">
            At Hơ Lơ Beauty, we believe in personalized care, a welcoming environment, and the transformative power of beauty. Every service we offer is designed with our client's needs in mind, whether it's a rejuvenating facial, a stunning makeup application, or a complete beauty makeover. Our goal is to make you feel your best—every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
