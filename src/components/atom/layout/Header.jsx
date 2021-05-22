import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
}

const SHeader = styled.header`
  padding: 10px;
  background-color: #000;
  margin-bottom: 20px;
`;

const SLink = styled(Link)`
  margin: 0 8px;
  color: #fff;
`;