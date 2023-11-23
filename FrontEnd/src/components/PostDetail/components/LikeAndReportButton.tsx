import styled from 'styled-components';
import LikeIcon from '../../common/Icons/LikeIcon';
import ReportIcon from '../../common/Icons/ReportIcon';
import HeartIcon from '../../common/Icons/HeartIcon';
import UnLikeIcon from '../../common/Icons/UnLikeIcon';

const NameWrap = styled.span`
  margin-top: 5px;
`;

const Button = styled.button`
  display: flex;
  width: fit-content;
  flex-direction: column;
  background: none;
  align-items: center;
  font-size: var(--font-small);
  font-weight: 500;
  font-size: 13px;
  color: #a7a7a7;
  transition: all 0.4s;
  cursor: pointer;

  &.active {
    color: #161616;
  }

  svg {
    transition: all 0.5s;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-around;
  gap: 50px;
  margin: 0 auto;
`;

const LikesAndReports = ({
  checkLike,
  checkReport,
  likes,
  reports,
  onClick,
}: {
  checkLike: boolean | undefined;
  checkReport: boolean | undefined;
  likes: number | undefined;
  reports: number | undefined;
  onClick: (isLike: string) => Promise<void>;
}) => {
  return (
    <ButtonWrap>
      <Button
        onClick={() => {
          onClick('like');
        }}
        className={checkLike ? 'active' : ''}
      >
        {checkLike ? <HeartIcon fill={'#ff8787'} /> : <HeartIcon fill={'var(--color-gray)'} />}
        <NameWrap>좋아요 {likes}</NameWrap>
      </Button>
      <Button
        onClick={() => {
          onClick('report');
        }}
        className={checkReport ? 'active' : ''}
      >
        {checkReport ? <UnLikeIcon fill={'#c01010'} /> : <UnLikeIcon fill={'var(--color-gray)'} />}
        <NameWrap>싫어요 {reports}</NameWrap>
      </Button>
    </ButtonWrap>
  );
};

export default LikesAndReports;
