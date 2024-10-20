import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
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
  }, [id]);

  return product_details ? (
    <div>
      <div className="w-full flex items-center flex-col sm:flex-row gap-4 lg:gap-12 py-4 sm:py-6 lg:py-10 text-sm lg:text-base">
        {/* img */}
        <div className="flex gap-4 h-full shrink mx-auto">
          <div className="thumb flex flex-col justify-between overflow-y-auto">
            {product_details.image.map((item, idx) => (
              <div className="thumbimg max-w-24" key={idx}>
                <img
                  src={item}
                  alt=""
                  className="w-full cursor-pointer hover:grayscale grayscale-0 transition-all rounded"
                  onClick={() => setImage(item)}
                />
              </div>
            ))}
          </div>
          <div className="main">
            <img src={image} alt="" className="w-full rounded" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1 min-w-[280px]">
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
          <div>
            <h4>Select Size</h4>
            <div className="flex items-center gap-4">
              {product_details.sizes.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(item)}
                  className={`${
                    item === size ? "border-2 border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => addToCart(product_details._id, size)}>
              Add to Cart
            </button>

            <hr className="mt-4 sm:w-4/5" />
          </div>
          <div className="py-4">
            <p>100% original products</p>
            <p>home delevery</p>
            <p>exchange if need</p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className="mt-12  w-full">
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
