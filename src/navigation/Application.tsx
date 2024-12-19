import Home from '@/page/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PortalHost} from '@rn-primitives/portal';

const Stack = createNativeStackNavigator();
function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <PortalHost />
    </NavigationContainer>
  );
}

export default ApplicationNavigator;