import styled, { css } from 'styled-components';
import PrevArrowIcon from '../Icons/PrevArrowIcon';
import NextArrowIcon from '../Icons/NextArrowIcon';
const PageListWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

const PageList = styled.ul`
  display: flex;
`;

const PageItem = styled.li<{ active: boolean }>`
  padding: 5px;
  line-height: 13px;
  text-align: center;
  margin: 0 3px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  font-size: 12px;
  font-weight: 600;

  ${(props) =>
    props.active &&
    css`
      color: var(--color-white);
      background-color: var(--color-main);
      border-radius: 100%;
    `};
`;

const MovementButton = styled.button`
  color: var(--color-white);
  background: #f4f3f3;
  margin: 0 10px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50px;
`;

const Pagination = ({
  currPage,
  setPage,
  pageGroup,
  totalPage,
}: {
  currPage: number;
  setPage: (page: number) => void;
  pageGroup: number[];
  totalPage: number[];
}) => {
  return (
    <PageListWrap>
      <MovementButton
        onClick={() => {
          if (currPage !== 1) {
            setPage(currPage - 1);
          }
        }}
      >
        <PrevArrowIcon />
      </MovementButton>
      <PageList>
        {pageGroup.map(
          (page) =>
            page > 0 && (
              <PageItem
                key={page}
                onClick={() => {
                  setPage(page);
                }}
                active={page === currPage}
              >
                {page}
              </PageItem>
            ),
        )}
      </PageList>
      <MovementButton
        onClick={() => {
          if (currPage !== totalPage.length) {
            setPage(currPage + 1);
          }
        }}
      >
        <NextArrowIcon />
      </MovementButton>
    </PageListWrap>
  );
};

export default Pagination;
