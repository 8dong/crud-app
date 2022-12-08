import styled from 'styled-components';
import { useContext } from 'react';

import Button from '../atoms/button/Button';
import DateText from '../atoms/text/DateText';
import TagList from '../molecules/TagList';
import EditModalFormSection from './EditModalFormSection';
import DeleteConfirmModalSection from './DeleteConfirmModalSection';

import ModalContext from '../../../context/modal/modalContext';

import type { DataItemType } from '../../../data/dataList';

const DataDetailSection = ({ data }: { data: DataItemType }) => {
  const { showModalHandler } = useContext(ModalContext)!;
  const handleClickEditButton = () => {
    showModalHandler(<EditModalFormSection data={data} />);
  };

  const handleClickDeleteButton = () => {
    showModalHandler(<DeleteConfirmModalSection />);
  };

  if (!data) return <></>;

  return (
    <DataDetailSectionWrapper>
      <h2>{data.title} Detail Info</h2>
      <span className='dateText'>
        <DateText dateText={data.createdAt} />
      </span>
      <TagList tags={data.tags} />
      <p className='dataDesc'>{data.description}</p>
      <div className='buttonGroup'>
        <Button bgColor='#0066ff' onClick={handleClickEditButton}>
          Edit
        </Button>
        <Button bgColor='#e74c3c' onClick={handleClickDeleteButton}>
          Delete
        </Button>
      </div>
    </DataDetailSectionWrapper>
  );
};

const DataDetailSectionWrapper = styled.section`
  padding: 20px;

  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
  }

  .dateText {
    align-self: flex-end;
  }

  .dataDesc {
    padding: 20px;
  }

  .buttonGroup {
    align-self: flex-end;
    display: flex;
  }

  .buttonGroup button {
    margin: 10px;
  }
`;

export default DataDetailSection;
