import styled from 'styled-components';

const TagText = ({ tagText, allowClick }: { tagText: string; allowClick: boolean }) => {
  return <TagTextWrapper allowClick={allowClick}>{tagText}</TagTextWrapper>;
};

const TagTextWrapper = styled.span<{ allowClick: boolean }>`
  display: inline-block;

  padding: 10px 15px;

  border-radius: 10px;

  background-color: #d35400;

  color: #fff;

  word-break: keep-all;

  &:hover {
    background-color: ${(props) => (props.allowClick ? '#d35400ba' : '#d35400')};
  }
`;

export default TagText;
