import styled from 'styled-components';

import TagText from '../atoms/text/TagText';

const TagList = ({
  tags,
  handleClickTagItem
}: {
  tags: string[];
  handleClickTagItem?: (index: number) => () => void;
}) => {
  const allowClick = !!handleClickTagItem;

  return (
    <TagListWrapper allowClick={allowClick}>
      {tags.map((tag, index) => (
        <li
          key={index}
          className='tagItem'
          onClick={handleClickTagItem && handleClickTagItem(index)}
        >
          <TagText tagText={tag} allowClick={allowClick} />
        </li>
      ))}
    </TagListWrapper>
  );
};

const TagListWrapper = styled.ul<{ allowClick: boolean }>`
  display: flex;

  .tagItem {
    margin: 5px;

    cursor: ${(props) => (props.allowClick ? 'pointer' : 'auto')};
  }
`;

export default TagList;
