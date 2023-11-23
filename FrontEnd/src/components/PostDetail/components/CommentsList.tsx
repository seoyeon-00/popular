import styled from 'styled-components';
import { Comment } from '../../../types/comment';
import CommentItemContainer from '../containers/CommentItemContainer';

const CommentBox = styled.div`
  margin-top: 30px;
  padding-top: 20px;
`;

const Title = styled.h4`
  font-size: var(--font-regular);
  margin-bottom: 10px;
  font-weight: var(--weight-regular);
  letter-spacing: -0.5px;
  span {
    color: var(--color-black);
    font-weight: var(--weight-semi-bold);
  }
`;

const CommentsList = ({ comments }: { comments: Comment[] | undefined }) => {
  return (
    <CommentBox>
      <Title>
        댓글 <span>{comments?.length}</span>
      </Title>
      <ul>
        {comments?.map((comment, index) => (
          <CommentItemContainer key={comment._id + index} comment={comment} />
        ))}
      </ul>
    </CommentBox>
  );
};

export default CommentsList;
