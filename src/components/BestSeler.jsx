import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import Productcard from "../components/Productcard";
import { Context } from "../context/Context";

export default function BestSeler() {
  const { products } = useContext(Context);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const best_products = products.filter((item) => item.bestseller);
    setBestSeller(best_products);
  }, []); // Add products as a dependency to rerun the effect when products change

  return (
    <div className="py-4 md:py-6 lg:py-10">
      <div className="max-w-[800px] mx-auto text-center">
        <Title text1={"Best"} text2={"Seller"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          minus facere quisquam nemo. Deleniti cumque est amet repellat officia
          sint, laudantium error
        </p>
      </div>
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {bestSeller.map((product, idx) => (
          <div key={idx} className="mx-auto">
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
