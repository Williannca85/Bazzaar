import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './src/navigation/AppStack';


/* import HomeScreen from '../src/components/HomeScreen';  */


const Stack = createStackNavigator();

const App = () =>{

     return   (

      <NavigationContainer>
          {/* <AuthStack/> */}
          <AppStack />
      </NavigationContainer>
 ); 
}

/*      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="Onboarding" 
            component={OnboardingScreen} 
            options={{headerShown:false}} 
            />

             <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{headerShown:false}} 
            />
        </Stack.Navigator> 
      </NavigationContainer>
     ); 
} */

/* const Main = ({navigation}) =>{
 
      return (
    
          <LinearGradient 
            style={{
            height: '100%', 
            width: '100%', 
            }}
    
            start={{x:0,y:1}}
            end={{x:1,y:0}}
              locations={[.5,1,1.5]}
            colors={['#d5a5c5','#f9ccba','#94d7ee']}>
    
        <SafeAreaView style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
    
        <View>
         <Text style={{
           fontSize: 40, 
           color:'#21315f', 
           fontFamily: 'Poppins-MediumItalic',
    
          }}>
              BaZzAaR
          </Text>
        </View>
       
    
          <TouchableOpacity 
             onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor:'#ad40af', 
            padding:10, 
            width: '90%', 
            borderRadius:10, 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            }}>
                <Text
                style={{
                  fontSize:30, 
                  color:'#ffffff',
                  fontFamily: 'Poppins-MediumItalic'
                }}>
                  Vamos as Compras</Text>
                  <Icon name="shopping-cart" size={35} color="#fff" />
          </TouchableOpacity>
    
    
        </SafeAreaView>
      </LinearGradient>
      )
    
    } */
    
/*     const Home = () => {

          return (

          <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
           </View>

          );
    } */
    
    export default App;
    
    
    