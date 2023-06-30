import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Setting from '../../screens/Setting';

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Setting} />
    </Stack.Navigator>
  );
};

export default StackRoute;
