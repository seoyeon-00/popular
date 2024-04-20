import styled, { css } from 'styled-components';

const Tab = styled.p<{ active: boolean }>`
  text-align: center;
  font-size: var(--font-regular);
  width: 100%;
  cursor: pointer;
  transition: all 0.5s;
  padding: 20px 0px;
  color: var(--color-white);

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
      /* border-bottom: 3px solid var(--color-white); */
      background-color: var(--color-white);
      font-size: var(--font-regular);
      font-weight: 600;

      @media (max-width: 420px) {
        font-size: var(--font-regular);
      }
    `}
`;

export default Tab;
