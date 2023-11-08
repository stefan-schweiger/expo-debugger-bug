import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home: React.FunctionComponent = () => {
  const pressButton = () => {
    console.log('press');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Test</Text>
        <Button onPress={pressButton} title="Test" />
      </View>
    </SafeAreaView>
  );
};
