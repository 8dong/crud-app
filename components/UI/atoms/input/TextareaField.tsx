import styled from 'styled-components';
import React from 'react';

interface TextareaFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  maxLength: number;
  rows: number;
}

const TextareaField = ({ value, onChange, placeholder, maxLength, rows }: TextareaFieldProps) => {
  return (
    <TextareaFieldWrapper
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      rows={rows}
    />
  );
};

const TextareaFieldWrapper = styled.textarea`
  width: 100%;
  padding: 10px 20px;

  border-radius: 10px;
  border: 1px solid #d4d4d4;
  outline: none;

  resize: none;
`;

export default TextareaField;
