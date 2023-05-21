import React from "react";

export default function Input(props) {
  const { type, placeholder, name, id, value, onChange, className, required } =
    props;
  return (
    <input
      required={required}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={`rounded-lg h-[40px] w-full px-4 mt-4 text-sm bg-dark border-[#0085FF] border-[1px] ${className}`}
    />
  );
}
