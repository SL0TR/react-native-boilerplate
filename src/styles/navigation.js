import styled from 'styled-components/native';
import { Container } from './grid';

export const Appbar = styled(Container)`
  background-color: ${props => props.theme.accent};
  padding: 10px 20px;
`;
