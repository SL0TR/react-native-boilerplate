import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, H2, H3, Spacer, Input, ErrorMessage } from '@app/styles';
import { loginSchema } from '@app/lib';
import { Button } from '@app/components';
import { useDispatch } from 'react-redux';
import { loginReq } from './reducer';
import { useTheme } from 'styled-components/native';

const initErrState = {
  phoneNum: null,
  password: null,
};

function UserLogin({ navigation }) {
  const { t } = useTranslation();
  const [phoneNum, setPhoneNum] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(initErrState);
  const theme = useTheme();

  const dispatch = useDispatch();

  function handleSubmission() {
    try {
      loginSchema.validateSync({ password, phoneNum });
      setError(initErrState);
      dispatch(loginReq());
    } catch ({ path, message }) {
      setError({ ...initErrState, [path]: t(message) });
    }
  }

  useEffect(() => {
    setError(initErrState);
  }, []);

  return (
    <Container
      width="100%"
      direction="column"
      justify="center"
      align="center"
      py="36px"
      px="16px"
    >
      {/* <HkLogo height={160} width={160} /> */}
      <Spacer height="26px" />
      <H2 fs="26px">{t('appTitle')}</H2>
      <Spacer />
      <H3 fs="26px">{t('login')}</H3>
      <Spacer />
      <Container width="100%" direction="column">
        <Spacer width="5px" />
        <Input
          value={phoneNum}
          onChangeText={val => setPhoneNum(val)}
          placeholder={t('inputNumber')}
          keyboardType="numeric"
          placeholderTextColor={theme.text}
        />
        <Spacer height="5px" />
        <ErrorMessage width="100%">{error.phoneNum}</ErrorMessage>
        <Spacer height="5px" />
        <Input
          value={password}
          onChangeText={val => setPassword(val)}
          placeholder={t('inputPassword')}
          keyboardType="numeric"
          placeholderTextColor={theme.text}
        />
        <Spacer height="5px" />
        <ErrorMessage width="100%">{error.password}</ErrorMessage>
      </Container>

      <Spacer height="60px" />
      <Button bg="accent" onPress={handleSubmission} title="login" />
      <Spacer height="15px" />
    </Container>
  );
}

export default UserLogin;
