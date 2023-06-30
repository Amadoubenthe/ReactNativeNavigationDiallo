import {createDrawerNavigator} from '@react-navigation/drawer';
import TabRoute from '../TabRoute';
import StackRoute from '../StackRoute';

// import TabRoutes from './tab.routes';
// import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator screenOptions={{title: ''}}>
      <Drawer.Screen
        name="home"
        component={TabRoute}
        options={{
          drawerLabel: 'Accueil',
        }}
      />

      <Drawer.Screen
        name="profile"
        component={StackRoute}
        options={{
          drawerLabel: 'Mon Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
