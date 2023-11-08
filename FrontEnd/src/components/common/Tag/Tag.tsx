import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  width: fit-content;
  min-width: 28px;
  max-width: 80px;

  padding: 4px 8px;

  border-radius: 4px;
  background-color: var(--color-main);

  font-size: 10px;
  font-weight: 600;
  color: var(--color-white);

  text-align: center;
`;

const Tag = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Tag;
