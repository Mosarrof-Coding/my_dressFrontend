import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, cartCount } = useContext(Context);
  return (
    <div className="flex justify-between items-center py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 font-medium text-sm lg:text-base bg-white">
      <Link to="/">
        <span className="logo1 text-[18px] md:text-[22px] lg:text-[26px] font-black bg-gradient-to-tr from-[#439fa4] via-[#af1717] to-[#242795] bg-clip-text text-transparent drop-shadow-xl">
          MyDress.
        </span>
      </Link>

      <nav className="hidden sm:flex gap-5 text-gray-600">
        <NavLink to={`/`} className={`page flex flex-col items-center gap-1`}>
          HOME
          <hr className="w-0 h-[2px] bg-gray-600 transition-all duration-300" />
        </NavLink>
        <NavLink
          to={`/about`}
          className={`page flex flex-col items-center gap-1`}
        >
          ABOUT
          <hr className="w-0 h-[2px] bg-gray-600 transition-all duration-300" />
        </NavLink>
        <NavLink
          to={`/collection`}
          className={`page flex flex-col items-center gap-1`}
        >
          COLLECTION
          <hr className="w-0 h-[2px] bg-gray-600 transition-all duration-300" />
        </NavLink>
        <NavLink
          to={`/contact`}
          className={`page flex flex-col items-center gap-1`}
        >
          CONTACT
          <hr className="w-0 h-[2px] bg-gray-600 transition-all duration-300" />
        </NavLink>
      </nav>
      <div className="search flex items-center gap-4 sm:gap-5">
        <img
          src={assets.search_icon}
          alt=""
          className="w-3 sm:w-5 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-3 sm:w-5 cursor-pointer"
            />
          </Link>
          <div className="hidden group-hover:block dropdown-menu bg-transparent absolute right-0 pt-4 z-10">
            <ul className="flex flex-col w-36 bg-white text-gray-600 py-2 shadow-lg  rounded">
              <li className="px-1 lg:px-2 py-0.5 lg:py-1 hover:bg-slate-200 transition-all cursor-pointer">
                My Profile
              </li>
              <Link
                to="/order"
                className="px-1 lg:px-2 py-0.5 lg:py-1 hover:bg-slate-200 transition-all cursor-pointer"
              >
                Orders
              </Link>
              <li className="px-1 lg:px-2 py-0.5 lg:py-1 hover:bg-slate-200 transition-all cursor-pointer">
                Log Out
              </li>
            </ul>
          </div>
        </div>
        <Link to="/cart">
          <div className="relative mr-3">
            <img src={assets.cart_icon} alt="" className="w-3 sm:w-5" />
            <span className="count absolute left-full bottom-full leading-[0] text-[8px] sm:text-[10px] lg:text-[12px] text-rose-500">
              {cartCount()}
            </span>
          </div>
        </Link>
        {/* sidbar icon */}
        <img
          src={assets.menu_icon}
          alt=""
          className="w-3 sm:w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* sidebar in small screan */}
      <div
        className={`fixed left-0 top-0 right-0 bottom-0 overflow-hidden transition-all ${
          visible ? "w-full bg-white z-10" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-2 sm:gap-3 py-1 sm:py-2 px-4 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} alt="" className="w-2 rotate-180" />
            <h4 className="inline-block text-base sm:text-lg">Back</h4>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-1 sm:py-2 px-4 cursor-pointer border"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-1 sm:py-2 px-4 cursor-pointer border"
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-1 sm:py-2 px-4 cursor-pointer border"
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-1 sm:py-2 px-4 cursor-pointer border"
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}
