import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './pages/Profile';
import Workouts from './pages/Workouts';
import WorkoutDetails from './pages/WorkoutDetails';
import Login from './pages/Login';
import Register from './pages/Register';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Workouts" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Workouts" component={Workouts}/>
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetails}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;