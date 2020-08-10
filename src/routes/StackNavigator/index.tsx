import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../TabNavigator';

const { Screen, Navigator } = createStackNavigator();

import Landing from '../../pages/Landing';
import { View } from 'react-native';

const StackNavigator: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Landing" component={Landing} />
      <Screen name="Tabs" component={TabNavigator} />
      <Screen name="SucessGiveClasses" component={() => <View />} />
    </Navigator>
  );
};

export default StackNavigator;
