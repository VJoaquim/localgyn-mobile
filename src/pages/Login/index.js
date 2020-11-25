import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../../styles/colors';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';



const Login = ( props  ) => {
   const navigation = useNavigation();
   return (
    <>
     <SafeAreaView style={styles.container}>
        <ScrollView 
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between'
          }}
        >

          <Image 
            resizeMode="contain" 
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            />
          <KeyboardAvoidingView  behavior={Platform.OS == "ios"?? "padding"}> 
            <View style={styles.formContainer}>
              <Text style={styles.descriptionFormulario}>Faça o <Text style={{ fontWeight: 'bold' }}>LOGIN</Text> usando seu e-mail</Text>
              
              <Text style={styles.label}>Seu e-mail</Text>
              <TextInput style={styles.input} keyboardType="email-address" autoCapitalize="none" />

              <Text style={styles.label}>Senha</Text>
              <TextInput style={styles.input} autoCapitalize="none" />
              
              <Button buttonName="Acessar" />
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <View>
                  <Text style={[styles.descriptionFormulario, { paddingBottom: 20 }]}>Não tem uma conta? <Text style={{ fontWeight: 'bold' }}>Criar agora</Text></Text>  
                </View>
              </TouchableOpacity>
              
            </View>
          </KeyboardAvoidingView>
      </ScrollView>
     </SafeAreaView>
     <SafeAreaView style={{ backgroundColor: Colors.blue }}/>
     </>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.default,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    width: 155,
    height: 78,
    alignSelf: 'center',
    marginTop: 52,
  },
  formContainer: {
    backgroundColor: Colors.blue,
    height: 368,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: 'column',
    paddingHorizontal: 40,
  },
  descriptionFormulario: {
    fontSize: 14,
    color: Colors.default,
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 'normal',
    color: Colors.default,
    marginBottom: 4,
  },
  input: {
    height: 48,
    borderRadius: 4,
    backgroundColor: Colors.bg_input,
    marginBottom: 8,
    paddingHorizontal: 16,
    color: Colors.blue
  }

});

export default Login;
