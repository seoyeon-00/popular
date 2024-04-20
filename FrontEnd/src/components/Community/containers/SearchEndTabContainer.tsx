import styled from 'styled-components';
import SearchInputContainer from './SearchInputContainer';
import TabsContainer from './TabsContainer';

const SearchEndTabContainer = () => {
  return (
    <Container>
      <SearchBox>
        <SearchInputContainer />
      </SearchBox>
      <TabBox>
        <TabsContainer />
      </TabBox>
    </Container>
  );
};

export default SearchEndTabContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 0px;
  gap: 10px;
`;

const SearchBox = styled.div`
  width: 40%;
`;
const TabBox = styled.div`
  width: 45%;
`;
