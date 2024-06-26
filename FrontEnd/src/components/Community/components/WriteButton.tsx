import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CLIENT_PATH } from '../../../constants/path';
import { useState } from 'react';
import LoginModal from '../../common/Modals/LoginModal';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30%;
  height: 39px;
  margin-left: 5px;
  background-color: var(--color-main);
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  color: var(--color-white);

  @media (max-width: 768px) {
    width: fit-content;
  }

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const WriteButton = () => {
  const token = localStorage.getItem('token');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        if (!token) setIsModalOpen(true);
        else navigate(CLIENT_PATH.WRITE);
      }}
    >
      <span>작성하기</span>
      {isModalOpen && <LoginModal onClose={setIsModalOpen} />}
    </Button>
  );
};

export default WriteButton;
