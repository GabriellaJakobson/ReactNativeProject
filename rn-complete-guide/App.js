import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} color="#696969"/>

      </View>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem title={itemData.item.value} />      
        }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'},
  input: { 
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10},

  
});
