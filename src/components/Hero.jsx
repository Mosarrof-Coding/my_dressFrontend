import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
export default function Hero() {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-4 lg:gap-6 py-4 md:py-6 lg:py-10">
      {/* left */}
      <div className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
        <div className="left flex items-center gap-2 sm:ap-3 lg:gap-4 w-full">
          <span className="w-6 lg:w-8 h-[1px] bg-gray-800"></span>
          <p>Our Best Seller</p>
        </div>
        <h1 className="">Latest Arrivals</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          aliquid dolore a voluptatibus quidem, dignissimos, libero perferendis
          repudiandae ducimus eos iusto debitis quaerat minus culpa nobis re
          molestiae nesciunt officiis sed.
        </p>
        <div className="flex items-center gap-2 sm:ap-3 lg:gap-4">
          <Link className="MyLink text-base lg:text-lg">Shop now</Link>
          <span className="w-6 lg:w-8 h-[1px] bg-gray-800"></span>
        </div>
      </div>
      {/* right */}
      <div className="roght w-full max-h-[480px] rounded-xl overflow-hidden">
        <img
          src={assets.about_img}
          alt=""
          className="grayscale-0 hover:grayscale transition-all"
        />
      </div>
    </div>
  );
}
