import styled from 'styled-components';
import { useRouter } from 'next/router';

import DataItem from '../molecules/DataItem';

import dataList from '../../../data/dataList';

const DataListSection = () => {
  const router = useRouter();
  const handleClickDataItem = (dataId: number) => {
    return () => router.push(`/${dataId}`);
  };

  return (
    <DataListSectionWrapper>
      <h2>Data List</h2>
      <ul>
        {dataList.map((data) => (
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
