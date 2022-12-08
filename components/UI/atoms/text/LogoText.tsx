import styled from 'styled-components';
import Link from 'next/link';

const LogoText = ({ logoText }: { logoText: string }) => {
  return (
    <LogoTextWrapper>
      <Link href={'/'}>{logoText}</Link>
    </LogoTextWrapper>
  );
};

const LogoTextWrapper = styled.h1`
  display: flex;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    padding: 5px 20px;

    font-size: 25px;
    font-weight: 700;
  }
`;

export default LogoText;
