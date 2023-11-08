/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';

import LinkingConfiguration from './LinkingConfiguration';
import { MainNavigator } from './MainNavigator';
import { RootStackParamList } from './types';

export const Navigation: React.FC = () => (
  <NavigationContainer linking={LinkingConfiguration} theme={{ ...DefaultTheme }}>
    <RootSiblingParent>
      <RootNavigator />
    </RootSiblingParent>
  </NavigationContainer>
);

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
      <Stack.Screen name="Main" component={MainNavigator} options={{ animation: 'fade' }} />
    </Stack.Navigator>
  );
};
