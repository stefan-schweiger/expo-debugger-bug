import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { Home } from '@/screens/Home';

import { MainTabParamList } from './types';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};
