import { useContext } from "react";
import { Context } from "../context/Context";
import Title from "../components/Title";

export default function Order() {
  const { currency, products } = useContext(Context);
  return (
    <div className="py-4 sm:py-6 lg:py-10">
      <div>
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div className="flex flex-col gap-4">
        {products.slice(1, 4).map((item, idx) => (
          <div key={idx} className="flex justify-between gap-4 border-b">
            <div className="flex gap-4">
              <div className="flex items-start gap-4">
                <img src={item.image[0]} alt="img" className="w-16 lg:w-20" />
              </div>
              <div>
                <p>{item.name}</p>
                <div className="flex items-center gap-4 ">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:</p>
                  <p>Size:M</p>
                </div>
                <div>
                  Date : <span>25, jul, 2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="w-4 h-4 rounded-full bg-green-400"></p>
              <p className="">Ready to Ship</p>
            </div>
            <div className="my-8">
              <button>Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
