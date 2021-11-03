import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Views/Login/Login';
import Signup from './Views/SignUp/SignUp';
const Navigation=()=> {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
export default Navigation;