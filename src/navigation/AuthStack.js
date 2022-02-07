import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../Pages/OnboardingScreen';
import LoginScreen from '../Pages/LoginScreen';
/* 
const Stack = createNativeStackNavigator(); */

const Stack = createStackNavigator();

const AuthStack = () => {
  return (

       <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name="Onboarding" 
            component={OnboardingScreen} 
            /> 

          {/*   <Stack.Screen name="Home" component={Home} /> */}

            <Stack.Screen 
            name="Login" 
            component={LoginScreen} 

            />
        </Stack.Navigator> 

  );
};

export default AuthStack;
