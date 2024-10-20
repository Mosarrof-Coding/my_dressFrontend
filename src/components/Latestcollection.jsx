import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import Title from "./Title";
import Productcard from "./Productcard";

export default function Latestcollection() {
  const { products } = useContext(Context);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="py-4 md:py-6 lg:py-10">
      <div className="max-w-[800px] mx-auto text-center">
        <Title text1={"Latest"} text2={"Collection"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          aspernatur. Dolores quae quisquam quaerat consequatur quo cumque ex
          quia molestias.
        </p>
      </div>
      <div className="productCard py-4 lg:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {latestProducts.map((product, idx) => (
          <div key={idx} className="mx-auto overflow-hidden">
            <Productcard
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
