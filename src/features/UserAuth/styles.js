import styled from 'styled-components/native';

export const SingleDigitBox = styled.View`
  height: 58px;
  width: 44px;
  border-width: 1px;
  border-color: ${props => props.theme.primary};
  margin: 0 4px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
