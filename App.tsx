import React from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigator/MainStackNavigator';

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </UtilityThemeProvider>
  );
};

export default App;

// const styles = StyleSheet.create({})
