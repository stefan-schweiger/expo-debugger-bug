import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { Platform, UIManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useCachedResources } from './common/hooks';
import { Navigation } from './navigation/RootNavigation';

void SplashScreen.preventAutoHideAsync();

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const App: React.FunctionComponent = () => {
  const resourcesLoaded = useCachedResources();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (resourcesLoaded && ready) {
      // Only hide splash screen once the root layout has been rendered
      await SplashScreen.hideAsync();
    }
  }, [resourcesLoaded, ready]);

  if (!ready || !resourcesLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
