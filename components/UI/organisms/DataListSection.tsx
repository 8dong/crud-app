import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { useRouter } from 'next/router';

import DataItem from '../molecules/DataItem';

import type { RootState } from '../../../redux/store/store';

const DataListSection = () => {
  const dataList = useSelector((store: RootState) => store.data);
  const newestDataList = [...dataList].sort((prevData, curData) => {
    return Date.parse(curData.createdAt) - Date.parse(prevData.createdAt);
  });

  const router = useRouter();
  const handleClickDataItem = (dataId: number) => {
    return () => router.push(`/${dataId}`);
  };

  return (
    <DataListSectionWrapper>
      <h2>Data List</h2>
      <ul>
        {newestDataList.map((data) => (
          <li key={data.id} onClick={handleClickDataItem(data.id)}>
            <DataItem data={data} />
          </li>
        ))}
      </ul>
    </DataListSectionWrapper>
  );
};

const DataListSectionWrapper = styled.section`
  padding: 20px;

  h2,
  li {
    margin-bottom: 20px;
  }
`;

export default DataListSection;
