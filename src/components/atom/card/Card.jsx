import styled from 'styled-components'
export const Card = (props) => {
  const { children } = props;
  return(
    <SCard>
      {children}
    </SCard>
  );
}

const SCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px -10px rgba(0,0,0,.3)
`;