import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    // console.log(enteredGoal)
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
      <Button title="Add New Goal" onPress={() => {setIsAddMode(true)}}/>
      <GoalInput resetAddMode={resetAddMode} visible={isAddMode} addGoalHandler={addGoalHandler} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courseGoals}
        renderItem={({ item }) =>
          <GoalItem
            id={item.id}
            onDelete={removeGoalHandler}
            text={item.text}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={{paddingTop: 30, flex: 1, backgroundColor: 'black', flexDirection: 'column', alignItems: 'flex-start'}}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           justifyContent: 'center',
//           alignSelf: 'stretch',
//           // flex: 1, //take space along main axes
//           // width: 100,
//           height: 100,
//           alignItems: 'center'}}
//       >
//         <Text>1</Text>
//       </View>
//       <View 
//         style={{
//           // flex: 1,
//           backgroundColor: 'orange',
//           justifyContent: 'center',
//           height: 100,
//           // flex: 1,
//           width: 150,
//           // alignSelf: 'flex-end',
//           alignItems: 'center'}}
//       >
//         <Text>2</Text>
//       </View>
//       <View 
//         style={{
//           backgroundColor: 'green',
//           justifyContent: 'center',
//           height: 100,
//           // flex: 3,
//           // alignSelf: 'center',
//           width: 100,
//           alignItems: 'center'}}
//       >
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});