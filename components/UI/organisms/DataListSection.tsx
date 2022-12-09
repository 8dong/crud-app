import { useSelector } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

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
      <TransitionGroup component='ul'>
        {newestDataList.map((data) => (
          <CSSTransition key={data.id} timeout={500} classNames='fade' mountOnEnter unmountOnExit>
            <li onClick={handleClickDataItem(data.id)}>
              <DataItem data={data} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </DataListSectionWrapper>
  );
};

const DataListSectionWrapper = styled.section`
  padding: 20px;

  h2,
  li {
    margin-bottom: 20px;
  }

  .fade-enter-active {
    animation: add-item 500ms;
  }

  .fade-exit-active {
    animation: del-item 500ms;
  }

  @keyframes add-item {
    0% {
      opacity: 0;
    }

    30% {
      opacity: 0.5;
      transform: translateY(5px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes del-item {
    0% {
      opacity: 1;
    }

    30% {
      opacity: 0.5;
      transform: translateY(5px);
    }

    100% {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;

export default DataListSection;
