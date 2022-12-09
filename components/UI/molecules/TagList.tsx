import styled from 'styled-components';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import TagText from '../atoms/text/TagText';

const TagList = ({
  tags,
  handleClickTagItem
}: {
  tags: string[];
  handleClickTagItem?: (tagValue: string) => () => void;
}) => {
  const allowClick = !!handleClickTagItem;

  return (
    <TagListWrapper allowClick={allowClick}>
      <TransitionGroup component='ul'>
        {tags.map((tag) => (
          <CSSTransition key={tag} timeout={500} classNames='fade' mountOnEnter unmountOnExit>
            <li className='tagItem' onClick={handleClickTagItem && handleClickTagItem(tag)}>
              <TagText tagText={tag} allowClick={allowClick} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </TagListWrapper>
  );
};

const TagListWrapper = styled.div<{ allowClick: boolean }>`
  ul {
    display: flex;
  }

  .tagItem {
    margin: 5px;

    cursor: ${(props) => (props.allowClick ? 'pointer' : 'auto')};
  }

  .fade-enter-active {
    animation: add-item 500ms;
  }

  .fade-exit-active {
    animation: del-item 500ms;
  }
`;

export default TagList;
