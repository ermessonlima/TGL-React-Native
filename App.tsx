import React from 'react';
import Routes from './src/routes'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/lib/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          < Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

//expo start --android