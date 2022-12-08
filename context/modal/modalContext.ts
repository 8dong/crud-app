import { createContext } from 'react';

interface ModalContextValueType {
  isShowModal: boolean;
  modalContent: React.ReactNode;
  showModalHandler: (content: React.ReactNode) => void;
  hideModalHandler: () => void;
}

const ModalContext = createContext<undefined | ModalContextValueType>(undefined);

export default ModalContext;
