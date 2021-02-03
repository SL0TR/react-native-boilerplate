import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Input = styled(TextInput)`
  background-color: transparent;
  width: ${props => (props.width ? props.width : '100%')};
  color: ${props => (props.color ? props.color : props.theme.text)};
  border: 1px solid #aaaaaa;
  padding: 10px 15px;
`;

export const SearchInput = styled.TextInput`
  color: ${props => props.theme.primary};
  font-size: 16px;
`;
