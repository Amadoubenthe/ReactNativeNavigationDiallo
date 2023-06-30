/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabRoute from '../TabRoute';
import StackRoute from '../StackRoute';

const options = {
  title: 'Accueil',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator screenOptions={{title: ''}}>
      <Drawer.Screen name="home" component={TabRoute} options={options} />
      <Drawer.Screen
        name="settings"
        component={StackRoute}
        options={{
          drawerLabel: 'Paramètres',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
