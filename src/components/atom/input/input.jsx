import styled from 'styled-components'
export const Input = (props) => {
  const { placeholder="空" } = props;
  return(
    <SInput type="text" placeholder={ placeholder } />
  )
}

const SInput = styled.input`
  border-radius: 50px;
  padding: 4px 8px;
`;