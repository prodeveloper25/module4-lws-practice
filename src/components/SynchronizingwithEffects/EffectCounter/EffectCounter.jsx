import { useState } from "react";
import CounterCOMP from "./CounterCOMP";

const EffectCounter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Count:</h1>
        {show && <CounterCOMP count={count} setCount={setCount} />}
      </div>
      <button onClick={() => setShow(!show)}>{show ? "Stop" : "Start"}</button>
    </>
  );
};

export default EffectCounter;
