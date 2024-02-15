import { useRef } from "react";

export default function Counter() {
  const ref = useRef(0);
  const hanldeIncrement = () => {
    const counter = (ref.current = ref.current + 1);
    alert(`You clicked ${counter} times!`);
  };
  const hanldeDecrement = () => {
    const counter = (ref.current = ref.current - 1);
    alert(`You clicked ${counter} times!`);
  };
  return (
    <>
      <button onClick={hanldeIncrement}>Increment</button>
      <button onClick={hanldeDecrement}>Decrement</button>
    </>
  );
}
