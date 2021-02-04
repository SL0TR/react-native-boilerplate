import React from 'react';
import { Container } from '@app/styles';
import { UserLogin, LanguageSwitch } from '@app/features';

function LoginScreen(props) {
  return (
    <Container direction="column">
      <UserLogin {...props} />
      <LanguageSwitch />
    </Container>
  );
}

export default LoginScreen;
