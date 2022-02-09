import React from 'react';
/* import {createStackNavigator} from '@react-navigation/stack'; */

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../Pages/HomeScreen'
import ProfileScreen from '../Pages/ProfileScreen';
import MessagesScreen from '../Pages/MessagesScreen';
import PagamentosScreen from '../Pages/PagamentosScreen';
import SettingsScreen from '../Pages/SettingsScreen';
import CardScreen from '../Pages/CardScreen';

import TabNavigator from './TabNavigator';

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
            <Material name="category" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pagamentos"
        component={PagamentosScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cartões"
        component={CardScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="card-outline" size={22} color={color} />
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


