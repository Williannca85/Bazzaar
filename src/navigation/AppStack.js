import React from 'react';
/* import {createStackNavigator} from '@react-navigation/stack'; */

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Pages/HomeScreen'


/* const Stack = createStackNavigator(); */

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (

    <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
       {/*  <Drawer.Screen name="Onboarding" component={OnboardingScreen} /> */}
    </Drawer.Navigator>


/*     <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator> */
  );
};

export default AuthStack;


/* import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../Pages/ProfileScreen';
import MessagesScreen from '../Pages/MessagesScreen';
import MomentsScreen from '../Pages/MomentsScreen';
import SettingsScreen from '../Pages/SettingsScreen';

import TabNavigator from './TabNavigator';
import Categorias from '../Pages/Categorias';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#0e105cab',
        drawerActiveTintColor: '#f9ccbaff',
        drawerInactiveTintColor: '#000000',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Poppins-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Categorias"
        component={MessagesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pagamentos"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
 */
