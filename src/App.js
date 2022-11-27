import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalCount } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalCount());
    // eslint-disable-next-line
  }, [cartItems]);
  return (
    <>
      {isOpen ? <Modal /> : 0}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
