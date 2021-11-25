import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {Screens} from '../utils/Constants';
import Webview from '../screens/Webview';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Home}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name={Screens.Home} component={Home} />
        <Stack.Screen name={Screens.Detail} component={Detail} />
        <Stack.Screen name={Screens.Webview} component={Webview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
