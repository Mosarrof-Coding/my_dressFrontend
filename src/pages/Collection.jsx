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
        {/* filter options */}
        <h5>Filters</h5>
        {/* category filter */}
        <div className={`mb-8 ${filter ? "" : "hidden"} sm:block`}>
          <h5>Categories</h5>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4 border p-4">
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Men"}
                  onChange={togglecategory}
                />
                Men
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Women"
                  onChange={togglecategory}
                />
                Women
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Kids"}
                  onChange={togglecategory}
                />
                Kids
              </li>
            </ul>
            <ul className="flex flex-col gap-4 border p-4">
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                Topwear
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </li>
              <li className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
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
        <div className="flex justify-between mb-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <select
            name=""
            id=""
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="lowToHigh">Sort by: Low to High</option>
            <option value="highToLow">Sort by: High to Low</option>
          </select>
        </div>
        {/* map all products */}
        <div className="productCard py-4 lg:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
