import styled from 'styled-components';

const TagText = ({ tagText }: { tagText: string }) => {
  return <TagTextWrapper>{tagText}</TagTextWrapper>;
};

const TagTextWrapper = styled.span`
  display: inline-block;

  padding: 10px 15px;

  border-radius: 10px;

  background-color: #d35400;

  color: #fff;
`;

export default TagText;
