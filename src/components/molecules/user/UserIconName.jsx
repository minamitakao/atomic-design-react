import styled from 'styled-components'
export const UserIconName = (props) => {
  const { img, name } = props;
  return(
    <SContainer>
      <SImg width={160} src={img} />
      <SName>{name}</SName>
    </SContainer>
  );
}

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-weight: bold;
`;