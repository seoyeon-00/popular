import styled from 'styled-components';
const Select = styled.select<{ width: number }>`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/chevronDownIcon.png') no-repeat 90% 50%/10px auto;
  ${(props) => `width: ${props.width}%;`}
  height: 39px;
  color: #666;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  font-size: 12px;
  margin-top: 10px;
  padding-left: 15px;
  font-weight: 500;
  cursor: pointer;

  + select {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px;
  }
`;

const Filter = ({
  onChange,
  value,
  Options,
  width,
}: {
  value: string | number;
  Options: string[] | number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  width: number;
}) => {
  return (
    <Select value={value} onChange={onChange} width={width}>
      {Options.map((option, index) => (
        <option key={index} value={option} disabled={index === 0}>
          {option}
        </option>
      ))}
    </Select>
  );
};
export default Filter;
