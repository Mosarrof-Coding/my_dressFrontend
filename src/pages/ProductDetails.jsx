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
  }, [id, products]);

  return product_details ? (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-[2fr_3fr] gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 py-4 sm:py-6 lg:py-10 text-sm lg:text-base">
        {/* img */}
        <div className="flex gap-1 sm:gap-2 h-full mx-auto">
          <div className="thumbimg w-[20%] flex flex-col justify-between overflow-y-auto">
            {product_details.image.map((item, idx) => (
              <div className="w-full" key={idx}>
                <img
                  src={item}
                  alt="img"
                  className="w-full cursor-pointer hover:grayscale grayscale-0 transition-all rounded-sm"
                  onClick={() => setImage(item)}
                />
              </div>
            ))}
          </div>
          <div className="main w-[80%]">
            <img src={image} alt="" className="w-full rounded" />
          </div>
        </div>
        {/* product info */}
        <div className="w-full flex flex-col gap-1 sm:gap-2 lg:gap-3">
          <h3>{product_details.name}</h3>
          <div className="flex gap-0.5 items-center">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
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
              className="text-white inline-block"
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
          <div className="">
            <p>100% original products</p>
            <p>home delevery</p>
            <p>exchange if need</p>
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
