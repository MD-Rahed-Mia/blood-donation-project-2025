import React from "react";

function InputField({
  label = "",
  type = "text",
  placeholder = "placeholder",
  onChange,
  disabled = false,
}: {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        disabled={disabled}
      />
    </div>
  );
}

export default InputField;
