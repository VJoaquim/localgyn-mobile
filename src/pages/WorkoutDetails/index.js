import React, { useState } from 'react';
import { 
  View, 
  StyleSheet,
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  Image, 
  Text , FlatList} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/colors';
const WorkoutDetails = () => {
  const navigation = useNavigation();
  const [exericios, setExercicios] = useState([
    {id: '1', name: 'Prancha na esteira', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-001.png'), gif: 'url.gif', done: true},
    {id: '2', name: 'Supino reto', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-002.png'), gif: 'url.gif', done: true},
    {id: '3', name: 'Remeda alternada', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-003.png'), gif: 'url.gif', done: false},
    {id: '4', name: 'Cruxifixo', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-001.png'), gif: 'url.gif', done: true},
    {id: '5', name: 'Remeda alternada', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-003.png'), gif: 'url.gif', done: true},
    {id: '6', name: 'Cruxifixo', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-001.png'), gif: 'url.gif', done: false},
  ])
   return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Image style={styles.gif} resizeMode="cover" source={require('../../assets/images/barra.gif')} />
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/images/goBackWhite.png')} />
      </TouchableOpacity>
     </View>
     <View style={styles.descriptionContainer}>
      <View style={styles.descriptionContent}>
        <Text style={styles.labelDescription}>Descrição</Text>
        <Text style={styles.descriptionExercicio}>Aqui vai entrar uma descrição
de umas duas ou três linhas.</Text>
      </View>
      <View style={styles.containerDone}>
        <Text style={styles.labelDone}>Finalizar</Text>
        <TouchableOpacity underlayColor="transparent" onPress={() => {}} style={styles.buttonFinalizar}>
          <Image source={require('../../assets/images/check.png')} />
        </TouchableOpacity>
      </View>
     </View>

     <View style={styles.containerSeries}>
      <View style={styles.columnSeries}>
        <Text style={styles.labelSeries}>Séries</Text>
        <Text style={styles.descriptionSeries}>5</Text>
      </View>

      <View style={styles.columnSeries}>
        <Text style={styles.labelSeries}>Repetições</Text>
        <Text style={styles.descriptionSeries}>15</Text>
      </View>
     </View>
    <ScrollView
     contentContainerStyle={{
       paddingHorizontal: 20,
     }}>
    
     <FlatList
       data={exericios}
       renderItem={({item, index}) => (
         <TouchableOpacity  onPress={() => {}} key={index}>
           <View style={item.done ? styles.buttonExercicioDone : styles.buttonExercicio}>
             <Image source={item.thumbnail} resizeMode="cover"/>

             <View style={styles.infoExercicio}>
               <Text style={item.done ? [styles.nameExercicio, {color: Colors.default}] : styles.nameExercicio}>{item.name}</Text>
               <View style={styles.infoRepeatsAndSeries}>
                 <View style={styles.col}>
                   <Text style={item.done ? [styles.labelCol, {color: Colors.default}] : styles.labelCol}>Séries</Text>
                   <Text style={item.done ? [styles.contentCol, {color: Colors.default}] : styles.contentCol}>{item.series}</Text>
                 </View>
                 <View style={styles.col}>
                   <Text style={item.done ? [styles.labelCol, {color: Colors.default}] : styles.labelCol}>Repetições</Text>
                   <Text style={item.done ? [styles.contentCol, {color: Colors.default}] : styles.contentCol}>{item.repeats}</Text>
                 </View>
               </View>
             </View>
             <RectButton>
               <View style={styles.buttonPlay}>
                 <Image source={require('../../assets/images/play.png')} />
               </View>
             </RectButton>
           </View>
         </TouchableOpacity>
       )}
     />

    </ScrollView>
  </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
  headerContainer:{
    width: '100%'
  },
  gif: {
    width: '100%',
    height: 165,
  },
  goBack: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  descriptionContainer: {
    height: 95,
    borderBottomWidth: 1,
    borderColor: Colors.color_divider,
    marginHorizontal: 20,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContent: {
    flex: 1,
  },
  labelDescription: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.black,
  },
  descriptionExercicio: {
    width: '70%',
    fontFamily: 'Nunito',
    fontWeight: '300',
    fontSize: 12,
    color: Colors.black,
    lineHeight: 18,
    marginTop: 8,
  },
  containerDone:{
    width: '20%',
    height: 57,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  labelDone: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.black,
  },
  buttonFinalizar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.green,
  },
  containerSeries: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 20
  },
  columnSeries: {
    width: '45%',
    borderBottomWidth: 1,
    borderColor: Colors.color_divider,
    paddingBottom: 16,
  },
  labelSeries: {
    fontFamily: 'Nunito',
    fontWeight: '300',
    fontSize: 12,
    color: Colors.black,
    marginBottom: 8,
  },
  descriptionSeries: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.black,
  },
  buttonExercicio: {
    height: 101,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(229,229,229,1)',
    borderRadius: 4,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    marginBottom: 16,
    flexDirection: 'row',
  },
  buttonExercicioDone: {
    height: 101,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(229,229,229,1)',
    borderRadius: 4,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    marginBottom: 16,
    flexDirection: 'row',
    backgroundColor: Colors.blue
  },
  infoExercicio: {
    flex: 1,
    paddingRight: 34,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  nameExercicio: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.blue,
    marginTop: 11,
    marginBottom: 16,
    alignSelf: 'flex-start',
    paddingLeft: 16,
  },
  infoRepeatsAndSeries: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 16,
  },
  col: {
    alignItems: 'center'
  },
  labelCol: {
    fontFamily: 'Nunito',
    fontWeight: '300',
    color: Colors.blue,
    fontSize: 14,
  },
  contentCol: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: Colors.blue,
    fontSize: 12,
  },
  buttonPlay: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 43,
  }
});

export default WorkoutDetails;