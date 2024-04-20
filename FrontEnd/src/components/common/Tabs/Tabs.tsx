import styled, { css } from 'styled-components';

const Tab = styled.p<{ active: boolean }>`
  width: 100%;
  padding: 15px 0px;
  text-align: center;
  font-size: var(--font-small);
  color: var(--color-light-black);
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;

  + p {
    margin-left: 4px;
  }

  &:hover {
    color: var(--color-light-black);
  }

  ${(props) =>
    props.active &&
    css`
      color: var(--color-light-black);
      border: 1px solid var(--color-gray);
      font-size: var(--font-small);
      font-weight: 600;

      @media (max-width: 420px) {
        font-size: var(--font-regular);
      }
    `}
`;

export default Tab;
