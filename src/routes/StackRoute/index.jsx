import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator screenOptions={{title: ''}}>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackRoute;
