import {
  useContext,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import logVisit from "../../../utils/log/logVisit";

const Page = ({ url, onRoute, onAddItem }) => {
  const items = useContext(ShoppingCartContext);
  const numberOfItem = items.length;
  const onVisit = useEffectEvent((url) => {
    logVisit(url, numberOfItem);
  });
  useEffect(() => {
    onVisit(url);
  }, [url]);

  return (
    <div>
      <h2>Hellow world!</h2>
      <button onClick={onRoute}>Routing</button>
      <button onClick={onAddItem}>Add Item</button>
      <div>
        <h2>Total item in cart: {numberOfItem}</h2>
      </div>
    </div>
  );
};

export default Page;
