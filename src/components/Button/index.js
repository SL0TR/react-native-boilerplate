import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components/native';
import { H3 } from '@app/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Spacer } from '@app/styles';

const ButtonStyled = styled.TouchableHighlight`
  width: ${props => (props.width ? props.width : '100%')};
  background-color: ${props =>
    props.bg ? props.scTheme[props.bg] : 'transparent'};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-color: ${props =>
    props.outline ? props.scTheme[props.outline] : 'transparent'};
  border-width: 1px;
  text-transform: none;
  flex-direction: row;
`;

function Button({ title, icon, ...rest }) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <ButtonStyled
      {...rest}
      theme={{ colors: { primary: '#fff' } }}
      scTheme={theme}
      hasButton={Boolean(icon)}
    >
      <>
        {icon && <MaterialIcons name={icon} color={theme.text} />}
        {icon && <Spacer width="5px" />}
        <H3 style={{ textTransform: 'none' }}>{t(title)}</H3>
      </>
    </ButtonStyled>
  );
}

export default Button;
