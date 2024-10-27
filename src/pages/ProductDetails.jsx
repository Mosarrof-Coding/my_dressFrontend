import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
// awesome button
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function ProductDetails() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { products, currency, cartItems, addToCart } = useContext(Context);
  const [product_details, setProduct_details] = useState();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  // console.log("cartItems", cartItems);
  const fetchData = async () => {
    products.map((item) => {
      // console.log(item);
      if (item._id === id) {
        setProduct_details(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  // console.log("product_details", product_details);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, products]);

  return product_details ? (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-[2fr_3fr] items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 py-4 sm:py-6 lg:py-10 text-sm lg:text-base">
        <div className="flex flex-col xl:flex-row items-center gap-2 h-fit mx-auto">
          {/* Main Image */}
          <div className="main group md:w-full xl:w-[80%] rounded overflow-hidden relative">
            <a href={image} target="_blunk" rel="noopener noreferrer">
              <img src={image} alt="Product Image" className="w-full " />
            </a>
            <iframe
              src="https://gifer.com/embed/IVvP"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="absolute left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-10 touch-none pointer-events-none"
            ></iframe>
          </div>
          {/* Thumbnail Images */}
          <div className="thumbimg w-full xl:w-[20%] flex xl:flex-col gap-1 justify-between">
            {product_details.image.map((item, idx) => (
              <div className="w-[20%] xl:w-full" key={idx}>
                <img
                  src={item}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full cursor-pointer hover:grayscale transition-all rounded-sm"
                  onClick={() => setImage(item)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* product info */}
        <div className="w-full flex flex-col gap-0.5 sm:gap-1 lg:gap-2">
          <h3>{product_details.name}</h3>
          <div className="flex gap-0.5 items-center">
            <img src={assets.star_icon} alt="" className="w-4 md:w-5 lg:w-6" />
            <img src={assets.star_icon} alt="" className="w-4 md:w-5 lg:w-6" />
            <img src={assets.star_icon} alt="" className="w-4 md:w-5 lg:w-6" />
            <img src={assets.star_icon} alt="" className="w-4 md:w-5 lg:w-6" />
            <img
              src={assets.star_dull_icon}
              alt=""
              className="w-4 md:w-5 lg:w-6"
            />
            <h6>(122)</h6>
          </div>{" "}
          <h3>
            {currency}
            {product_details.price}
          </h3>
          <h6>{product_details.category}</h6>
          <p>{product_details.description}</p>
          <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
            <h4>Select Size</h4>
            <div className="flex items-center flex-wrap gap-2">
              {product_details.sizes.map((item, idx) => (
                <span
                  key={idx}
                  onClick={() => setSize(item)}
                  className={`px-1 sm:px-1.5 lg:px-2 cursor-pointer text-black text-sm rounded-sm transition-all ${
                    item === size
                      ? "border border-yellow-300 shadow-lg bg-gray-200"
                      : "border"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
            {/* awesome button */}
            <span
              className="text-white w-fit"
              onClick={() => addToCart(product_details._id, size)}
            >
              <AwesomeButton
                className="h-7 md:h-8 lg:h-9 xl:h-10 my-1 md:my-0 text-xs md:text-sm lg:text-base font-medium"
                type="primary"
              >
                Add to Cart
              </AwesomeButton>
            </span>

            <hr className="mt-1 sm:mt-2 lg:mt-3" />
          </div>
          <div className="flex flex-col gap-0.5 md:gap-1">
            <p className="text-base md:text-lg text-blue-400">
              100% Original Products | Home Delivery | Easy Exchange Available
            </p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className="mt-12 w-full">
        <div className="flex gap-4 items-center border-b-2">
          <b className="cursor-pointer">Description</b>
          <p className="cursor-pointer">Reviews (122)</p>
        </div>
        <div className="flex my-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            placeat? Saepe commodi error debitis repudiandae ducimus rerum
            fugiat voluptatem commodi! Magnam earum deleniti eius consequatur
            assumenda sequi, odio aut cumque consectetur sit quia mollitia!
            Quibusdam temporibus suscipit non! Facilis totam minus sed dolore.
          </p>
        </div>
      </div>
      {/* display rrelated products */}
      <div>
        <RelatedProducts
          category={product_details.category}
          subCategory={product_details.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="">moss</div>
  );
}
