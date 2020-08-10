import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

import { primary } from './utils/colors';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      <Routes />
    </>
  );
};

export default App;
