/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

export default function Productcard({ id, image, name, price }) {
  const { currency } = useContext(Context);
  return (
    <>
      <div className="relative rounded overflow-hidden">
        <img
          src={image[0]}
          alt="Product Image"
          className="grayscale-0 hover:grayscale transition-all"
        />
      </div>

      <div className="p-2">
        <h5>{name}</h5>
        <h6>
          {price}
          {currency}
        </h6>
        <Link to={`/productDetails/${id}`}>
          <button className="text-gray-400 hover:text-blue-400">
            Read More...
          </button>
        </Link>
      </div>
    </>
  );
}
