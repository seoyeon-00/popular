import styled from 'styled-components';
import FilterDateBox from './FilterDateBox';
interface durationFilterValue {
  show: boolean;
  use: boolean;
  startDate: string;
  endDate: string;
}

const Duration = styled.button`
  height: 39px;
  background: url('/chevronDownIcon.png') no-repeat 90% 50%/10px auto;
  color: #666;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  font-size: 12px;
  text-align: left;
  padding-left: 15px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 11px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-top: 10px;
  margin-left: 5px;
  position: relative;
`;

//show에 따라 캘린더 표시 유무
const FilterDuration = ({
  setShow,
  setStartDate,
  setEndDate,
  startDateTarget,
  setStartDateTarget,
  endDateTarget,
  setEndDateTarget,
  setFilterDurationUse,
  durationFilterValue,
}: {
  setShow: () => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  startDateTarget: string;
  setStartDateTarget: React.Dispatch<React.SetStateAction<string>>;
  endDateTarget: string;
  setEndDateTarget: React.Dispatch<React.SetStateAction<string>>;
  setFilterDurationUse: (use: boolean) => void;
  durationFilterValue: durationFilterValue;
}) => {
  return (
    <Wrap>
      <Duration onClick={setShow}>스토어 기간</Duration>
      {durationFilterValue.show && (
        <FilterDateBox
          setShow={setShow}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDateTarget={startDateTarget}
          setStartDateTarget={setStartDateTarget}
          endDateTarget={endDateTarget}
          setEndDateTarget={setEndDateTarget}
          setFilterDurationUse={setFilterDurationUse}
        />
      )}
    </Wrap>
  );
};

export default FilterDuration;
