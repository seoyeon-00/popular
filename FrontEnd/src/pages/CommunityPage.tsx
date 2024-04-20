import styled from 'styled-components';
import FilterContainer from '../components/Community/containers/FilterContainer';
import WriteButton from '../components/Community/components/WriteButton';
import FilterInfoContainer from '../components/Community/containers/FilterInfoContainer';
import PostListItemContainer from '../components/Community/containers/PostListContainer';
import PaginationContainer from '../components/Community/containers/PaginationContainer';
import FilterAndWriteButtonWrapContainer from '../components/Community/containers/FilterAndWriteWrapContainer';
import MetaTag from '../components/SEO/MetaTag';
import TopBanner from '../components/common/Banner/TopBanner';
import SearchEndTabContainer from '../components/Community/containers/SearchEndTabContainer';
import FilterAndPostItemListContainer from '../components/Community/containers/FilterAndPostItemListContainer';

const Container = styled.div`
  width: 100%;
`;
const CommunityPage = () => {
  return (
    <Container>
      <MetaTag title={`POPULAR | 커뮤니티`} />
      <TopBanner
        title={'Community'}
        subText={'POPULAR 유저들과의 소통으로 즐거운 팝업 라이프! 스토어 경험을 공유해보세요.'}
      />
      <SearchEndTabContainer />
      <FilterAndPostItemListContainer />
      <PaginationContainer />
    </Container>
  );
};

export default CommunityPage;
