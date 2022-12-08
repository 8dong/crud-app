import styled from 'styled-components';

import TagText from '../atoms/text/TagText';

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <TagListWrapper>
      {tags.map((tag, index) => (
        <li key={index} className='tagItem'>
          <TagText tagText={tag} />
        </li>
      ))}
    </TagListWrapper>
  );
};

const TagListWrapper = styled.ul`
  display: flex;

  .tagItem {
    margin: 5px;
  }
`;

export default TagList;
