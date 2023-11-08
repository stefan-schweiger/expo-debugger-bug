/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  filter: (url) => !url.includes('+expo-auth-session'),
  config: {
    screens: {
      Main: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Transactions: {
            path: 'transactions',
            screens: {
              Details: ':id',
            },
          },
        },
      },
    },
  },
};

export default linking;
