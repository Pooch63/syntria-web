import React, { useState } from 'react';
import './input.css';

interface FloatingInputProps {
  name?: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autocomplete?: string;
  required?: boolean;
  className?: string;
}

export default function FloatingInput({
  name = '',
  placeholder,
  value,
  onChange,
  type = 'password',
  autocomplete = '',
  required,
  className
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative"
    >
      <input
        name={name}
        type={type}
        autoComplete={autocomplete}
        placeholder={focused ? '' : placeholder}
        className={`input-field placeholder-dark-bg text-ltext w-[100%] border border-dark-bg ${className}`}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
      />
      <label className={`placeholder color-ltext bg-light-bg`} htmlFor={name}>
        {placeholder}
      </label>
    </div>
  );
}
