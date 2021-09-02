import React from 'react';
import SignIn from './src/screens/SignIn'
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import 'react-native-gesture-handler';
import Routes from './src/routes'
import { Provider } from 'react-redux';
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/lib/integration/react';


export default function App() {
  return (
    <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}> 
        <ThemeProvider theme={theme}>
        < Routes />
    </ThemeProvider>
    </PersistGate>
    
    </Provider>

  );
}

//expo start --android