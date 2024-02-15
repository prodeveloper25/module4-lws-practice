import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = function (props, ref) {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
      //   realInputRef.current.style.background = "red";
    },
  }));
  return <input {...props} ref={realInputRef} />;
};
const ForwardedMyInput = forwardRef(CustomInput);

export default ForwardedMyInput;
