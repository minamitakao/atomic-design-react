import styled from 'styled-components';
import { Card } from '../../atom/card/Card'
import { UserIconName } from '../../molecules/user/UserIconName'
export const UserCard = (props) => {
  const { user } = props
  return(
    <Card>
      <UserIconName name={user.name} img={user.img} />
      <Sdl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
      </Sdl>
    </Card>
  )
}

const Sdl = styled.dl`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  padding: 8px 10px;
  /* background-color: #ededed; */
  dt {
    margin:0;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 8px;
    width: calc(30% - 16px);
  }
  dd {
    margin:0;
    flex-shrink: 0;
    flex-grow: 0;
    padding:8px;
    width: calc(70% - 16px);
  }
`;
