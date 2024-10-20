import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import TotalCart from "../components/Cart/TotalCart";
import Title from "../components/Title";
import { Context } from "../context/Context";

export default function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(Context);
  return (
    <div className="w-full flex flex-col sm:flex-row gap-6 py-4 sm:py-6 lg:py-10">
      <div className="w-full">
        <div className="w-full">
          <Title text1={"Develary"} text2={"Information"} />
        </div>
        <div className="w-full flex flex-col gap-2 sm:gap-4">
          {/* Personal Information Section */}
          <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full">
              <label htmlFor="first_name" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                className="w-full border py-1 lg:py-2 px-4 rounded"
              />
            </div>
            <div className="w-full">
              <label htmlFor="last_name" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                className="w-full border py-1 lg:py-2 px-4 rounded"
              />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border py-1 lg:py-2 px-4 rounded"
            />
          </div>

          <div className="w-full">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="w-full border py-1 lg:py-2 px-4 rounded"
            />
          </div>

          {/* Address Information Section */}
          <div className="w-full">
            <label htmlFor="street" className="sr-only">
              Street
            </label>
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Street"
              className="w-full border py-1 lg:py-2 px-4 rounded"
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className="w-full">
              <label htmlFor="city" className="sr-only">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="w-full border py-1 lg:py-2 px-4 rounded"
              />
            </div>
            <div className="w-full">
              <label htmlFor="state" className="sr-only">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="State"
                className="w-full border py-1 lg:py-2 px-4 rounded"
              />
            </div>
            <div className="w-full">
              <label htmlFor="zip" className="sr-only">
                Zip Code
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                placeholder="Zip Code"
                className="w-full border py-1 lg:py-2 px-4 rounded"
              />
            </div>
          </div>

          {/* Payment Information Section */}
          <div className="w-full">
            <label htmlFor="card_number" className="sr-only">
              Card Number
            </label>
            <input
              type="text"
              name="card_number"
              id="card_number"
              placeholder="Card Number"
              className="w-full border py-1 lg:py-2 px-4 rounded"
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className="w-full">
              <label htmlFor="expiry_date" className="sr-only">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiry_date"
                id="expiry_date"
                placeholder="MM/YY"
                className="w-full border py-1 lg:py-2 px-4 rounded"
              />
            </div>
            <div className="w-full">
              <label htmlFor="cvv" className="sr-only">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                placeholder="CVV"
                className="w-full border py-1 lg:py-2 px-4 rounded"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 lg:py-3 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit Payment
          </button>
        </div>
      </div>
      <div className="w-full">
        <TotalCart />
        <div className="">
          <Title text1={"Payment"} text2={"Method"} />
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              className="flex items-center border gap-3 py-1 px-4 rounded cursor-pointer"
              onClick={() => setMethod("stripe")}
            >
              <p
                className={`rounded-full min-w-3.5 aspect-square border ${
                  method === "stripe" ? "bg-blue-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="w-16 lg:w-20" />
            </div>
            <div
              className="flex items-center border gap-3 py-1 px-4 rounded cursor-pointer"
              onClick={() => setMethod("razorpay")}
            >
              <p
                className={`rounded-full min-w-3.5 aspect-square border ${
                  method === "razorpay" ? "bg-blue-500" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="w-16 lg:w-20" />
            </div>
            <div
              className="flex items-center border gap-3 py-1 px-4 rounded cursor-pointer"
              onClick={() => setMethod("cod")}
            >
              <p
                className={`rounded-full min-w-3.5 aspect-square border ${
                  method === "cod" ? "bg-blue-500" : ""
                }`}
              ></p>
              <h5 className="">Cash on Delevery</h5>
            </div>
          </div>
          <div className="my-4 text-end">
            <button onClick={() => navigate("/order")} className="lg:px-12">
              Place Oeder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
