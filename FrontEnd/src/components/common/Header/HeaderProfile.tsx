import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;

const Image = styled.div`
  width: 35px;
  height: 35px;
  aspect-ratio: 1/1;

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const HeaderProfile = ({ src, name }: { src: string; name?: string }) => {
  return (
    <Container>
      <Image>
        <Link to="/usermenu">
          <img src={src} alt="profile" onError={() => 'this.src="/defaultProfile.svg"'} />
        </Link>
      </Image>
      <UserName>
        <Link to="/usermenu">{name}</Link>
      </UserName>
    </Container>
  );
};

export default HeaderProfile;
