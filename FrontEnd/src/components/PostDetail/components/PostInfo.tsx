import BoardTypeTag from '../../common/Board/BoardTypeTag';
import { BoardTypes } from '../../../types/board';
import styled from 'styled-components';
import { CLIENT_PATH } from '../../../constants/path';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
interface PostInfoType {
  boardType: BoardTypes;
  title: string;
  authorId: string;
  nickName: string;
  createdAt: string;
  comments: number;
  views: number;
  profile: string;
  follower: number;
}

const PostInfoWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .board {
    width: fit-content;
    transform-origin: left;
  }

  .feed-data {
    display: flex;
    gap: 10px;
    width: 100%;
    height: fit-content;
  }
`;

const ColumnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const RowWrap = styled.div`
  padding: 5px 0;
`;

const RowWrapMiddle = styled.div`
  display: flex;
  gap: 20px;

  padding: 12px 10px;
`;

const PostTitle = styled.h3`
  margin-top: 5px;
  font-size: 22px;
  font-weight: 500;
`;
const TopInfo = styled.div`
  width: 90%;
`;

const BottomInfo = styled.div`
  width: 10%;
  border-radius: 10%;
  height: 130px;
  color: var(--color-gray);
  padding: 15px 2px;
  font-size: var(--font-small);
  background-color: #f6f6f6;

  a {
    color: var(--color-gray);
  }

  .profile {
    text-align: center;

    .profile-pic {
      width: 40px;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }

    .info {
      margin-top: 4px;
      width: 100%;

      .nickname {
        color: #000;
        font-size: 12px;
        font-weight: 500;
      }

      .follower {
        margin-top: 13px;
        em {
          font-size: 12px;
          font-weight: 500;
          background-color: #333;
          color: #eee;
          padding: 2px 8px;
          border-radius: 20px;
        }
      }
    }
  }
`;
const RightInfo = styled.div`
  display: flex;
  gap: 4px;
  color: var(--color-light-black);
  font-size: var(--font-small);
  font-weight: 500;
`;

const PostInfo = ({
  boardType,
  title,
  authorId,
  profile,
  nickName,
  createdAt,
  comments,
  follower,
  views,
}: PostInfoType) => {
  return (
    <PostInfoWrap>
      <RowWrap>
        <ColumnWrap>
          <TopInfo>
            <Link to={`/community/board/${boardType}`} className="board">
              <BoardTypeTag boardType={boardType} />
            </Link>
            <PostTitle>{title}</PostTitle>
          </TopInfo>
          <BottomInfo>
            <Link to={CLIENT_PATH.PROFILE.replace(':userId', authorId)}>
              <div className="profile">
                <img src={profile ? profile : '/defaultProfile.svg'} className="profile-pic" />
                <div className="info">
                  <div className="nickname">
                    <span className="point-bold">{nickName}</span>
                  </div>
                  <div className="follower">
                    <em>{follower} 팔로워</em>
                  </div>
                </div>
              </div>
            </Link>
          </BottomInfo>
        </ColumnWrap>
        <div className="feed-data"></div>
      </RowWrap>
      <RowWrapMiddle>
        <RightInfo>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#8151ca" viewBox="0 0 24 24">
            <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
          </svg>
          <span>조회수</span>
          <span> {views}</span>
        </RightInfo>
        <RightInfo>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#8151ca" viewBox="0 0 512 512">
            <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
          </svg>
          <span>댓글</span>
          <span>{comments}</span>
        </RightInfo>
        <RightInfo>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#8151ca" viewBox="0 0 448 512">
            <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
          </svg>
          <span>작성일</span>
          <div className="created">{`${dayjs(createdAt).format('YYYY-MM-DD')}`}</div>
        </RightInfo>
      </RowWrapMiddle>
    </PostInfoWrap>
  );
};

export default PostInfo;
