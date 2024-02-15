import { useState } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import Page from "./Page";

const PageApp = () => {
  const items = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ];
  const [route, setRoute] = useState("/home");
  const [cartItem, setCartItem] = useState(items);
  const handleRoute = () => {
    if (route === "/home") {
      setRoute("/about");
    } else {
      setRoute("/home");
    }
  };
  const addItem = () => {
    setCartItem([
      ...cartItem,
      {
        id: crypto.randomUUID,
        name: `Product ${cartItem.length + 1}`,
      },
    ]);
  };
  return (
    <ShoppingCartContext.Provider value={cartItem}>
      <Page onRoute={handleRoute} url={route} onAddItem={addItem} />
    </ShoppingCartContext.Provider>
  );
};

export default PageApp;
