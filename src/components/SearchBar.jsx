import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(Context);
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="max-w-4xl mx-auto text-base lg:text-xl flex items-center gap-4 lg:gap-6 py-2 lg:py-4 w-full rounded overflow-hidden">
      <div className="w-full flex items-center py-1 lg:py-2 px-2 lg:px-4 rounded-full overflow-hidden border">
        <input
          type="text"
          name=""
          id=""
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
        <img src={assets.search_icon} alt="" className="w-4 sm:w-5 lg:w-6" />
      </div>
      <img
        src={assets.cross_icon}
        alt=""
        className="w-4 sm:w-5 lg:w-6 hover:scale-75 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
}
