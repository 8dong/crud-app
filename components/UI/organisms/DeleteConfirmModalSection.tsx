import styled from 'styled-components';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../atoms/button/Button';

import ModalContext from '../../../context/modal/modalContext';
import dataListSlice from '../../../redux/slice/dataListSlice';

import type { RootState } from '../../../redux/store/store';

const DeleteConfirmModalSection = () => {
  const { hideModalHandler } = useContext(ModalContext)!;
  const handleClickCancelButton = () => {
    hideModalHandler();
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const dataList = useSelector((store: RootState) => store.data);
  const handleClickConfirmButton = () => {
    const dataId = router.query.dataId;
    const deleteData = dataList.find((data) => String(data.id) === dataId);

    hideModalHandler();
    router.replace('/');
    dispatch(dataListSlice.actions.removeItem(deleteData));
  };

  return (
    <DeleteConfirmModalSectionWrapper>
      <h2>Are you sure you want to delete it?</h2>
      <div className='buttonGroup'>
        <Button bgColor='#d4d4d4' onClick={handleClickCancelButton}>
          Cancel
        </Button>
        <Button bgColor='#e74c3c' onClick={handleClickConfirmButton}>
          Confirm
        </Button>
      </div>
    </DeleteConfirmModalSectionWrapper>
  );
};

const DeleteConfirmModalSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  .buttonGroup {
    align-self: flex-end;

    display: flex;
  }

  .buttonGroup button {
    margin: 10px;
  }
`;

export default DeleteConfirmModalSection;
