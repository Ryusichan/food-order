import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlerSetModalOpen = () => {
    setModalOpen(true);
  };

  const handlerSetModalClose = () => {
    setModalOpen(false);
  };

  return (
    <CartProvider>
      {isModalOpen && <Cart modalClose={handlerSetModalClose} />}
      <Header modalOpen={handlerSetModalOpen} />
      <Meals />
    </CartProvider>
  );
}

export default App;
