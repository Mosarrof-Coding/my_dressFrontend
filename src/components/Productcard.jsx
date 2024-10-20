/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

export default function Productcard({ id, image, name, price }) {
  const { currency } = useContext(Context);
  return (
    <>
      <Link to={`/productDetails/${id}`}>
        <img
          src={image[0]}
          alt="Product Image"
          className="grayscale-0 hover:grayscale transition-all rounded"
        />
      </Link>
      <div className="p-2">
        <h5>{name}</h5>
        <h6>
          {price}
          {currency}
        </h6>
      </div>
    </>
  );
}
