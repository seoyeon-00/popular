import styled from 'styled-components';
import { useState } from 'react';
import { Store } from '../../../types/store';
import { useNavigate } from 'react-router-dom';

type Props = {
  store: Store;
};

interface HoursData {
  start: string | null;
  end: string | null;
}

interface Hours {
  [key: string]: HoursData;
}

const Container = styled.div`
  width: 100%;
  padding-left: 20px;

  .store-detail-info-list {
    display: flex;
    flex-direction: column;
    width: 100%;

    li + li {
      margin-top: 13px;
    }
  }

  .store-detail-title {
    font-size: 18px;
    font-weight: 700;
  }

  .store-detail-sub-text {
    font-size: 15px;
    font-weight: 400;
    color: #666;
    margin: 13px 0 15px 0;
  }

  .store-detail-info-item-continer {
    background-color: #f8f8f8;
    padding: 4%;
    border-radius: 10px;
  }

  .store-detail-info-item {
    display: flex;
    align-items: center;

    img {
      width: 22px;
    }
  }

  .item-info {
    font-size: 15px;
    font-weight: 500;
    margin-left: 12px;
    margin-right: 5px;
  }

  .week-btn {
    display: flex;
    align-items: end;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #f8f8f8;

    img {
      width: 70%;
    }
  }

  .hours-list {
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 45px;

    li + li {
      margin-top: 8px;
    }
  }

  .hours-item {
    letter-spacing: 1px;
  }

  .businessOff {
    color: var(--color-red);
  }

  .businessOn {
    color: var(--color-sub);
  }

  .store-sns-title {
    width: 100%;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
  }

  .store-sns-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;

    li + li {
      margin-top: 10px;
    }
  }

  .store-sns-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
  }

  .sns-info {
    display: flex;
    align-items: center;
  }

  .sns-title {
    font-size: 16px;
    margin-left: 10px;
  }

  .sns-link {
    width: 130px;
    height: 30xp;
    border: 1px solid #652cc1;
    border-radius: 5px;
    line-height: 28px;
    text-align: center;
    color: #652cc1;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #652cc1;
      color: #fff;
      transform: translateY(-2px);
    }
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
`;

function getPeriod(period: string) {
  const date = new Date(period);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

function businessHours(hours: Hours) {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const koreanDays = ['월', '화', '수', '목', '금', '토', '일'];
  const openHours: string[] = [];

  Object.entries(hours).forEach(([day, time]) => {
    const start = time.start;
    const end = time.end;
    const dayIndex = days.indexOf(day);
    const koreanDay = koreanDays[dayIndex];

    if (!start || !end) {
      return openHours.push(`${koreanDay} 휴무일`);
    }

    openHours.push(`${koreanDay} ${start} ~ ${end}`);
  });

  return (
    <ul className="hours-list">
      {openHours.map((hour: string, i: number) => (
        <li className="hours-item" key={i}>
          {hour}
        </li>
      ))}
    </ul>
  );
}

function checkedOpen(hours: Hours) {
  const nowDate = new Date();
  const day = nowDate.getDay() === 0 ? 7 : nowDate.getDay();
  const time = nowDate.getHours();

  const currentDayKey = Object.keys(hours)[day - 1];
  const currentDay = hours[currentDayKey];

  if (currentDay.start === null || currentDay.end === null) {
    return (
      <p className="item-info">
        <span className="businessOff">영업 종료</span> 휴무일
      </p>
    );
  }

  if (parseInt(currentDay.start) > time || parseInt(currentDay.end) <= time) {
    return (
      <p className="item-info">
        <span className="businessOff">영업 종료</span> {currentDay.start} ~ {currentDay.end}
      </p>
    );
  }

  return (
    <p className="item-info">
      <span className="businessOn">영업 중</span> {currentDay.start} ~ {currentDay.end}
    </p>
  );
}

const InfoDetail = ({ store }: Props) => {
  const [week, setWeek] = useState<boolean>(false);
  const gather = useNavigate();
  const toGather = () => {
    gather('/community/board/gather');
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <ul className="store-detail-info-list">
        <p className="store-detail-title">🖍️ 운영 정보</p>
        <p className="store-detail-sub-text">운영정보를 확인하고 방문해주세요.</p>
        <ul className="store-detail-info-item-continer">
          <li className="store-detail-info-item">
            <p>🗓️</p>
            <p className="item-info">
              {getPeriod(store.start_date)} ~ {getPeriod(store.end_date)}
            </p>
          </li>
          <li className="store-detail-info-item">
            <p>🕛</p>
            {checkedOpen(store.hours)}
            <button className="week-btn" onClick={() => setWeek(!week)}>
              <img
                src="/images/angle-down.svg"
                alt=""
                style={week ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0)' }}
              />
            </button>
          </li>
          {week && businessHours(store.hours)}
          <li className="store-detail-info-item">
            <p>📍</p>
            <p className="item-info">{store.location}</p>
          </li>
          <li className="store-detail-info-item">
            <p>💰</p>
            <p className="item-info">입장료 {!store.price ? '무료' : `${store.price.toLocaleString()}원`}</p>
          </li>
        </ul>
        <div className="store-sns-title">🍩 SNS</div>
        {store.sns.length > 0 && (
          <>
            <ul className="store-sns-list">
              {store.sns.map((item, i) => {
                return (
                  <li className="store-sns-item" key={i}>
                    <div className="sns-info">
                      {item.link_type === 'insta' ? (
                        <img className="sns-ico" src="/images/instagram.svg" alt="" />
                      ) : (
                        <img className="sns-ico" src="/images/globe.svg" alt="" />
                      )}
                      <p className="sns-title">{item.link_title}</p>
                    </div>
                    <a className="sns-link" href={item.link_url} target="blank">
                      {item.link_type}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <div className="detail-bottom-btns">
          <div className="line"></div>
          <button
            onClick={() => window.open(store.sns[0].link_url)}
            disabled={store.reservation_required ? false : true}
            className="reservation-btn"
          >
            예약하기
          </button>
          <button
            onClick={() => {
              toGather();
            }}
            className="recruiment-btn"
          >
            모집하기
          </button>
        </div>
      </ul>
    </Container>
  );
};

export default InfoDetail;
