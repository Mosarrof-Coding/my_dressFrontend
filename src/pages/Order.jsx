import { useContext } from "react";
import { Context } from "../context/Context";
import Title from "../components/Title";
// awesome button
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Order() {
  const { currency, products } = useContext(Context);
  return (
    <div className="py-4 sm:py-6 lg:py-10">
      <div>
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div className="flex flex-col py-1 sm:py-1.5 lg:py-2">
        {products.slice(1, 4).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between flex-wrap gap-4 border-b py-1 sm:py-1.5 lg:py-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image[0]}
                alt="img"
                className="w-14 sm:w-16 lg:w-20 rounded-sm"
              />
              <div>
                <p className="text-black">{item.name}</p>
                <div className="flex items-center gap-4 text-xs">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Qnty:</p>
                  <p>Size:M</p>
                </div>
                <div className="text-xs">
                  Date : <span>25, jul, 2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="w-2 md:w-3 lg:w-4 aspect-square rounded-full bg-green-400"></p>
              <p className="">Ready to Ship</p>
            </div>
            <div className="inline-block">
              <AwesomeButton
                className="h-6 md:h-7 w-[54px] md:w-[68px] text-xs md:text-sm font-light text-nowrap"
                type="primary"
              >
                Track
              </AwesomeButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
