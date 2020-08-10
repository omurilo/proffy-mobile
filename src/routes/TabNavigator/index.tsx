import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ClassesList from '../../pages/ClassesList';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Study" component={ClassesList} />
      <Screen name="Favorites" component={ClassesList} />
    </Navigator>
  );
};

export default TabNavigator;
