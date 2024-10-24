import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import TotalCart from "../components/Cart/TotalCart";
// awesome button
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Cart() {
  const { products, currency, cartItems, upDateQuantity, navigate } =
    useContext(Context);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    // console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="py-4 sm:py-6 lg:py-12">
      <Title text1={"Your"} text2={"Cart"} />
      {cartData.map((items, idx) => {
        const productData = products.find(
          (product) => product._id === items._id
        );
        return (
          <div
            key={idx}
            className="flex justify-between gap-y-4 py-1 sm:py-2 lg:py-3"
          >
            <div className="flex gap-4">
              <div className="w-16 sm:w-20">
                <img src={productData.image[0]} alt="" />
              </div>
              <div className="info">
                <h4>{productData.name}</h4>
                <h6>{items.size}</h6>
                <h4>
                  {currency}
                  {productData.price}
                </h4>
              </div>
            </div>
            <div className="h-full">
              <input
                type="number"
                min={1}
                defaultValue={items.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : upDateQuantity(
                        items._id,
                        items.size,
                        Number(e.target.value)
                      )
                }
                className="border w-24 py-1 px-4 h-full"
              />
            </div>
            <div>
              <img
                src={assets.bin_icon}
                alt=""
                className="w-5 cursor-pointer"
                onClick={() => upDateQuantity(items._id, items.size, 0)}
              />
            </div>
          </div>
        );
      })}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[360px]">
          <TotalCart />
          <div className="w-full text-end">
            <span onClick={() => navigate("/place-order")}>
              <AwesomeButton
                className="h-7 md:h-8 lg:h-9 xl:h-10 my-1 md:my-0 text-xs md:text-sm lg:text-base font-medium"
                type="primary"
              >
                Proceed To Checkout
              </AwesomeButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
