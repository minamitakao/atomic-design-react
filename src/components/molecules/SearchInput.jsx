import styled from 'styled-components';
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from '../atom/input/input';

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="入力せーよ" />
      <PrimaryButton>検索</PrimaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  padding: 8px;
`;
