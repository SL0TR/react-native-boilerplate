import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HomeScreen, LoginScreen } from '@app/screens';
import { GenericAppBar } from '@app/features';

const Stack = createStackNavigator();

export default function AppStack() {
  const idToken = useSelector(state => state.Auth.idToken);
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => (idToken ? <GenericAppBar {...props} /> : null),
      }}
    >
      {idToken ? (
        <>
          <Stack.Screen
            options={{ title: t('halkhata') }}
            name="Home"
            component={HomeScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{ title: t('login') }}
            name="Login"
            component={LoginScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
