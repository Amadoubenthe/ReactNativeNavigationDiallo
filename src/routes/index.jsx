import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerRoute from './DrawerRoute';

const Route = () => {
  return (
    <NavigationContainer>
      <DrawerRoute />
    </NavigationContainer>
  );
};

export default Route;
