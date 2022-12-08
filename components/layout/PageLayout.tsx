import React from 'react';
import styled from 'styled-components';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <PageLayoutWrapper>{children}</PageLayoutWrapper>;
};

const PageLayoutWrapper = styled.section`
  width: 100%;
  max-width: 768px;

  margin: 0 auto;
  padding-top: 120px;
`;

export default PageLayout;
