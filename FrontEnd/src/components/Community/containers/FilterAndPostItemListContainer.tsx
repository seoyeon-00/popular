import WriteButton from '../components/WriteButton';
import FilterAndWriteButtonWrapContainer from './FilterAndWriteWrapContainer';
import FilterContainer from './FilterContainer';
import FilterInfoContainer from './FilterInfoContainer';
import PostListItemContainer from './PostListContainer';

const FilterAndPostItemListContainer = () => {
  return (
    <>
      <PostListItemContainer>
        <FilterAndWriteButtonWrapContainer>
          <FilterContainer />
          <WriteButton />
        </FilterAndWriteButtonWrapContainer>
        <FilterInfoContainer />
      </PostListItemContainer>
    </>
  );
};

export default FilterAndPostItemListContainer;
