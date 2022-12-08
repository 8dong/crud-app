import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import DataTitleText from '../atoms/text/DataTitleText';
import TagList from './TagList';
import Button from '../atoms/button/Button';
import DateText from '../atoms/text/DateText';

import dataListSlice from '../../../redux/slice/dataListSlice';

import type { DataItemType } from '../../../data/dataList';

const DataItem = ({ data }: { data: DataItemType }) => {
  const dispatch = useDispatch();
  const handleClickDeleteButton = () => {
    dispatch(dataListSlice.actions.removeItem(data));
  };

  return (
    <DataItemWrapper>
      <div className='title'>
        <DataTitleText dataTitle={data.title} />
      </div>
      <div className='tagList'>
        <TagList tags={data.tags} />
      </div>
      <p className='desc'>{data.description}</p>
      <div className='buttonGroup'>
        <Button bgColor='#0066ff'>Eidt</Button>
        <Button bgColor='#e74c3c' onClick={handleClickDeleteButton}>
          Delete
        </Button>
      </div>
      <DateText dateText={data.createdAt} />
    </DataItemWrapper>
  );
};

const DataItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;

  transition: box-shadow 300ms ease-in-out;

  .title {
    margin-bottom: 20px;
  }

  .tagList {
    margin-bottom: 10px;
  }

  .desc {
    margin-bottom: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .buttonGroup {
    align-self: flex-end;

    display: flex;
  }

  .buttonGroup button {
    margin: 10px;
  }

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 30px 4px;
  }
`;

export default DataItem;
