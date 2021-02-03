import React from 'react';
import { Container } from '@app/styles';
import { UserLogin } from '@app/features';

function LoginScreen(props) {
  return (
    <Container height="100%">
      <UserLogin {...props} />
    </Container>
  );
}

export default LoginScreen;
