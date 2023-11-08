import styled from 'styled-components';
import { Store } from '../../../types/store';
import Tag from '../Tag/Tag';
import dayjs from 'dayjs';

interface Props {
  store: Store;
  onClick?: () => void;
}

const Container = styled.article`
  position: relative;

  display: flex;

  width: 100%;
  min-width: 300px;
  max-width: 100%;
  height: 150px;

  padding: 15px;

  border-radius: 6px;

  transition: background-color 0.5s;

  figure {
    min-height: 100%;
    min-width: 100px;
    aspect-ratio: 1/1;
    margin-right: 20px;
    border-radius: 6px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1s;
    }
  }

  .store-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    flex-grow: 1;
    max-width: calc(100% - 130px);

    padding: 10px 0;

    .store-title {
      max-width: 100%;
      font-size: var(--font-regular);
      font-weight: var(--weight-regular);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .store-location {
      font-size: var(--font-xsmall);
      color: var(--color-black);
      font-weight: var(--weight-regular);
    }

    .store-date {
      margin-top: 15px;
      width: fit-content;
      font-size: var(--font-xsmall);
      color: var(--color-light-black);
    }

    .scraps {
      position: absolute;
      right: 30px;
      bottom: 30px;
      color: #3f3f3f;
      font-weight: 500;
      font-size: 14px;

      .scrap-number {
        margin-left: 2px;
        display: inline-block;
        transform: translateY(-2px);
      }
    }
  }

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
  }
`;

const StoreItem = ({ store, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <figure>
        <img src={store.images[0]} alt={store.title} />
      </figure>
      <div className="store-info">
        <h3 className="store-title">{store.title}</h3>
        <p className="store-location">
          {store.postcode.sido} {store.postcode.sigungu}
        </p>
        <p className="store-date">
          {dayjs(store.start_date).format('YYYY.MM.DD')} - {dayjs(store.end_date).format('YYYY.MM.DD')}
        </p>
        <div className="scraps">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ff8787" width="16" height="14" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
          <span className="scrap-number">{store.scraps.length}</span>
        </div>
        <Tag>{store.category}</Tag>
      </div>
    </Container>
  );
};

export default StoreItem;
