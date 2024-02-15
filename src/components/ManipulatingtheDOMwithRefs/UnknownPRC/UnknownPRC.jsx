import { useRef } from "react";

const UnknownPRC = () => {
  const myRef = useRef(null);
  console.log(myRef.current);
  return (
    <div>
      <div ref={myRef}>
        <h2>Hello World !</h2>
      </div>
    </div>
  );
};

export default UnknownPRC;
