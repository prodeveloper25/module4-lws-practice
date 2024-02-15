import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus the input</button>
    </>
  );
}
