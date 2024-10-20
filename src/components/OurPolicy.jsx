import { assets } from "../assets/assets";

export default function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-evenly py-4 md:py-6 lg:py-10">
      <div className="text-center">
        <img
          src={assets.exchange_icon}
          alt=""
          className="m-auto w-8 sm:w-10 lg:w-12"
        />
        <h4 className="">Easy Excenge Policy</h4>
        <span className="text-base lg:text-lg">
          We offer hassle Free Excange Policy
        </span>
      </div>
      <div className="text-center">
        <img
          src={assets.quality_icon}
          alt=""
          className="m-auto w-8 sm:w-10 lg:w-12"
        />
        <h4 className="">14 Days retuen Policy</h4>
        <span className="text-base lg:text-lg">
          We Provide 14 Days retuen Policy
        </span>
      </div>
      <div className="text-center">
        <img
          src={assets.support_img}
          alt=""
          className="m-auto w-8 sm:w-10 lg:w-12"
        />
        <h4 className="">Best Customer Support</h4>
        <span className="text-base lg:text-lg">
          We Provide 24/7 Customer Support
        </span>
      </div>
    </div>
  );
}
