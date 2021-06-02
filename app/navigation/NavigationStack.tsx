import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Calc from 'app/screens/Calc';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const CalcNavigator = () => {
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Calc"
        component={Calc}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: 'push',
          headerRight: () => <ThemeController />,
        }}
      />
    </AuthStack.Navigator>
  );
};

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen
          name="RNCalculator"
          component={CalcNavigator}
          options={{
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: 'push',
            headerRight: () => <ThemeController />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
