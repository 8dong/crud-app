import { createPortal } from 'react-dom';
import { useContext } from 'react';

import DataListSection from '../components/UI/organisms/DataListSection';
import ModalLayout from '../components/layout/ModalLayout';

import ModalContext from '../context/modal/modalContext';

import type { NextPage } from 'next';

const protalElement = typeof window !== 'undefined' && document.getElementById('portal');

const Home: NextPage = () => {
  const { isShowModal, modalContent } = useContext(ModalContext)!;

  return (
    <>
      {isShowModal &&
        createPortal(<ModalLayout>{modalContent}</ModalLayout>, protalElement as HTMLDivElement)}
      <DataListSection />
    </>
  );
};

export default Home;
