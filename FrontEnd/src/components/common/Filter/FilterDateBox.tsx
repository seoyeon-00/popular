import styled from 'styled-components';

const DateBoxContainer = styled.div`
  background-color: white;
  border: 1px solid #987fc0;
  border-radius: 8px;
  padding: 17px 10px;
  top: 50px;
  right: -30px;
  position: absolute;
  z-index: 10;
`;

const DateContent = styled.div`
  margin-top: 5px;
`;

const DateBoxTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const DateBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 5px 3px;
`;

const DateBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const DateName = styled.span`
  width: 30%;
  text-align: center;
  margin: auto;
  font-size: 14px;
`;

const DateSelectCompleteButton = styled.button`
  background-color: var(--color-sub);
  color: var(--color-white);
  border: none;
  border-radius: 5px;
  padding: 5px 0px;

  width: 100%;
  margin-top: auto;
  cursor: pointer;
`;

const DateInput = styled.input`
  width: 70%;
  background: #efefef;
  border: none;
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  padding: 2px 7px;
  border-radius: 50px;
  text-align: center;
`;

const DateValidation = (
  startDate: string,
  endDate: string,
  setStartDate: (date: string) => void,
  setEndDate: (date: string) => void,
  durationFilterUse: (use: boolean) => void,
) => {
  if (new Date(startDate).getTime() <= new Date(endDate).getTime()) {
    // 전체 다 바꾸기
    setStartDate(startDate);
    setEndDate(endDate);
    durationFilterUse(true);
  } else alert('날짜를 확인해주세요');
};

const FilterDateBox = ({
  setShow,
  setStartDate,
  setEndDate,
  startDateTarget,
  setStartDateTarget,
  endDateTarget,
  setEndDateTarget,
  setFilterDurationUse,
}: {
  setShow: () => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  startDateTarget: string;
  setStartDateTarget: React.Dispatch<React.SetStateAction<string>>;
  endDateTarget: string;
  setEndDateTarget: React.Dispatch<React.SetStateAction<string>>;
  setFilterDurationUse: (use: boolean) => void;
}) => {
  return (
    <DateBoxContainer>
      <DateBoxTitle>스토어 기간을 선택해주세요.</DateBoxTitle>
      <DateContent>
        <DateBoxWrap>
          <DateBox>
            <DateName>시작일</DateName>
            <DateInput type="date" onChange={(e) => setStartDateTarget(e.target.value)} value={startDateTarget} />
          </DateBox>
          <DateBox>
            <DateName>종료일</DateName>
            <DateInput type="date" onChange={(e) => setEndDateTarget(e.target.value)} value={endDateTarget} />
          </DateBox>
        </DateBoxWrap>
        <DateSelectCompleteButton
          onClick={() => {
            DateValidation(startDateTarget, endDateTarget, setStartDate, setEndDate, setFilterDurationUse);
            setShow();
          }}
        >
          완료
        </DateSelectCompleteButton>
      </DateContent>
    </DateBoxContainer>
  );
};

export default FilterDateBox;
