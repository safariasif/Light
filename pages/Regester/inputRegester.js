const Input = ({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  password,
  req,
}) => {
  return (
    <div className="md:my-2">
      <label htmlFor={name} className="text-gray-600 px-2 font-bold">
        {label}
      </label>
      <input style={{direction:"center"}}
        className="form-control rounded-full border border-2 w-full py-1  my-2 outline-none px-4 shadow-lg"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required={req}
      ></input>
    </div>
  );
};

export default Input;