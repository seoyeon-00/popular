import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const CommentInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 4px;
`;

const Input = styled.input`
  border: none;
  background-color: #f2f1f1;
  width: 90%;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 5px;
  padding-left: 15px;
`;
const RegisterButton = styled.button`
  background-color: var(--color-main);
  color: var(--color-white);
  border-radius: 8px;
  width: 10%;
  height: 50px;
  cursor: pointer;
`;

const CommentInput = ({
  isComposing,
  setIsComposing,
  value,
  onChange,
  RegisterComment,
}: {
  isComposing: boolean;
  setIsComposing: Dispatch<SetStateAction<boolean>>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  RegisterComment: () => void;
}) => {
  return (
    <CommentInputWrap>
      <Input
        placeholder="댓글을 입력해주세요"
        onChange={onChange}
        value={value}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            RegisterComment();
          }
        }}
      />
      <RegisterButton onClick={RegisterComment}>등록하기</RegisterButton>
    </CommentInputWrap>
  );
};

export default CommentInput;
