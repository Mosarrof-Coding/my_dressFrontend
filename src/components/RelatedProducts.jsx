/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import Title from "./Title";
import Productcard from "./Productcard";

export default function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(Context);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productCopy.slice(0, 7));
      // console.log(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <>
      <div className="">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="productCard grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 py-3 lg:py-5">
        {related.map((item, idx) => (
          <div key={idx} className="mx-auto">
            <Productcard
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}
