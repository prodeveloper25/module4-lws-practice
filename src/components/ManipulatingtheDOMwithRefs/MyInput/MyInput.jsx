import { useRef } from "react";
import CustomInput from "./CustomInput";

const MyInput = () => {
  const inputRef = useRef(null);
  const handleInputState = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "red";
  };
  return (
    <>
      <CustomInput type="text" placeholder="Enter your name" ref={inputRef} />
      <button onClick={handleInputState}>Focus the input</button>
    </>
  );
};

export default MyInput;
