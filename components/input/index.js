import React from "react";
const Input = ({
  name,
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
  formikError,
  onBlur,
}) => {
  console.log(value);
  return (
    <div className="my-2">
      <label className="pr-4 text-textWave" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border text-textWave w-full my-2 rounded-full px-3 py-2 outline-none"
      />
      <p className="text-red pr-2">{formikError}</p>
    </div>
  );
};
export default Input;