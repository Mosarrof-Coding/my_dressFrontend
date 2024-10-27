import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import Title from "../components/Title";
import Productcard from "../components/Productcard";

export default function Collection() {
  const { products, search, showSearch } = useContext(Context);
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    if (showSearch && search) {
      productCopy = productCopy.filter((sItem) =>
        sItem.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };

  const sortProducts = (productsToSort) => {
    let sortedProducts = [...productsToSort];

    switch (sortType) {
      case "lowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "relevant":
      default:
        applyFilter();
        break; // Default is the current order or relevance
    }

    return sortedProducts;
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    setFilterProducts((prev) => sortProducts(prev));
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 py-4 sm:py-6 lg:py-10">
      <div>
        {/* category filter */}
        <div className={`${filter ? "" : "hidden"} sm:block`}>
          <div className="flex flex-col gap-2 lg:gap-3 mt-4">
            <p className="text-sm sm:text-base font-medium text-black">
              Categories
            </p>
            <ul className="flex flex-col gap-1 md:gap-2 lg:gap-3 border p-1 sm:p-1.5 lg:p-2 rounded">
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3 lg:w-3.5"
                  value={"Men"}
                  onChange={togglecategory}
                />
                Men
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3 lg:w-3.5"
                  value="Women"
                  onChange={togglecategory}
                />
                Women
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3 lg:w-3.5"
                  value={"Kids"}
                  onChange={togglecategory}
                />
                Kids
              </li>
            </ul>
            <ul className="flex flex-col gap-1 md:gap-2 lg:gap-3 border p-1 sm:p-1.5 lg:p-2 rounded">
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3 lg:w-3.5"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                Topwear
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3 lg:w-3.5"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3 lg:w-3.5"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                Winterwear
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between items-center gap-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <select
            name=""
            id=""
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border rounded px-1 lg:px-2 pb-0.5 h-fit text-xs sm:text-sm"
          >
            <option value="relevant">Relevant</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        {/* map all products */}
        <div className="productCard py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filterProducts.map((product, idx) => (
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
    </div>
  );
}
