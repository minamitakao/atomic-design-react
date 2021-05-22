import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const userlist = [...Array(30).keys()].map((val) => {
  return {
    id: val,
    img: 'https://source.unsplash.com/gKXKBY-C-Dk',
    name: `ぬこ：${val}`,
    email: 'nuko@neko.com',
    phone: '000-0000-0000',
    company: {
      name: '（株）ぬこ'
    }
  }
})

export const Users = () => {
  return (
    <SContainer>
      <h1>Userページだよ</h1>
      <SearchInput />
      <SUserArea>
      {
        userlist.map((user)=> (
          <UserCard key={user.id} user={user} />
        ))
      }
      </SUserArea>
    </SContainer>
  );
}

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SUserArea =  styled.div`
  padding: 20px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
