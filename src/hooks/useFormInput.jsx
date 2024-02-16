import { useState } from "react";

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const inputProps = {
    value: value,
    onChange: handleChange,
  };
  return inputProps;
};

export default useFormInput;
