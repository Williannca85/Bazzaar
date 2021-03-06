import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../Pages/OnboardingScreen';
import LoginScreen from '../Pages/LoginScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (

       <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name="Onboarding" 
            component={OnboardingScreen} 
            /> 

            <Stack.Screen 
            name="Login" 
            component={LoginScreen} 

            />
        </Stack.Navigator> 

  );
};

export default AuthStack;
