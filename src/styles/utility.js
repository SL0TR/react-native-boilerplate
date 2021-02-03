import styled from 'styled-components/native';

export const Spacer = styled.View`
  height: ${props => (props.height ? props.height : '10px')};
  width: ${props => (props.width ? props.width : '100%')};
`;

export const Chip = styled.View`
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.primary};
  padding: 5px 10px;
  border-radius: 10px;
`;
