import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import TabNavigator from '../TabNavigator';
import Landing from '../../pages/Landing';
import ClassForm from '../../pages/ClassForm';

const { Screen, Navigator } = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Landing" component={Landing} />
      <Screen name="Tabs" component={TabNavigator} />
      <Screen name="GiveClasses" component={ClassForm} />
      <Screen name="SucessGiveClasses" component={() => <View />} />
    </Navigator>
  );
};

export default StackNavigator;
