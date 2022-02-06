import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

/* import styles from '../Bazzaar/src/styles'; */
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const App = () =>{

 /*  return (
    <SafeAreaView style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
    <View>
        <ScrollView style={styles.Scrollcontainer} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>BaZzAaR</Text>
          <View style={styles.line}/>

          <View style={styles.thumb}>
            <View style={styles.buy}>
              <Text style={styles.off}>Até 50% de desconto</Text>
              <TouchableOpacity style={styles.button} accessible={true} accessibilityLabel={'Toque no centro esquerdo para enviar!'} onPress={
                ()=>this.props.navigation.navigate('Categorias',{screen:'Categorias',params:{promocoes:true,show:false,text:'Expandir',name:'arrow-down',feminino: false,masculino:false,novidades: false}})
                }>
                <Text style={styles.comprar}>Comprar</Text>
              </TouchableOpacity>
            </View> 
            <Image source={capa} style={styles.image}/>
          </View>
          <Text onPress={()=>Linking.openURL('https://br.freepik.com/fotos/verao')}>Verão foto criado por halayalex - br.freepik.com</Text>
          </ScrollView>
      </View>
    </SafeAreaView>
  ); */

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

}

export default App;


