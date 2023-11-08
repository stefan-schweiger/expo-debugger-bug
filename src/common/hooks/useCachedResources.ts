import {
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  useFonts,
} from '@expo-google-fonts/raleway';
import { useEffect, useState } from 'react';

export const useCachedResources = () => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    MaterialIcons_300: require('@assets/fonts/material-icons/MaterialIcons-300.otf'),
  });

  useEffect(() => setResourcesLoaded(true), []);

  return resourcesLoaded && fontsLoaded;
};
