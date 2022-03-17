const Input =({label,name ,placeholder, type,value,onChange})=>{
    return (
      <div className="md:my-2">
        <label htmlFor={name} className="text-gray-600 px-2 font-bold">
          {label}
        </label>
        <input
          className="form-control rounded-full border border-2 w-full py-1  my-2 outline-none px-4 shadow-lg"
          placeholder={placeholder}
          required
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    );
}

export default Input;