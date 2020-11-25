import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/colors';
import Button from '../../components/Button';

const Profile = () => {
  const navigation = useNavigation();

  function handleSelectImages() {
    //Select Image
    alert('Selecionar Imagem');  
  }

   return (
     <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView 
          contentContainerStyle={{
            flex: 1,
            paddingHorizontal: 40,
          }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.buttonGoBackContainer}>
                <Image source={require('../../assets/images/goback.png')} />
              </View>

            </TouchableOpacity>
            <Text style={styles.headerTitle}>Perfil</Text>
          </View>

          <TouchableOpacity style={styles.buttonChangeAvatar}
            onPress={handleSelectImages}>
              <Image style={styles.avatarProfile} source={require('../../assets/images/avatar.jpg')} />
          </TouchableOpacity>
          
          <Text style={styles.username}>Priscila Santos</Text>

          <Text style={styles.description}>Atualize os dados do seu cadastro</Text>

          <Text style={styles.inputLabel}>Novo e-mail</Text>
          <TextInput keyboardType="email-address" style={styles.input} />
          
          <Text style={styles.inputLabel}>Nova senha</Text>
          <TextInput keyboardType="default" style={styles.input} />

          <View style={styles.containerButton}>
            <Button buttonName="Atualizar"/>
          </View>
        </ScrollView>
        <View style={styles.bottom} />
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: Colors.blue, }} />
     </>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
  header: {
    marginTop: 18,
    height: 18,
    flexDirection: 'row',
  },
  headerTitle: {
    color: Colors.blue,
    fontSize: 16,
    fontFamily: 'Ubuntu',
    marginLeft: 32,
    fontWeight: 'bold',
  },
  buttonGoBackContainer: {
    height: 18,
    width: 20,
  },
  buttonChangeAvatar: {
    width: 64,
    height: 64,
    flexDirection: 'row',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 58,
    marginBottom: 16,
  },
  avatarProfile: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  username: {
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.color_name,
    marginBottom: 55,
    alignSelf: 'center',
  },
  description: {
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.black,
    alignSelf: 'center',
    marginBottom: 32,
  },
  inputLabel: {
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.black,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border_input,
    marginBottom: 8,
    paddingHorizontal: 20,
    color: Colors.black
  },
  containerButton: {
    marginTop: 15,
  },
  bottom: {
    height: 48,
    backgroundColor: Colors.blue,
  }
})

export default Profile;