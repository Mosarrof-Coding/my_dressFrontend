import { useContext } from "react";
import { Context } from "../../context/Context";
import Title from "../Title";

export default function TotalCart() {
  const { currency, delivery_fee, cartAmount } = useContext(Context);

  // Calculate the total amount
  const totalAmount = cartAmount() === 0 ? 0 : cartAmount() + delivery_fee;

  return (
    <div className="w-full py-12">
      <Title text1={"Cart"} text2={"Total"} />
      <div className="w-full flex gap-4 justify-between">
        <h3>Sub total</h3>
        <h3>
          {currency}
          {cartAmount()}.00
        </h3>
      </div>
      <hr />
      <div className="w-full flex gap-4 justify-between">
        <h3>Shipping Fee</h3>
        <h3>
          {currency}
          {delivery_fee}.00
        </h3>
      </div>
      <hr />
      <div className="w-full flex gap-4 justify-between">
        <h3>Total</h3>
        <h3>
          {currency}
          {totalAmount}.00
        </h3>
      </div>
    </div>
  );
}
