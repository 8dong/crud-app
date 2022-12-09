import styled from 'styled-components';
import React from 'react';

interface InputFieldProps {
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength?: number;
}

const InputField = ({
  value,
  disabled,
  placeholder,
  maxLength,
  onChange,
  onKeyDown,
  onPaste
}: InputFieldProps) => {
  return (
    <InputFieldWrapper
      disabled={disabled ?? false}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength ?? 524288}
    />
  );
};

const InputFieldWrapper = styled.input`
  width: 100%;
  padding: 10px 20px;

  border-radius: 10px;
  border: 1px solid #d4d4d4;
  outline: none;
`;

export default InputField;
