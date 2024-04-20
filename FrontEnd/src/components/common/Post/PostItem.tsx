import styled from 'styled-components';
import { Post } from '../../../types/post';
import BoardTypeTag from '../../common/Board/BoardTypeTag';
import dayjs from 'dayjs';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  const findImage = post.content;
  const regex = /src="([^"]+)"/;
  const match = findImage.match(regex);

  const contentPreview = () => {
    const startTag = '<p>';
    const endTag = '</p>';

    // 첫 번째 <p> 태그의 시작 위치를 찾음
    const startIndex = post.content.indexOf(startTag);
    if (startIndex !== -1) {
      // 시작 위치 이후에서 첫 번째 </p> 태그의 위치를 찾음
      const endIndex = post.content.indexOf(endTag, startIndex);

      if (endIndex !== -1) {
        // <p> 태그 안의 텍스트를 추출
        const text = post.content.slice(startIndex + startTag.length, endIndex);

        return text;
      }
    }
  };
  return (
    <Container key={post._id}>
      <PostItemImage>
        <div className="temporary-image">
          {match ? (
            <img src={post.images && post.images[0]} />
          ) : (
            <img alt={'임시이미지'} src={'https://i.esdrop.com/d/f/V3n7QYUh8O/jEFtCg0n1H.png'} />
          )}
        </div>
      </PostItemImage>
      <ContainerInner>
        <PostItemInfo>
          <PostItemCategory>
            <BoardTypeTag boardType={post.board} />
            <BoardTitle>{post.title}</BoardTitle>
          </PostItemCategory>
          <PostItemContent>{contentPreview()}</PostItemContent>
          <PostItemBottom>
            <span>{dayjs(post.createdAt).format('YYYY-MM-DD').replace(/-/g, '.')} </span>
            <div className="info">
              {typeof post.author === 'object' ? (
                <>
                  <span>{post.author.nickname}</span>
                  <span>좋아요 {post.likes.length}</span>
                </>
              ) : (
                `💜 ${post.likes.length > 0 ? post.likes.length : '0'}`
              )}
            </div>
          </PostItemBottom>
        </PostItemInfo>
      </ContainerInner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-light-gray);
  transition: all 0.3s;
  box-shadow: 1px 1px 10px #eee;
  border-radius: 8px;
  animation: appear-post 1s forwards;

  @keyframes appear-post {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
    filter: brightness(1.2);
  }

  @media all and (max-width: 767px) {
    padding: 20px 15px;
  }
`;

const ContainerInner = styled.div`
  padding: 25px 25px 40px 25px;
  width: 100%;
  position: relative;
  z-index: 5;
`;

const PostItemImage = styled.div`
  width: 100%;

  .temporary-image {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      filter: brightness(0.4);
    }
  }
  @media all and (max-width: 767px) {
    width: 28%;
  }
`;

const PostItemInfo = styled.div`
  width: 100%;

  @media all and (max-width: 767px) {
    width: 72%;
  }
`;

const PostItemCategory = styled.div`
  font-size: var(--font-small);
  color: var(--color-light-black);

  display: flex;
  gap: 10px;
  align-items: center;
`;

const BoardTitle = styled.div`
  max-width: 100%;
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px 0px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #111;
`;

const PostItemBottom = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 14px;
  color: var(--color-light-black);

  .info {
    display: flex;
    gap: 10px;
  }
`;

const PostItemContent = styled.div`
  max-width: 100%;
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a7a7a7;

  @media all and (max-width: 767px) {
    font-size: var(--font-small);
  }
`;

export default PostItem;
