import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ClassesList from '../../pages/ClassesList';
import ClassForm from '../../pages/ClassForm';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Navigator>
      <Screen name="ClassesList" component={ClassesList} />
      <Screen name="ClassForm" component={ClassForm} />
    </Navigator>
  );
};

export default TabNavigator;
