import styled from 'styled-components';

const DataTitleText = ({ dataTitle }: { dataTitle: string }) => {
  return <DataTitleTExtWrapper>{dataTitle}</DataTitleTExtWrapper>;
};

const DataTitleTExtWrapper = styled.strong`
  font-size: 20px;
  font-weight: 600;
`;

export default DataTitleText;
