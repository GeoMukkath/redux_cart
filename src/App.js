import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalCount } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalCount());
    // eslint-disable-next-line
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
