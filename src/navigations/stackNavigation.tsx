import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsScreens from './bottomTab';
import SplashScreen from '@screens/splash/splashScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="bottomTab" component={BottomTabsScreens} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
