import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { theme, Translator } from '@app/config';
import { store, persistor } from '@app/store';

function AppProvider({ children }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            {children}
            <Translator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
