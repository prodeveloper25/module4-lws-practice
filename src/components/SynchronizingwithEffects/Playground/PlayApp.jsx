import { useState } from "react";
import Playground from "./Playground";

export default function PlayApp() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}
