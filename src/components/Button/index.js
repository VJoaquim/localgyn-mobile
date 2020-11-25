import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/colors';

const Button = ( props ) => {
  const navigation = useNavigation();

   return (
     <RectButton style={styles.container} onPress={props.onPress}>
       <View>
        <Text style={styles.buttonTitle}>{props.buttonName}</Text>
       </View>
     </RectButton>
   );
}

const styles = StyleSheet.create({
  container: {
    height: 51,
    width: '100%',
    backgroundColor: Colors.orange,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: Colors.default,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default Button;
