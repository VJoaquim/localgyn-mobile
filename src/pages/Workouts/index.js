import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/colors';

import { RectButton } from 'react-native-gesture-handler';

const Workouts = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Maik');
  const [workoutSelected, setWorkout] = useState(1);
  const [workouts, setWorkouts] = useState([
    {id: 1, name: 'Treino A'},
    {id: 2, name: 'Treino B'},
    {id: 3, name: 'Treino C'},
    {id: 4, name: 'Treino D'},
    {id: 5, name: 'Treino E'},
    {id: 6, name: 'Treino F'},
  ]);

  const [exericios, setExercicios] = useState([
    {id: 1, name: 'Prancha na esteira', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-001.png'), gif: 'url.gif'},
    {id: 2, name: 'Supino reto', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-002.png'), gif: 'url.gif'},
    {id: 3, name: 'Remeda alternada', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-003.png'), gif: 'url.gif'},
    {id: 4, name: 'Cruxifixo', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-001.png'), gif: 'url.gif'},
    {id: 5, name: 'Remeda alternada', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-003.png'), gif: 'url.gif'},
    {id: 6, name: 'Cruxifixo', series: 5, repeats: 15, thumbnail: require('../../assets/images/ex-001.png'), gif: 'url.gif'},
  ])
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 40,
        }}>

        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.welcomeName}>{`Olá, ${name}`}</Text>
            <Text style={styles.welcomeDescription}>Bem-vindo(a)</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.headerInfo}>
              <Image resizeMode="cover" style={styles.headerAvatar} source={require('../../assets/images/avatar.jpg')}/>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelMyWorkouts}>Meus treinos</Text>

        <FlatList
          style={styles.listWorkouts} 
          horizontal
          data={workouts}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity key={item.id} onPress={() => setWorkout(item.id)}>
              <View style={item.id === workoutSelected ? styles.buttonWorkout : styles.buttonWorkoutInactive}>
                {item.id === workoutSelected && (
                  <Image source={require('../../assets/images/point.jpg')} width="7" height="7" style={{ borderRadius: 7, }}/>
                )}
                
                <Text style={item.id === workoutSelected ? styles.workoutName : styles.workoutNameInactive}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.labelExercicio}>Exercícios:</Text>

        <FlatList
          data={exericios}
          renderItem={({item, index}) => (
            <TouchableOpacity  onPress={() => navigation.navigate('WorkoutDetails')} key={index}>
              <View style={styles.buttonExercicio}>
                <Image source={item.thumbnail} resizeMode="cover"/>

                <View style={styles.infoExercicio}>
                  <Text style={styles.nameExercicio}>{item.name}</Text>
                  <View style={styles.infoRepeatsAndSeries}>
                    <View style={styles.col}>
                      <Text style={styles.labelCol}>Séries</Text>
                      <Text style={styles.contentCol}>{item.series}</Text>
                    </View>
                    <View style={styles.col}>
                      <Text style={styles.labelCol}>Repetições</Text>
                      <Text style={styles.contentCol}>{item.repeats}</Text>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerInfo:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeName: {
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: 10,
    color: Colors.black,
    marginBottom: 4,
  },
  welcomeDescription: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black,
  },
  headerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  labelMyWorkouts: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.black,
    marginTop: 47,
    marginBottom: 22,
  },
  listWorkouts: {
    height: 32,
  },
  buttonWorkout: {
    backgroundColor: Colors.orange,
    height: 32,
    width: 116,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 16,
  },
  buttonWorkoutInactive: {
    backgroundColor: 'rgba(253, 128, 18, 0.1)',
    height: 32,
    width: 116,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 16,
    
  },
  workoutName: {
    color: Colors.default,
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: 14,
  },
  workoutNameInactive: {
    color: Colors.orange,
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: 14,
  },
  labelExercicio: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black,
    alignSelf: 'center',
    marginTop: 48,
    marginBottom: 16,
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

export default Workouts;