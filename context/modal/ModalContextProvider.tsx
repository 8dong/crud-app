import React, { useState } from 'react';

import ModalContext from './modalContext';

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(<></>);

  const showModalHandler = (modalContent: React.ReactNode) => {
    setModalContent(modalContent);
    setIsShowModal(true);
  };

  const hideModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ isShowModal, modalContent, showModalHandler, hideModalHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
