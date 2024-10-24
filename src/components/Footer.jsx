import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-2 sm:gap-4 lg:gap-10 py-4 md:py-6 lg:py-10">
        <div>
          <Link to="/" className="">
            <span className="logo text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-black bg-gradient-to-tr from-[#439fa4] via-[#af1717] to-[#242795] bg-clip-text text-transparent drop-shadow-xl tracking-tight">
              \|/
            </span>
            <span className="oxanium inline-block text-blue-800 w-auto h-1 rounded-full bg-gradient-to-tr from-[#69d6dc] via-[#f33535] to-[#4d53f7] tracking-tighter font-light">
              my dress
            </span>
          </Link>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, ipsam. Repellendus dolores.
          </p>
        </div>
        <div className="flex flex-col sm:gap-0.5 lg:gap-2">
          <h5>COMPANY</h5>
          <ul className="flex flex-col gap-[1px] sm:gap-[2px] lg:gap-1">
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              Delivery
            </Link>
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div className="flex flex-col sm:gap-1 lg:gap-2">
          <h5>Get in Touch</h5>
          <ul className="flex flex-col sm:gap-[1px] lg:gap-1">
            <li className="text-gray-500 hover:text-blue-400 transition-colors cursor-pointer">
              + 12-3454-98-000
            </li>
            <li className="text-gray-500 hover:text-blue-400 transition-colors cursor-pointer">
              example@gmail.com
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:gap-1 lg:gap-2">
          <h5>Follow Us</h5>
          <ul className="flex py-2 gap-4">
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiFacebook size="20" />
            </Link>
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiTwitter size="20" />
            </Link>
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiInstagram size={"20"} />
            </Link>
            <Link className="text-gray-500 hover:text-blue-600 transition-colors">
              <FiLinkedin size={"20"} />
            </Link>
          </ul>
        </div>
      </div>
      <div className="text-center py-4">
        <h6>Copyright 2024@m.com</h6>
      </div>
    </>
  );
}
