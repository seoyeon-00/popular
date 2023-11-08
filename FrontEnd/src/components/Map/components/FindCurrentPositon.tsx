import styled from 'styled-components';

const Container = styled.button`
  position: absolute;
  top: 50px;
  left: 50%;

  width: 150px;
  height: 40px;

  text-align: center;

  background: linear-gradient(to right, #3882ea, #6d00c6);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  z-index: 400;
  color: var(--color-white);
  font-size: 13px;
  font-weight: 500;

  transform: translate(-50%, 0);

  transition: all 0.5s;

  &:hover {
    cursor: pointer;

    transform: translate(-50%, -3px);
  }

  @media all and (max-width: 767px) {
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

interface Props {
  onClick?: () => void;
}

const FindCurrentPositon = ({ onClick }: Props) => {
  return <Container onClick={onClick}>현 위치에서 검색</Container>;
};

export default FindCurrentPositon;
