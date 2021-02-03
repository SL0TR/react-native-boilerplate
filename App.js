import 'react-native-gesture-handler';
import React from 'react';
import { AppProvider } from '@app/components';
import AppNavigator from '@app/navigator';

const App = () => {
  return (
    <>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </>
  );
};

export default App;
