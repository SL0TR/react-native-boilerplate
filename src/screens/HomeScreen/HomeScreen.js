import React from 'react';
import { Container } from '@app/styles';
import { H1 } from '@app/styles';
import { Button } from '@app/components';
import { useDispatch } from 'react-redux';
import { logout } from '@app/features';

function HomeScreen(props) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container height="100%" {...props}>
      <H1>Home page!</H1>
      <Button onPress={handleLogout} title="Logout" />
    </Container>
  );
}

export default HomeScreen;
