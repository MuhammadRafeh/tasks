import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    if (enteredGoal.length === 0) return
    setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), text: enteredGoal }])
    setIsAddMode(false);
  }

  const removeGoalHandler = id => {
    setCourseGoals(prevState => {
      return prevState.filter(goal => goal.id !== id)
    });
  }

  const resetAddMode = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => { setIsAddMode(true) }} />
      <GoalInput
        resetAddMode={resetAddMode}
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courseGoals}
        renderItem={({ item }) =>
          <GoalItem
            id={item.id}
            onDelete={removeGoalHandler}
            text={item.text} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
