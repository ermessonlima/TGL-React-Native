import React from 'react';
import SignIn from './src/screens/SignIn'
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import 'react-native-gesture-handler';
import Routes from './src/routes'


export default function App() {
  return (
  
    <ThemeProvider theme={theme}>
        < Routes />
    </ThemeProvider>

  );
}

//expo start --android