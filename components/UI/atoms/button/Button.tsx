import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick: Function;
  bgColor: string;
}

const Button = ({ children, type, disabled, onClick, bgColor }: ButtonProps) => {
  const handleClickButtonHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <ButtonWrapper
      type={type}
      onClick={handleClickButtonHandler}
      bgColor={bgColor}
      disabled={disabled ?? false}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 40px;

  border: none;
  border-radius: 8px;

  background-color: ${(props) => `${props.bgColor}ba`};

  font-weight: 700;
  color: #fff;

  transition: background-color 200ms ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => `${props.bgColor}`};
  }

  &:disabled {
    background-color: ${(props) => `${props.bgColor}ba`};

    cursor: not-allowed;
  }
`;

export default Button;
