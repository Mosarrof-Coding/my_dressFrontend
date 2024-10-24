/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

export default function Productcard({ id, image, name, price }) {
  const { currency } = useContext(Context);
  return (
    <>
      <Link to={`/productDetails/${id}`}>
        <div className="relative group rounded overflow-hidden">
          <img
            src={image[0]}
            alt="Product Image"
            className="grayscale-0 hover:grayscale transition-all"
          />
          <iframe
            src="https://gifer.com/embed/IVvP"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="absolute left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-10 touch-none pointer-events-none"
          ></iframe>
        </div>
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
