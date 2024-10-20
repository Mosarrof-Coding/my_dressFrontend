import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Context = createContext();
const ContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  // add to cart
  const addToCart = async (id, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }

    setCartItems(cartData);
    // toast.success("Item added to cart!");
  };

  const cartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log("cart error", error);
        }
      }
    }
    return totalCount;
  };

  const upDateQuantity = async (id, size, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[id][size] = quantity;
    setCartItems(cartData);
  };

  // total price
  const cartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemsInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemsInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    cartCount,
    upDateQuantity,
    cartAmount,
    navigate,
  };

  // eslint-disable-next-line react/prop-types
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;