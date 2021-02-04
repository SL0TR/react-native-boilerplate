import React from 'react';
import { H1, Spacer, Container } from '@app/styles';
import { Button } from '@app/components';
import { useDispatch } from 'react-redux';
import { logout, LanguageSwitch } from '@app/features';
import { useTranslation } from 'react-i18next';

function HomeScreen(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container {...props} direction="column" align="center">
      <H1 width="100%" align="center">
        {t('homepageTitle')}
      </H1>
      <Spacer />
      <Button
        width="200px"
        outline="primary"
        onPress={handleLogout}
        title={t('logoutBtn')}
      />
      <Spacer />
      <LanguageSwitch />
    </Container>
  );
}

export default HomeScreen;
