import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: ${props =>
    props.justify ? props.justify : 'space-between'};
  padding-left: ${props => (props.px ? props.px : 0)};
  padding-right: ${props => (props.px ? props.px : 0)};
  padding-top: ${props => (props.py ? props.py : 0)};
  padding-bottom: ${props => (props.py ? props.py : 0)};
  margin-left: ${props => (props.mx ? props.mx : 0)};
  margin-right: ${props => (props.mx ? props.mx : 0)};
  margin-top: ${props => (props.my ? props.my : 0)};
  margin-bottom: ${props => (props.my ? props.my : 0)};
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  background-color: ${props =>
    props.bg ? props.theme[props.bg] : 'transparent'};
  align-items: ${props => (props.align ? props.align : 'flex-start')};
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  border-radius: ${props => (props.corner ? props.corner : '0px')};
  flex-wrap: ${props => (props.wrap ? props.wrap : 'nowrap')};
`;
