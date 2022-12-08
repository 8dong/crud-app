import styled from 'styled-components';

import LogoText from '../atoms/text/LogoText';
import Button from '../atoms/button/Button';

const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <div className='logoText'>
        <LogoText logoText='CRUD APP' />
      </div>
      <div className='AddButton'>
        <Button bgColor='#0066ff'>Add</Button>
      </div>
    </MainHeaderWrapper>
  );
};

const MainHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  max-width: 768px;
  height: 100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e4e4e4;

  background-color: #fff;

  .logoText {
    margin: 0 auto;
  }

  .AddButton {
    margin: 0 10px;
  }
`;

export default MainHeader;
