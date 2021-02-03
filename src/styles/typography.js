import styled from 'styled-components/native';
import { getFontFamily } from '@app/lib';

export const H1 = styled.Text`
  font-size: 32px;
  line-height: 42px;
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.text};
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const H2 = styled.Text`
  font-size: ${props => (props.fs ? props.fs : '20px')};
  line-height: 28px;
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.text};
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const H3 = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-weight: ${props => (props.weight ? props.weight : 400)};
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.text};
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const Body = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: ${props => (props.weight ? props.weight : 400)};
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.text};
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const Caption = styled.Text`
  /* font-family: ${props =>
    props.weight ? getFontFamily(props.weight) : 'AvenirNext-Regular'}; */
  font-size: 12px;
  line-height: 16px;
  font-weight: ${props => (props.weight ? props.weight : 400)};
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.text};
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const VerySmallTxt = styled.Text`
  font-size: 10px;
  line-height: 16px;
  font-weight: ${props => (props.weight ? props.weight : 400)};
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.text};
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const ErrorMessage = styled.Text`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: ${props => props.theme.error};
  width: ${props => (props.width ? props.width : 'auto')};
`;
