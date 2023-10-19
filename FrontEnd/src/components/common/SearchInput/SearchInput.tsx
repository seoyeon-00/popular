import styled from 'styled-components';
import SearchIcon from '../Icons/SearchIcon';

type Props = {
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 45px;
  svg {
    width: 20px;
    fill: var(--color-main);
    position: absolute;
    top: 10px;
    left: 18px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 14px;
  //margin-top: 15px;
  padding: 18px 15px 18px 47px;
  border: none;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: var(--color-pastel2);

  ::placeholder {
    color: var(--color-sub);
    font-size: var(--font-small);
    font-weight: 500;
  }
`;

const SearchContainerWrap = ({ placeholder, value, onChange, onKeyPress }: Props) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder={placeholder} value={value} onChange={onChange} onKeyPress={onKeyPress} />
    </SearchContainer>
  );
};

export default SearchContainerWrap;
