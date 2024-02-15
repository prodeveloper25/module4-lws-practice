import { useEffect } from "react";

const CounterCOMP = ({ setCount, count }) => {
  useEffect(() => {
    setCount(count + 1);
  });
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default CounterCOMP;
