import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useContext } from 'react';

import DataDetailSection from '../components/UI/organisms/DataDetailSection';
import ModalLayout from '../components/layout/ModalLayout';

import ModalContext from '../context/modal/modalContext';

import type { GetServerSideProps } from 'next';
import type { RootState } from '../redux/store/store';

const protalElement = typeof window !== 'undefined' && document.getElementById('portal');

const DataDetail = ({ dataId }: { dataId: string }) => {
  const dataList = useSelector((store: RootState) => store.data);
  const findData = dataList.find((data) => String(data.id) === dataId)!;

  const { isShowModal, modalContent } = useContext(ModalContext)!;

  return (
    <>
      {isShowModal &&
        createPortal(<ModalLayout>{modalContent}</ModalLayout>, protalElement as HTMLDivElement)}
      <DataDetailSection data={findData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      dataId: context.params?.dataId
    }
  };
};

export default DataDetail;
