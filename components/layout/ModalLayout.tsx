import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import ModalContext from '../../context/modal/modalContext';

const ModalLayout = ({ children }: { children: React.ReactNode }) => {
  const { hideModalHandler } = useContext(ModalContext)!;

  const handleClickBackdrop = () => {
    hideModalHandler();
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <BackdropWrapper onClick={handleClickBackdrop} />
      <ModalOverlayWrapper>{children}</ModalOverlayWrapper>
    </>
  );
};

const BackdropWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  background-color: rgba(0, 0, 0, 0.65);
`;

const ModalOverlayWrapper = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;

  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  z-index: 300;

  background-color: white;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  animation: slide-down 500ms ease-out forwards;


  @keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default ModalLayout;
